const express = require("express");
const courseR = express.Router();
const mongoose = require('mongoose');
const courses = require('../Models/courseSchema')


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


module.exports = courseR;
