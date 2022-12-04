const express = require("express");
const corporateTraineeR = express.Router();
const mongoose = require('mongoose');
const corporateTrainees = require("../Models/corporateTraineeSchema");
const courses = require("../Models/courseSchema");


corporateTraineeR.get("/",(req, res) => {
    res.render("../views/corporateTrainee.ejs",{title:"corporateTrainee"})});

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
corporateTraineeR.get("/myInfo/pass/:pass",function(req,res){
    // console.log(req.body)
     var pass = req.params.pass;
     var query = corporateTraineeR.find({Username:"sara"})
         query.exec(function(err,result){
             if (err) throw err;
             if(result.length==0){
               //  res.render("../views/instructor.ejs",{title:"instructor country"});
             }else{
                corporateTrainees.findOneAndUpdate({Username:"sara"},{Password:pass},{upsert:true},function(err,doc){
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
// corporateTraineeR.post("/searchinstructor",async function(req,res){
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


module.exports = corporateTraineeR;