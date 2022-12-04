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

module.exports = courseR;
