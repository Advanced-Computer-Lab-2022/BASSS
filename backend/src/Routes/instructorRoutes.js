const express = require("express");
const instructorR = express.Router();
const mongoose = require('mongoose');
const instructors = require("../Models/instructorSchema");
const courses = require("../Models/courseSchema");
const users = require('../Models/userSchema');
const bcrypt = require('bcrypt')

var nodemailer = require('nodemailer');

instructorR.get("/getInstructor", async(req,res)=>{
  const username = res.locals.user;
  const inst = await instructors.findOne({Username: username})
  return res.status(200).json(inst)
})

instructorR.get("/searchmycourses/:searchkey", async function(req,res){
    //token name
    const name = res.locals.user;

    const key = req.params.searchkey;
    var array = [];
    var query = await courses.find({InstructorUserName:res.locals.user});
    for(let i = 0 ; i<query.length ; i++)
    {
        course = query[i];
        if (course.Title.toLowerCase().includes(key.toLowerCase()) ||
            course.Subject.toLowerCase().includes(key.toLowerCase()))
        {
            array=array.concat(course);
        }
    }
    res.status(200).json(array)
 
 })

 instructorR.get('/instructorViewtitles', function(req, res) {
    //token name 
    // const name = res.locals.user;

    var query = courses.find({InstructorUserName:res.locals.user})
    query.exec(function(err,result){
        if (err) throw err;
        if(result.length==0){

        }else{
            courses.find({InstructorUserName:res.locals.user})            
            res.send(result);
        }
      })
})

instructorR.get("/myInfo/first/:minibio",function(req,res){
    //token name
    // const name = res.locals.user;

    var minibio = req.params.minibio;
    var query = instructors.find({Username:res.locals.user})
        query.exec(function(err,result){
            if (err) throw err;
            if(result.length==0){

            }else{
                instructors.findOneAndUpdate({Username:res.locals.user},{MiniBio:minibio},{upsert:true},function(err,doc){
                    if(err) throw err;
                  });         
            }
})

})
    

instructorR.get("/myInfo/second/:mail",function(req,res){
  //token name
  // const name = res.locals.user;
  //usermail??
  var mail = req.params.mail;
    var query = instructors.find({Username:res.locals.user})
        query.exec(function(err,result){
            if (err) throw err;
            if(result.length==0){
              //  res.render("../views/instructor.ejs",{title:"instructor country"});
            }else{
                instructors.findOneAndUpdate({Username:res.locals.user},{Email:mail},{upsert:true},function(err,doc){
                    if(err) throw err;
                  });         
              // res.render("../views/instructor.ejs",{title:"instructor country"});
            }
})

})
// instructorR.get("/myInfo/third/:pass",function(req,res){
//   //token name
//   const name = res.locals.user;

//   var pass = req.params.pass;
//     var query = instructors.find({Username:'soha'})
//         query.exec(function(err,result){
//             if (err) throw err;
//             if(result.length==0){
//               //  res.render("../views/instructor.ejs",{title:"instructor country"});
//             }else{
//                 instructors.findOneAndUpdate({Username:'soha'},{Password:pass},{upsert:true},function(err,doc){
//                     if(err) throw err;
//                   });         
//               // res.render("../views/instructor.ejs",{title:"instructor country"});
//             }
// })

// })
  
instructorR.get("/myInfo/third/:oldpass/:pass",async function(req,res){
  // console.log(req.body)
  var pass = req.params.pass;
  const salt = await bcrypt.genSalt();
  const hashedPassword = await bcrypt.hash(pass, salt);

  var oldpass = req.params.oldpass;
  
  var oldpass2 =await instructors.findOne({Username:res.locals.user})

  if(oldpass==oldpass2.Password){
  const result =await instructors.findOneAndUpdate({Username:res.locals.user},{Password:hashedPassword})
  //res.json(result)
  res.json({message:"updated successfully"})
  } else
  res.json({message:"incorrect password"})

})
  
instructorR.get("/myInfo/pass/:pass",async function(req,res){
    // console.log(req.body)
    var pass = req.params.pass;

    const result =await instructors.findOneAndUpdate({Username:"salama"},{Password:pass})
    //res.json(result)
    res.json({message:"updated successfully"})
    
})

instructorR.get("/viewRating/review",async(req, res) => {
  //token name
  const name = res.locals.user;

  const result =await instructors.findOne({Username:name})
  res.json(result)
});

