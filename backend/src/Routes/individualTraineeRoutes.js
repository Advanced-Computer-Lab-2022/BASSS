const express = require("express");
const individualTraineeR = express.Router();
const mongoose = require('mongoose');
const individualTrainees = require("../Models/individualTraineeSchema");
const courses = require("../Models/courseSchema");
// const { default: ErrorMessage } = require("../../../frontend/src/components/ErrorMessage/ErrorMessage");
const exercises = require('../Models/exerciseSchema')
const subtitles = require('../Models/subtitleSchema')
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


 individualTraineeR.get("/updateprogress/:username/:couID" , async(req,res)=>{
  const username = req.params.username;
  const couID = req.params.couID;
  const trainee = await individualTrainees.find({UserName:username})
  const courseID = trainee[0].Courses
  var list = []
  // const newarr = courseID.concat(obj)
  for (let i = 0; i < courseID.length; i++) {
    
    if(courseID[i].Course == couID)
    {
      const prog = courseID[i].Progress+10
      const obj = {'Course':couID , Progress:prog}
      var newarr = courseID 
      newarr[i]=obj
         individualTrainees.findOneAndUpdate({UserName:username},{Courses:newarr},{upsert:true},function(err,doc){
          if(err) throw err;
        });         
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
        const course = await courses.findOne({_id:courseID[i].Course})
        const progress = courseID[i].Progress
        list = list.concat([[course,progress]])
    }
  res.json(list)
});

module.exports = individualTraineeR;