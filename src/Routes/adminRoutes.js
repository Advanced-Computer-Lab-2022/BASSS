const { adminSchema,admin } = require("../Models/adminSchema");
const instructors = require("../Models/instructorSchema");
const corporateTrainees = require("../Models/corporateTraineeSchema");
const course = require("../Models/courseSchema");


const express = require("express");
const adminR = express.Router();
const mongoose = require('mongoose');


adminR.get("/",(req, res) => {
    res.render("../views/admin.ejs",{title:"admin home page"})})


adminR.get("/addAdmin",(req, res) => {
    res.render("../views/addAdmin.ejs",{title:"Add Admin"})})

adminR.get("/addInstructor",(req, res) => {
    res.render("../views/addInstructor.ejs",{title:"Add Instructor"})})

adminR.get("/addCoTrainee",(req, res) => {
    res.render("../views/addCoTrainee.ejs",{title:"Add CoTrainee"})})



adminR.post("/addAdmins",function(req,res){
    res.render("../views/addAdmin.ejs",{title:"add admin"})}) 
         
adminR.post("/addInstructors",function(req,res){
    res.render("../views/addInstructor.ejs",{title:"Add Instructor"})}) 

adminR.post("/addCoTrainees",function(req,res){
    res.render("../views/addCoTrainee.ejs",{title:"Add CoTrainee"})}) 




adminR.post("/addAdmin",function(req,res){
      var userName = req.body.adminUserName;
      var password = req.body.adminPassword;
  
    admin.create({Name: userName, Password: password, Email: userName});
     res.render("../views/admin.ejs",{title:"admin home page"});
            
})

adminR.post("/addInstructor",function(req,res){
    var userName   = req.body.instructorUserName;
    var password   = req.body.instructorPassword;
    var allCourses = course.find();

  instructors.create({
    country:"sara's world",
      rating: 1.2345, reviews: "no reviews we ehda shewaya", email: userName, courses: [], username: userName,
      password: password , miniBio: "ab2as 5al2 ellah",gender: "prefer not to say"
     });
   res.render("../views/admin.ejs",{title:"admin home page"});
          
}) 

adminR.post("/addCoTrainee",function(req,res){
    var userName = req.body.coTraineeUserName;
    var password = req.body.coTraineePassword;

  corporateTrainees.create({
    email: userName,
    username: userName,
    password: password,
    gender: "prefer not to say",
    country:"Sara's world"
     });
   res.render("../views/admin.ejs",{title:"admin home page"});
          
}) 

module.exports = adminR;