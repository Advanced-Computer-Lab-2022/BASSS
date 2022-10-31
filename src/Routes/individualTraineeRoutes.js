const { indvidualSchema,indvidualTrainees } = require("../Models/individualTraineeSchema");
const express = require("express");
const indvidualRouter = express.Router();
const mongoose = require('mongoose');
const courses = require('../Models/courseSchema');


indvidualRouter.get("/",(req, res) => {
    courses.collection.distinct("Subject", function(error, results){
        res.render("../views/indvidualTrainee.ejs", {
            subjects: results,
          });;
      });

});

indvidualRouter.post("/selectcountry",function(req,res){
    var country = req.body.country;
    var query = guests.find({Name:"sara"})
        query.exec(function(err,result){
            if (err) throw err;
            if(result.length==0){
                res.render("../views/guest.ejs",{title:"guest country"});
            }else{
                guests.findOneAndUpdate({Name:"sara"},{Country:country},{upsert:true},function(err,doc){
                    if(err) throw err;
                  });         
              res.render("../views/guest.ejs",{title:"guest country"});
            }
          })
    }) 

indvidualRouter.route('/filterBySubject')
.post((req,res,next)=> {
    const sub = req.body.Subject
    courses.find({Subject: sub})
    .then((courses) => {
        res.send(courses)
    }, (err) => next(err))
    .catch((err) => next(err));
})

indvidualRouter.route('/filterByRating')
.post((req,res,next)=> {
    const rating = req.body.Rating;
    courses.find({Rating: rating})
    .then((courses) => {
        res.send(courses)
    }, (err) => next(err))
    .catch((err) => next(err));

})

indvidualRouter.route('/filterByPrice')
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

module.exports = indvidualRouter;