const express = require("express");
const individualTraineeR = express.Router();
const mongoose = require('mongoose');
const individualTrainees = require("../Models/individualTraineeSchema");
const courses = require("../Models/courseSchema");
// const { default: ErrorMessage } = require("../../../frontend/src/components/ErrorMessage/ErrorMessage");
const exercises = require('../Models/exerciseSchema')
const subtitles = require('../Models/subtitleSchema')

individualTraineeR.get("/",(req, res) => {
    res.render("../views/individualTrainee.ejs",{title:"individualTrainee"})
});

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
});

individualTraineeR.get("/submitAnswer/:traineeid/:subtitleid/:answer", async(req,res) => {
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
    const trainee = await individualTrainees.findOne({_id: traineeID});
    if(trainee){
        const arr = trainee.Exercises.concat(ex)
        const newT = await individualTrainees.findOneAndUpdate({_id: traineeID},{Exercises:arr}, {new:true});
        res.status(200).json(garde);
    }
    else{
        res.status(400).json({message: "couldn't submit"})
    }
    
});

module.exports = individualTraineeR;