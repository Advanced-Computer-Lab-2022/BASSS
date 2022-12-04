const express = require("express");
const courseR = express.Router();
const mongoose = require('mongoose');
const course = require("../Models/courseSchema");
const courses = require('../Models/courseSchema');
const exercises = require('../Models/exerciseSchema');
const subtitles = require('../Models/subtitleSchema');
courseR.get("/",async(req, res) => {
    const result =await courses.find({})
    res.send(result)
});


courseR.get("/:name",async(req, res) => {
  const instName = req.params.name;
  const result =await courses.find({InstructorUserName:instName})
  res.status(200).json(result);
});

courseR.get("/courseDetails/:courseId", async(req,res) => {
    var id = req.params.courseId;
    var result = await courses.find({_id:id});
    res.status(200).json(result);
})


courseR.get("/exercise/:courseID/:subtitleID", async(req,res) => {
    const courseId = req.params.courseID;
    const subtitleId = req.params.subtitleID;

    const course = await courses.findOne({_id:courseId});
    const subtitle = await subtitles.findById(course.Subtitles.find(element => element==subtitleId))
    const exercise = await exercises.findById(subtitle.Exercise);

    res.status(200).json(exercise);
});

courseR.get("/correctAnswer/:courseID/:subtitleID", async(req,res) => {
    const courseId = req.params.courseID;
    const subtitleId = req.params.subtitleID;

    const course = await courses.findOne({_id:courseId});
    const subtitle = await subtitles.findById(course.Subtitles.find(element => element==subtitleId));
    const exercise = await exercises.findById(subtitle.Exercise);

    res.status(200).json(exercise.CorrectAnswer);
});

courseR.get("/:subject/:rate/:price",async(req, res) => {
    var subject = req.params.subject;
    var rate = req.params.rate;
    var price = req.params.price;
    var result = []
    if(subject == "empty" && rate == "empty" && price=="empty"){
     
      result = await courses.find({})
   }
   else
      if(subject == "empty" && price=="empty"){
        result =await courses.find({Rating:rate })
        
      }
     else if(rate == "empty" && price=="empty"){
        result =await courses.find({Subject:subject})
        
      }else if(rate == "empty" && subject=="empty"){
           result =await courses.find({Price:price})
      }else if (subject == "empty"){
        result =await courses.find({Rating :rate ,Price:price})
      }else if (rate == "empty"){
        result =await courses.find({Subject :subject ,Price:price})
      }else if (price == "empty"){
        result =await courses.find({Rating :rate ,Subject :subject})
      }
      else{
        result =await courses.find({Subject:subject, Rating:rate , Price:price})
      
      }
  
    res.status(200).json(result);
  });

  courseR.get("/:my/:name/:subject/:price",async(req, res) => {
    // res.render("../views/course.ejs",{title:"courses"})
    var name = req.params.name;
    var subject = req.params.subject;
    var price = req.params.price;
    var result = []
    if(subject == "empty" && price=="empty"){
     
      result = await courses.find({InstructorUserName:name})
      }else if (subject == "empty"){
        result =await courses.find({InstructorUserName:name, Price:price})
      }else if (price == "empty"){
        result =await courses.find({InstructorUserName:name, Subject :subject})
      }
      else{
        result =await courses.find({InstructorUserName:name, Subject:subject, Price:price})
      
      }
  
    res.status(200).json(result);
  });

module.exports = courseR;
