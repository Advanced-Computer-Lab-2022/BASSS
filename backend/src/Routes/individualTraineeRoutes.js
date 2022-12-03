const express = require("express");
const individualTraineeR = express.Router();
const mongoose = require('mongoose');
const individualTrainees = require("../Models/individualTraineeSchema");
const courses = require("../Models/courseSchema");


individualTraineeR.get("/",(req, res) => {
    res.render("../views/individualTrainee.ejs",{title:"individualTrainee"})});


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
individualTraineeR.post("/searchtitle",async function(req,res){
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

individualTraineeR.post("/searchsubject",async function(req,res){
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


individualTraineeR.post("/searchinstructor",async function(req,res){
    var search = req.body.searchinstructor
    var query = await courses.find({});
    var array = [];
    for(let i = 0 ; i<query.length ; i++)
    {
        if (query[i].Instructorname.toLowerCase().includes(search.toLowerCase()))
        {
            array=array.concat([query[i]]);
        }
    }
    res.send(array);
})
    

individualTraineeR.get("/individualCourses/:username",async(req, res) => {
    const username = req.params.username;
    // const courseID = req.params.courseID;
    // const result = await individualTrainees.find({ courses:{ $elemMatch:{0: courseID} } })
    const trainee = await individualTrainees.find({UserName:username})
    const courseID = trainee[0].courses
    var list = []
    for (let i = 0; i < courseID.length; i++) {
        const course = await courses.findOne({_id:courseID[i][0]})
        list = list.concat([course])
    }
  res.json(list)
});

module.exports = individualTraineeR;