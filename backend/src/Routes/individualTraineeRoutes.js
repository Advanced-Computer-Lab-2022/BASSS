const express = require("express");
const individualTraineeR = express.Router();
const mongoose = require('mongoose');
const individualTrainees = require("../Models/individualTraineeSchema");
const courses = require("../Models/courseSchema");
// const { default: ErrorMessage } = require("../../../frontend/src/components/ErrorMessage/ErrorMessage");
const exercises = require('../Models/exerciseSchema')
const subtitles = require('../Models/subtitleSchema')
const reports = require('../Models/ReportSchema')
var nodemailer = require('nodemailer');

individualTraineeR.get("/",(req, res) => {
    res.render("../views/individualTrainee.ejs",{title:"individualTrainee"})
});


individualTraineeR.post("/selectcountry",function(req,res){
    console.log(req.body)
    var country = req.body.country;
    var query = individualTrainees.find({username:"adham"})
        query.exec(function(err,result){
            if (err) throw err;
            if(result.length==0){
                res.render("../views/individualTrainee.ejs",{title:"individualTrainee country"});
            }else{
                individualTrainees.findOneAndUpdate({username:"adham"},{country:country},{upsert:true},function(err,doc){
                    if(err) throw err;
                  });         
              res.render("../views/individualTrainee.ejs",{title:"individualTrainee country"});
            }
})
})
individualTraineeR.get("/myInfo/pass/:pass",function(req,res){
    // console.log(req.body)
     var pass = req.params.pass;
     var query = individualTrainees.find({UserName:"adham123"})
         query.exec(function(err,result){
             if (err) throw err;
             if(result.length==0){
               //  res.render("../views/instructor.ejs",{title:"instructor country"});
             }else{
                individualTrainees.findOneAndUpdate({UserName:"adham123"},{Password:pass},{upsert:true},function(err,doc){
                     if(err) throw err;
                   });         
              // res.render("../views/instructor.ejs",{title:"instructor country"});
             }
 })
 
 })

 individualTraineeR.get("/unroll_from_course/:username/:couID",async(req,res)=>{
   var couID = req.params.couID;
   var username = req.params.username;
   var list = [];
   const trainee =  await individualTrainees.findOne({UserName:username})
   const x = await courses.findOne({_id:couID});
   const courseID = trainee.Courses
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
           await individualTrainees.findOneAndUpdate({UserName:username},{Courses:list},{upsert:true})        
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


 individualTraineeR.get("/updateprogressind/:username/:couID" , async(req,res)=>{
  const username = req.params.username;
  const couID = req.params.couID;
  const trainee = await individualTrainees.find({UserName:username})
  const courseID = trainee[0].Courses
  var list = []
  var ratio = 0;
  var count =0;
  // const sub = await subtitles.find({Course:couID})
  const course = await courses.findOne({_id:couID})
  const sub = course.Subtitles

  for (let i = 0;  i < sub.length; i++) {
    count++
  }
  for (let i =+ 0; i < courseID.length; i++) {
    // const subb = await subtitles.find({_id:sub[i]})
    
    if(courseID[i].Course == couID)
    {
      console.log('adham')
      ratio = (1/count)*100
      
      const prog = (courseID[i].Progress)+ratio;
      if(prog<=101)
      {
        const obj = {'Course':couID , Progress:prog}
        var newarr = courseID 
        console.log('SASAS')
        newarr[i]=obj
           individualTrainees.findOneAndUpdate({UserName:username},{Courses:newarr},{upsert:true},function(err,doc){
            if(err) throw err;
          });         
      }
      else{
        console.log('100%')
      }
      
      }

  }
 console.log(newarr)
res.json(newarr)
})




 individualTraineeR.get("/submitAnswer/:traineeid/:subtitleid/:answer", async(req,res) => {
    const traineeID = req.params.traineeid;
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

    const trainee = await individualTrainees.findOne({_id: traineeID});
    if(trainee){
        const arr = trainee.Exercises.concat(ex)
        const newT = await individualTrainees.findOneAndUpdate({_id: traineeID},{Exercises:arr}, {new:true});
        res.status(200).json(grade);
    }
    else{
        res.status(400).json({message: "couldn't submit"})
    }
    
});


individualTraineeR.get("/forgetpass",function(req,res){
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'acltest321@gmail.com',
          pass: 'yzdnccfnpqvmwpgr'
        }
      });
      
      var mailOptions = {
        from: 'acltest321@gmail.com',
        to: 'basselbassel28@gmail.com',
        subject: 'Sending Email using Node.js',
        text: 'To reset your password please click here , http://localhost:3000/individualtrainee/forgetpass'
      };
      
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });

})

individualTraineeR.get("/individualCourses/:username",async(req, res) => {
    const username = req.params.username;
    const trainee = await individualTrainees.find({UserName:username})
     const courseID = trainee[0].Courses
    var list = []
    for (let i = 0; i < courseID.length; i++) {
      if(courseID[i].Course != null)
      {
        const course = await courses.findOne({_id:courseID[i].Course})
        const progress = courseID[i].Progress
        list = list.concat([[course,progress]])
      }
    }
  res.json(list)
});


module.exports = individualTraineeR;