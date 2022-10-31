const express = require("express");
const corporateTraineeR = express.Router();
const mongoose = require('mongoose');
const corporateTrainees = require("../Models/corporateTraineeSchema");
const courses = require("../Models/courseSchema");


// corporateTraineeR.get("/",(req, res) => {
//     res.render("../views/corporateTrainee.ejs",{title:"corporateTrainee"})});

corporateTraineeR.post("/selectcountry",function(req,res){
    console.log(req.body)
    var country = req.body.country;
    var query = corporateTrainees.find({username:"adham"})
        query.exec(function(err,result){
            if (err) throw err;
            if(result.length==0){
                res.render("../views/corporateTrainee.ejs",{title:"corporateTrainee country"});
            }else{
                corporateTrainees.findOneAndUpdate({username:"adham"},{country:country},{upsert:true},function(err,doc){
                    if(err) throw err;
                  });         
              res.render("../views/corporateTrainee.ejs",{title:"corporateTrainee country"});
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
// const { corporateTraineeSchema,corporates } = require("../Models/corporateTraineeSchema");

corporateTraineeR.get("/",(req, res) => {
    courses.collection.distinct("Subject", function(error, results){
        res.render("../views/corporateTrainee.ejs", {
            subjects: results,
          });
      });

});

    corporateTraineeR.route('/filterBySubject')
.post((req,res,next)=> {
    const sub = req.body.Subject
    courses.find({Subject: sub})
    .then((courses) => {
        res.send(courses)
    }, (err) => next(err))
    .catch((err) => next(err));
})

corporateTraineeR.route('/filterByRating')
.post((req,res,next)=> {
    const rating = req.body.Rating;
    courses.find({Rating: rating})
    .then((courses) => {
        res.send(courses)
    }, (err) => next(err))
    .catch((err) => next(err));

})

module.exports = corporateTraineeR;
