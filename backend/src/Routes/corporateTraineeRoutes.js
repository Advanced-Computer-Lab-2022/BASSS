const express = require("express");
const corporateTraineeR = express.Router();
const mongoose = require('mongoose');
const corporateTrainees = require("../Models/corporateTraineeSchema");
const courses = require("../Models/courseSchema");
const subtitles = require("../Models/subtitleSchema");
const exercises = require("../Models/exerciseSchema");

corporateTraineeR.get("/",(req, res) => {
    res.render("../views/corporateTrainee.ejs",{title:"corporateTrainee"})
});


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
});

corporateTraineeR.get("/submit/:traineeid/:subtitleid/:answer", async(req,res) => {
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
    const trainee = await corporateTrainees.findOne({_id: traineeID});
    if(trainee){
        const arr = trainee.Exercises.concat(ex)
        const newT = await corporateTrainees.findOneAndUpdate({_id: traineeID},{Exercises:arr}, {new:true});
        res.status(200).json(grade);
    }
    else{
        res.status(400).json({message: "couldn't submit"})
    }
    
});

module.exports = corporateTraineeR;