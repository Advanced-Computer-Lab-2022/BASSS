const express = require("express");
const instructorR = express.Router();
const mongoose = require('mongoose');
const instructors = require("../Models/instructorSchema");
const courses = require("../Models/courseSchema");
const users = require('../Models/userSchema');
var nodemailer = require('nodemailer');

instructorR.get("/getWallet", async function (req,res){
  console.log(res.locals.user)
})

instructorR.get("/searchmycourses/:searchkey", async function(req,res){
    //token name
    const name = res.locals.user;

    const key = req.params.searchkey;
    var array = [];
    var query = await courses.find({InstructorUserName:"salama"});
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
    const name = res.locals.user;

    var query = courses.find({InstructorUserName:"salama"})
    query.exec(function(err,result){
        if (err) throw err;
        if(result.length==0){

        }else{
            courses.find({InstructorUserName:name})            
            res.send(result);
        }
      })
})

instructorR.get("/myInfo/first/:minibio",function(req,res){
    //token name
    // const name = res.locals.user;

    var minibio = req.params.minibio;
    var query = instructors.find({UserName:'salama'})
        query.exec(function(err,result){
            if (err) throw err;
            if(result.length==0){

            }else{
                instructors.findOneAndUpdate({UserName:'salama'},{MiniBio:minibio},{upsert:true},function(err,doc){
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
    var query = instructors.find({UserName:"salama"})
        query.exec(function(err,result){
            if (err) throw err;
            if(result.length==0){
              //  res.render("../views/instructor.ejs",{title:"instructor country"});
            }else{
                instructors.findOneAndUpdate({UserName:"salama"},{Email:mail},{upsert:true},function(err,doc){
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
    var oldpass = req.params.oldpass;
  
var oldpass2 =await instructors.findOne({UserName:"salama"})

if(oldpass==oldpass2.Password){
const result =await instructors.findOneAndUpdate({UserName:"salama"},{Password:pass})
//res.json(result)
res.json({message:"updated successfully"})
 } else
 res.json({message:"incorrect password"})

})
  
instructorR.get("/myInfo/pass/:pass",async function(req,res){
    // console.log(req.body)
    var pass = req.params.pass;

    const result =await instructors.findOneAndUpdate({UserName:"salama"},{Password:pass})
    //res.json(result)
    res.json({message:"updated successfully"})
    
})

instructorR.get("/viewRating/review",async(req, res) => {
  //token name
  const name = res.locals.user;

  const result =await instructors.findOne({Username:"salama"})
  res.json(result)
});

instructorR.get("/getInstructor",async(req, res) => {
  //token name
  // const name = res.locals.user;

  const result =await instructors.findOne({Username:"salama"})
   res.json(result)
});


instructorR.get("/updateRate/:name/:newRate",async(req, res) => {
    //token name
    const name = res.locals.user;

    var newRate = req.params.newRate;
    var oldResult =await instructors.findOne({Username:name})
    var oldCount = oldResult.Rating.count;
    var oldSum = oldResult.Rating.sum;
    const result =await instructors.findOneAndUpdate({Username:name},{Rating:{rate:(Number(oldSum)+Number(newRate))/(oldCount+1), count:(oldCount+1), 
    sum:(Number(oldSum)+Number(newRate))}})
    res.json(result)
});

instructorR.get("/forgetpass/:username/:email", async (req,res) => {
  const username = req.params.username;
  const email = req.params.email;
  
  
  const user = await users.findOne({UserName: username})
  const type = user.Type
  
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
    text: 'To reset your password please click here , http://localhost:3000/' +type+ '/forgetpass'
  };
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
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