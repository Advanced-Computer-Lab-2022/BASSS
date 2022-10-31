const { corporateTraineeSchema,corporates } = require("../Models/corporateTraineeSchema");
const express = require("express");
const corporateTraineeRouter = express.Router();
const mongoose = require('mongoose');
const courses = require('../Models/courseSchema');

corporateTraineeRouter.get("/",(req, res) => {
    courses.collection.distinct("Subject", function(error, results){
        res.render("../views/corporateTrainee.ejs", {
            subjects: results,
          });
      });

});


corporateTraineeRouter.post("/selectcountry",function(req,res){
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

corporateTraineeRouter.route('/filterBySubject')
.post((req,res,next)=> {
    const sub = req.body.Subject
    courses.find({Subject: sub})
    .then((courses) => {
        res.send(courses)
    }, (err) => next(err))
    .catch((err) => next(err));
})

corporateTraineeRouter.route('/filterByRating')
.post((req,res,next)=> {
    const rating = req.body.Rating;
    courses.find({Rating: rating})
    .then((courses) => {
        res.send(courses)
    }, (err) => next(err))
    .catch((err) => next(err));

})





module.exports = corporateTraineeRouter;