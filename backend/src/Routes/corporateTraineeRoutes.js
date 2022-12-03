const express = require("express");
const corporateTraineeR = express.Router();
const mongoose = require('mongoose');
const corporateTrainees = require("../Models/corporateTraineeSchema");
const courses = require("../Models/courseSchema");


corporateTraineeR.get("/",(req, res) => {
    res.render("../views/corporateTrainee.ejs",{title:"corporateTrainee"})});


    corporateTraineeR.get("/:country",function(req,res){
        const country = req.params.country;
        console.log(country);
        var query = corporateTrainees.find({Username:"adham"})
            query.exec(function(err,result){
                if (err) throw err;
                if(result.length==0){
                    // res.render("../views/instructor.ejs",{title:"instructor country"});
                }else{
                    corporateTrainees.findOneAndUpdate({Username:"adham"},{Country:country},{upsert:true},function(err,doc){
                        if(err) throw err;
                    });         
                    // res.render("../views/instructor.ejs",{title:"instructor country"});
                }
            })        
    })
corporateTraineeR.post("/searchtitle",async function(req,res){
    var search = req.body.searchtitle
    var query = await courses.find({});
    var array = [];
    for(let i = 0 ; i<query.length ; i++)
    {
        if (query[i].Title.toLowerCase().includes(search.toLowerCase()))
        {
            array=array.concat([query[i]]);
        }
    }
    res.send(array);
})

corporateTraineeR.post("/searchsubject",async function(req,res){
    var search = req.body.searchsubject
    var query = await courses.find({});
    var array = [];
    for(let i = 0 ; i<query.length ; i++)
    {
        if (query[i].Subject.toLowerCase().includes(search.toLowerCase()))
        {
            array=array.concat([query[i]]);
        }
    }
    res.send(array);
})


corporateTraineeR.post("/searchinstructor",async function(req,res){
    var search = req.body.searchinstructor
    var query = await courses.find({});
    var array = [];
    for(let i = 0 ; i<query.length ; i++)
    {
        if (query[i].Instructor.toLowerCase().includes(search.toLowerCase()))
        {
            array=array.concat([query[i]]);
        }
    }
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

module.exports = corporateTraineeR;