instructorR.get("/getInst/:username",async(req, res) => {
  //token name
  const name = req.params.username;

  const result =await instructors.findOne({Username:name})
   res.json(result)
});


instructorR.get("/updateRate/:name/:newRate",async(req, res) => {
    //token name

    const name = req.params.name;
    var newRate = req.params.newRate;
    var oldResult =await instructors.findOne({Username:name})
    var oldCount = oldResult.Rating.count;
    var oldSum = oldResult.Rating.sum;
    const result =await instructors.findOneAndUpdate({Username:name},{Rating:{rate:(Number(oldSum)+Number(newRate))/(oldCount+1), count:(oldCount+1), 
    sum:(Number(oldSum)+Number(newRate))}})
    res.json(result)
    console.log('123')
});

instructorR.get("/reviewInst/:instName/:Review", async function(req,res){

  var Review = req.params.Review;
  var instName = req.params.instName;

  var inst = await instructors.findOne({Username:instName});

  var arr = inst.Reviews.concat(Review);

  const Result = await instructors.findOneAndUpdate({Username:instName}, {Reviews:arr})

  res.json(Result);

})

instructorR.get("/forgetpass/:username/:email", async (req,res) => {
  const username = req.params.username;
  const email = req.params.email;
  
  
  const user = await users.findOne({UserName: username})
  //const type = user.Type
  
  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'acltest321@gmail.com',
      pass: 'yzdnccfnpqvmwpgr'
    }
  });
  
  var mailOptions = {
    from: 'acltest321@gmail.com',
    to: email,
    subject: 'Sending Email using Node.js',
    text: 'To reset your password please click here , http://localhost:3000/instructor/forgetpass'
  };
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
})

instructorR.get("/vieMylWallet", async (req,res) => {
  //token name
  // const name = res.locals.user;

  const inst = await instructors.findOne({Username: res.locals.user})
  if(inst)
    return res.status(200).json(inst.Wallet)
  else
    return res.status(404).json("Not Found")
})

instructorR.get("/firstLogin", async (req,res) => {
  //token name
  //const name = res.locals.user
  const name = 'sara saad'

  const trainee = await instructors.findOne({Username: res.locals.user})
  if(!trainee){
    return res.status(400).json("User not found")
  }
  else{
    return res.status(200).json(trainee.FirstLogin)
  }
})

instructorR.get("/changeFirstLogin", async (req,res) => {
  //token name
  //const name = res.locals.user
  const name = 'sara saad'

  const inst = await instructors.findOneAndUpdate({Username: res.locals.user},{FirstLogin: false})
  if(!inst){
    return res.status(400).json("User not found")
  }
  else{
    return res.status(200).json(inst.FirstLogin)
  }
})

instructorR.post('/changePass', async (req,res) =>{
  // const name = res.locals.user;
  // console.log(name)
  // const name = 'sarasaad2001'
  const newPass = req.body.newPass;

  // if(!name){
  //     return res.status(400).json('You must be logged in')
  // }
  if(!newPass){
      return res.status(400).json('You must enter a new password')
  }

  const user = await users.findOne({UserName: res.locals.user})

  try{
    const hashedpass = user.Password;
    bcrypt.compare(newPass,hashedpass,(err,data)=>{
        if(err){
            return res.status(400).json('Not Found')
        }
        if(data){
            return res.status(400).json('New password cannot be old password')
          }
        })
        const salt = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(newPass, salt);
        const updatedUsers = await users.findOneAndUpdate({UserName: res.locals.user},{Password: hashedPassword})
      
        const updatedInsts = await instructors.findOneAndUpdate({Username: res.locals.user},{Password: hashedPassword})
        return res.status(200).json('Password Changed')
        
  } catch (error) {
      res.json({error: error.message})
  }
})


// instructorR.get("/:country",function(req,res){
//   const country = req.params.country;
//   // console.log(country);
//   var query = instructors.find({Username:"soha"})
//       query.exec(function(err,result){
//           if (err) throw err;
//           if(result.length==0){
//             //  res.render("../views/instructor.ejs",{title:"instructor country"});
//           }else{
//               instructors.findOneAndUpdate({Username:"soha"},{Country:country},{upsert:true},function(err,doc){
//                   if(err) throw err;
//                 });         
//             // res.render("../views/instructor.ejs",{title:"instructor country"});
//           }
// })

// })

module.exports = instructorR;