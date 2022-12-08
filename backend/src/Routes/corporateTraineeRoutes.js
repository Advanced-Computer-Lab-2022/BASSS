const express = require("express");
const corporateTraineeR = express.Router();
const mongoose = require('mongoose');
const corporateTrainees = require("../Models/corporateTraineeSchema");
const courses = require("../Models/courseSchema");
const subtitles = require("../Models/subtitleSchema");
const exercises = require("../Models/exerciseSchema");
var nodemailer = require('nodemailer');

corporateTraineeR.get("/",(req, res) => {
    res.render("../views/corporateTrainee.ejs",{title:"corporateTrainee"})
});




corporateTraineeR.get("/myInfo/pass/:pass",function(req,res){
    // console.log(req.body)
     var pass = req.params.pass;
     var query = corporateTrainees.find({Username:"sara"})
         query.exec(function(err,result){
             if (err) throw err;
             if(result.length==0){
               //  res.render("../views/instructor.ejs",{title:"instructor country"});
             }else{
                corporateTrainees.findOneAndUpdate({Username:"sara"},{Password:pass},{upsert:true},function(err,doc){
                     if(err) throw err;
                   });         
              // res.render("../views/instructor.ejs",{title:"instructor country"});
             }
 })
 
 })
 corporateTraineeR.get("/submit/:traineeid/:subtitleid/:answer", async(req,res) => {
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
    const trainee = await corporateTrainees.findOne({_id: traineeID});
    if(trainee){
        const arr = trainee.Exercises.concat(ex)
        const newT = await corporateTrainees.findOneAndUpdate({_id: traineeID},{Exercises:arr}, {new:true});
        res.status(200).json(grade);
    }
    else{
        res.status(400).json({message: "couldn't submit"})
    }
    
});

corporateTraineeR.get("/forgetpass",function(req,res){
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
    const username = req.params.username;
    const trainee = await corporateTrainees.find({UserName:username})
    const courseID = trainee[0].courses
    var list = []
    for (let i = 0; i < courseID.length; i++) {
        const course = await courses.findOne({_id:courseID[i][0]})
        list = list.concat([course])
    }
  res.json(list)
});
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

module.exports = corporateTraineeR;