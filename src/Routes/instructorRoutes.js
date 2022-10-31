const { instructors } = require("../Models/instructorSchema");
const {courses} = require("../Models/courseSchema");
const express = require("express");
const instructorR = express.Router();
const mongoose = require('mongoose');
const { json } = require("body-parser");

instructorR.get("/",(req, res) => {
    res.render("../views/instructor.ejs",{title:"add a course"})});

instructorR.post("/addcourse",function(req,res){
        // console.log(req.body)
        var instructor = req.body.instructor;
        var title = req.body.title;
        var subject = req.body.subject;
        var price = req.body.price;
        var outline = req.body.outline;
        var shortsummary = req.body.shortsummary;
        var totalhours = req.body.subtitle;


        courses.create({Instructor:instructor,
            Title:title,
            Subject:subject,
            Price:price,
            Uutline:outline,
            ShortSummary:shortsummary,
            TotalHours:totalhours,

        }
          );    
          res.render("../views/instructor.ejs",{title:"add a course"});

       /* var query = subtitles.find({Name:"salama"})
            query.exec(function(err,result){
                if (err) throw err;
                if(result.length==0){
                    res.render("../views/instructor.ejs",{title:"add course"});
                }else{
                    subtitles.create({TotalHours:totalhours,
                        ShortDescription:shortdescription}
                      );    
                  res.render("../views/instructor.ejs",{title:"add course"});
                }
              })*/
        }) 

        instructorR.post("/searchcourse", async function(req,res){
            var search = req.body.search;
            var query = await courses.find({});
            var array =[];
            for (let i = 0; i < query.length; i++) {
                if (query[i].Title.toLowerCase().includes(search.toLowerCase()))
                {
                    array = array.concat([query[i]]);
                }                
            }

                // res.send(array);
                // res.render("../views/guest.ejs",{list:JSON.stringify(array)});
                res.render("../views/instructor.ejs",{list:array});

            //res.status(200).json(query);
            //console.log(query);
            // res.render("../views/instructor.ejs",{title:"search for a course"});


        })

        module.exports = instructorR;