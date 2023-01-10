const express = require("express");
const corporateTraineeR = express.Router();
const mongoose = require('mongoose');
const corporateTrainees = require("../Models/corporateTraineeSchema");
const courses = require("../Models/courseSchema");
const subtitles = require("../Models/subtitleSchema");
const exercises = require("../Models/exerciseSchema");
const users = require('../Models/userSchema');
const bcrypt = require('bcrypt')

var nodemailer = require('nodemailer');

corporateTraineeR.get("/",(req, res) => {
    res.render("../views/corporateTrainee.ejs",{title:"corporateTrainee"})
});

corporateTraineeR.get("/myInfo/pass/:pass",async function(req,res){
  // console.log(req.body)
    var pass = req.params.pass;

const result =await corporateTrainees.findOneAndUpdate({Username:res.locals.user},{Password:pass})
//res.json(result)
res.json({message:"updated successfully"})

})


corporateTraineeR.get("/myInfo/pass/:oldpass/:pass",async function(req,res){
  // console.log(req.body)
    var pass = req.params.pass;
    var oldpass = req.params.oldpass;
  
var oldpass2 =await corporateTrainees.findOne({Username:res.locals.user})

if(oldpass==oldpass2.Password){
const result =await corporateTrainees.findOneAndUpdate({Username:res.locals.user},{Password:pass})
//res.json(result)
res.json({message:"updated successfully"})
 } else
 res.json({message:"incorrect password"})

})

 corporateTraineeR.get("/submit/:traineeid/:subtitleid/:answer", async(req,res) => {
    const traineeID = req.params.traineeid;
    const name =res.locals.user;
    const subid = req.params.subtitleid;
    const answers = req.params.answer;
    var grade = 0;
    const sub = await subtitles.findOne({_id: subid});
    const e = await exercises.findOne({_id: sub.Exercise});

    if(e.CorrectAnswer == answers){
        grade = e.MaxGrade;
    }
    const ex = {
        Subtitle: subid,
        MyAnswer: answers,
        MyGrade: grade
    }
    const trainee = await corporateTrainees.findOne({Username: name});
    if(trainee){
        const arr = trainee.Exercises.concat(ex)
        const newT = await corporateTrainees.findOneAndUpdate({Username: name},{Exercises:arr}, {new:true});
        res.status(200).json(grade);
    }
    else{
        res.status(400).json({message: "couldn't submit"})
    }
    
});

corporateTraineeR.get("/forgetpass/:username/:email",function(req,res){
  const username = req.params.username;
  const email = req.params.email;  
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
        text: 'To reset your password please click here , http://localhost:3000/corporateTrainee/forgetpass'
      };
      
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });

      res.send(array);
    })

corporateTraineeR.get("/CorporateCourses/:username",async(req, res) => {
    const username = res.locals.user;
    try{
    const trainee = await corporateTrainees.findOne({Username:username})
    //console.log(trainee)
    const courseID = trainee.courses

    var list = []
    for (let i = 0; i < courseID.length; i++) {
        const course = await courses.findOne({_id:courseID[i].Course})
        // console.log(course)
        const progress = courseID[i].Progress
        list = list.concat([[course,progress]])
    }
      //console.log(list)
      return res.send(list)
    }
    catch(error){
      return res.json({error})
    }
});


corporateTraineeR.get("/unroll_from_course/:username/:couID",async(req,res)=>{
  var couID = req.params.couID;
  var username = res.locals.user;
  var list = [];
  const trainee =  await corporateTrainees.findOne({Username:username})
  const x = await courses.findOne({_id:couID});
  const courseID = trainee.courses
  for (let i = 0; i < courseID.length; i++) {
   if(courseID[i].Course==couID)
   {
     if (courseID[i].Progress < 50)
     {
       for (let j = 0; j < courseID.length; j++) {

         if(courseID[j].Course!=couID  )
          {
           list = list.concat(courseID[j])
          }    
        }
          await corporateTrainees.findOneAndUpdate({Username:username},{courses:list},{upsert:true})        
       }
       else{
         console.log('course progress is not less than 50');
       }
     }
     else{
       console.log('no such course');
     }
   }
   res.json(list);
})

