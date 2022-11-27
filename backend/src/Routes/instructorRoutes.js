const express = require("express");
const instructorR = express.Router();
const mongoose = require('mongoose');
const instructors = require("../Models/instructorSchema");
const courses = require("../Models/courseSchema");


instructorR.get("/",(req, res) => {
    res.render("../views/instructor.ejs",{title:"instructor"})});

instructorR.post("/selectcountry",function(req,res){
    console.log(req.body)
    var country = req.body.country;
    var query = instructors.find({username:"adham"})
        query.exec(function(err,result){
            if (err) throw err;
            if(result.length==0){
                res.render("../views/instructor.ejs",{title:"instructor country"});
            }else{
                instructors.findOneAndUpdate({username:"adham"},{country:country},{upsert:true},function(err,doc){
                    if(err) throw err;
                  });         
              res.render("../views/instructor.ejs",{title:"instructor country"});
            }
})

})

instructorR.get("/searchmycourses/:instructorName/:searchkey", async function(req,res){
    const key = req.params.searchkey;
    const name = req.params.instructorName;
    var array = [];
    var query = await courses.find({InstructorUserName: name});
    for(let i = 0 ; i<query.length ; i++)
    {
        course = query[i];
        if (course.Title.toLowerCase().includes(key.toLowerCase()) ||
            course.Subject.toLowerCase().includes(key.toLowerCase()) )
        {
            array=array.concat(course);
        }
    }
    res.status(200).json(array)

})

module.exports = instructorR;