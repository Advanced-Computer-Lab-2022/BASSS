const { instructorSchema,instructors } = require("../Models/instructorSchema");
const express = require("express");
const instRouter = express.Router();
const mongoose = require('mongoose');
const courses = require('../Models/courseSchema');

instRouter.get("/",(req, res) => {
    courses.collection.distinct("Subject", function(error, results){
        res.render("../views/instructor.ejs", {
            subjects: results,
          });;
      });

});

instRouter.route('/filterBySubject')
.post((req,res,next)=> {
    const sub = req.body.Subject
    courses.find({Subject: sub})
    .then((courses) => {
        res.send(courses)
    }, (err) => next(err))
    .catch((err) => next(err));
})

instRouter.route('/filterByRating')
.post((req,res,next)=> {
    const rating = req.body.Rating;
    courses.find({Rating: rating})
    .then((courses) => {
        res.send(courses)
    }, (err) => next(err))
    .catch((err) => next(err));

})

instRouter.route('/filterByPrice')
.post((req,res,next)=> {
    if(req.body.Price == 0){
        courses.find({Price: 0 })
        .then((courses) => {
            res.send(courses)
        }, (err) => next(err))
        .catch((err) => next(err));
        }
    else{
        const parsedData = req.body.Price.toString()
        const priceA = parsedData.split('-')[0];
        const priceB = parsedData.split('-')[1];
        if(priceB == ''){
            courses.find({Price: {$gte:priceA}})
            .then((courses) => {
                res.send(courses)
            }, (err) => next(err))
            .catch((err) => next(err));
        }
        else {
            courses.find({Price: {$gte:priceA,$lt:priceB}})
            .then((courses) => {
                res.send(courses)
            }, (err) => next(err))
            .catch((err) => next(err));

        }
    }



})

module.exports = instRouter;

