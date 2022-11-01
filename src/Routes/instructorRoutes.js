const { instructorSchema,instructors } = require("../Models/instructorSchema");
const express = require("express");
const instructorR = express.Router();
const mongoose = require('mongoose');
const course = require("../Models/courseSchema");


instructorR.get("/",(req, res) => {
    res.render("../views/instructor.ejs",{title:"instructor"})});
 instructorR.get('/instructorViewtitles', function(req, res) { 
    var query = course.find({Instructor:"salama"})
    query.exec(function(err,result){
        if (err) throw err;
        if(result.length==0){
            res.render("../views/instructor.ejs",{title:"view course"});
        }else{
            course.find({Instructor:"salama"})      
          //  console.log(result)
          
        //   var list = result[0].list
        //   var temp=""
        //   temp+=JSON.stringify(list[0]+"..........")
          
       // res.setHeader('bassel', 'instructorViewtitles.ejs');
        res.send(result);
          res.render("../views/instructorViewtitles.ejs",{title:"view courses"});
        }
      })

   
    })
    instructorR.get('/instructorViewcourses', function(req, res) { 
        var query = course.find();
        query.exec(function(err,result){
            if (err) throw err;
            if(result.length==0){
                res.render("../views/instructor.ejs",{title:"view course"});
            }else{
                course.find()      
              //  console.log(result)
              
            //   var list = result[0].list
            //   var temp=""
            //   temp+=JSON.stringify(list[0]+"..........")
              
           // res.setHeader('bassel', 'instructorViewtitles.ejs');
            res.send(result);
              res.render("../views/instructorViewcourses.ejs",{title:"view courses"});
            }
          })
    
       
        })
 

module.exports = instructorR;