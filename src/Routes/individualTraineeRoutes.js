const express = require("express");
// const individualTraineeR = express.Router();
const mongoose = require('mongoose');
const individualTrainees = require("../Models/individualTraineeSchema");
const courses = require("../Models/courseSchema");
const indvidualRouter = express.Router();


// indvidualRouter.get("/",(req, res) => {
//     res.render("../views/individualTrainee.ejs",{title:"individualTrainee"})});

    indvidualRouter.post("/selectcountry",function(req,res){
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
indvidualRouter.post("/searchtitle",async function(req,res){
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

indvidualRouter.post("/searchsubject",async function(req,res){
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


indvidualRouter.post("/searchinstructor",async function(req,res){
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
    

// individualTraineeR.post("/searchinstructor",async function(req,res){
//     var search = req.body.searchinstructor
//     var ins = await instructors.find({});
//     var array = [];
//     for(let i = 0 ; i<ins.length ; i++)
//     {
//         if (ins[i].username.toLowerCase().includes(search.toLowerCase()))
//         {
//             array=array.concat([ins[i]]);
//         }
//     }
//     var cour = await courses.find({});
//     var array2 = [];
//     for(let i =0 ; i<array.length ; i++)
//     {
//         for(let j =0; j<cour.length ; j++)
//         {
//             if(array[i]._id==cour[j].Instructor)
//             {
//                 array2 = array2.concat([cour[j]]);
//             }
//         }
//     }
//     res.send(array2);
// })

// module.exports = individualTraineeR;
// const { indvidualSchema,indvidualTrainees } = require("../Models/individualTraineeSchema");

indvidualRouter.get("/",(req, res) => {
    courses.collection.distinct("Subject", function(error, results){
        res.render("../views/indvidualTrainee.ejs", {
            subjects: results,
          });;
      });

});


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