corporateTraineeR.get("/updateprogresscorp/:username/:couID" , async(req,res)=>{
  const username = res.locals.user;
  const couID = req.params.couID;
  const trainee = await corporateTrainees.find({Username:username})
  const courseID = trainee[0].courses
  // console.log(trainee)
  // console.log(courseID)
  var list = []
  var ratio = 0;
  var count =0;
  // const sub = await subtitles.find({Course:couID})
  const course = await courses.findOne({_id:couID})
  const sub = course.Subtitles

  for (let j = 0; j < sub.length; j++) {
    count++
  }
  // console.log(count)
  for (let i = 0; i < courseID.length; i++) {
    
    if(courseID[i].Course == couID)
    {
      ratio = (1/count)*100
      
      const prog = (courseID[i].Progress)+ratio;
      if(prog<=100)
      {
        const obj = {'Course':couID , Progress:prog}
        var newarr = courseID 
        newarr[i]=obj
        corporateTrainees.findOneAndUpdate({Username:username},{courses:newarr},{upsert:true},function(err,doc){
            if(err) throw err;
          });         
      }
      else{
        console.log('100%')
      }
      
      }

  }
//  console.log(newarr)
res.json(newarr)
})

corporateTraineeR.get("/firstLogin", async (req,res) => {
  //token name
  //const name = req.locals.user
  const name = res.locals.user;

  const trainee = await corporateTrainees.findOne({Username: name})
  if(!trainee){
    return res.status(400).json("User not found")
  }
  else{
    return res.status(200).json(trainee.FirstLogin)
  }
})

corporateTraineeR.get("/changeFirstLogin", async (req,res) => {
  //token name
  //const name = req.locals.user
  const name = res.locals.user

  const trainee = await corporateTrainees.findOneAndUpdate({Username: name},{FirstLogin: false})
  if(!trainee){
    return res.status(400).json("User not found")
  }
  else{
    return res.status(200).json(trainee.FirstLogin)
  }
})

corporateTraineeR.get("/getCorporate",async(req, res) => {
  //token name
  const name = res.locals.user;

  const result =await corporateTrainees.findOne({Username:name})
   res.json(result)
});

corporateTraineeR.post('/changePass', async (req,res) =>{
  //token name
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
        const updateUsers= await users.findOneAndUpdate({UserName: res.locals.user},{Password: hashedPassword})
      
        const updateTrainees = await corporateTrainees.findOneAndUpdate({Username: res.locals.user},{Password: hashedPassword})      
        return res.status(200).json('Password Changed')
        
  } catch (error) {
      res.json({error: error.message})
  }
})



corporateTraineeR.get("/:country",function(req,res){
  const country = req.params.country;
  console.log(country);
  var query = corporateTrainees.find({Username:"sara"})
      query.exec(function(err,result){
          if (err) throw err;
          if(result.length==0){
              // res.render("../views/instructor.ejs",{title:"instructor country"});
          }else{
              corporateTrainees.findOneAndUpdate({Username:"sara"},{Country:country},{upsert:true},function(err,doc){
                  if(err) throw err;
              });         
              // res.render("../views/instructor.ejs",{title:"instructor country"});
          }
})
})

corporateTraineeR.get("/myCourses", async (req,res) => {
  const name = res.locals.user;

  const trainee = await corporateTrainees.findOne({Username:name})
  const courses1 = trainee.AccessibleCourses
  var mycourses = []

  courses1.map((course) => 
    mycourses=mycourses.concat(course)
  )

  if(courses1){
    console.log(mycourses)
    return res.json(mycourses)
  }
  else{
    return res.status(400).json("no courses found")
  }
})


module.exports = corporateTraineeR;