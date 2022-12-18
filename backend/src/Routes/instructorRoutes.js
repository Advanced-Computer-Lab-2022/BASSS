const express = require("express");
const instructorR = express.Router();
const mongoose = require('mongoose');
const instructors = require("../Models/instructorSchema");
const courses = require("../Models/courseSchema");


instructorR.get("/",(req, res) => {
    res.render("../views/instructor.ejs",{title:"instructor"})});

instructorR.get("/:country",function(req,res){
    const country = req.params.country;
    console.log(country);
    var query = instructors.find({Username:"soha"})
        query.exec(function(err,result){
            if (err) throw err;
            if(result.length==0){
                // res.render("../views/instructor.ejs",{title:"instructor country"});
            }else{
                instructors.findOneAndUpdate({Username:"soha"},{Country:country},{upsert:true},function(err,doc){
                    if(err) throw err;
                });         
                // res.render("../views/instructor.ejs",{title:"instructor country"});
            }
        })        
})


instructorR.get("/viewRating/review",async(req, res) => {
   const result =await instructors.findOne({Username:"salama"})
   res.json(result)
});

instructorR.get("/getInstructor/:name",async(req, res) => {
    var name = req.params.name;
    const result =await instructors.findOne({Username:name})
    res.json(result)
});



instructorR.get("/updateRate/:name/:newRate",async(req, res) => {
    var name = req.params.name;
    var newRate = req.params.newRate;
    var oldResult =await instructors.findOne({Username:name})
    var oldCount = oldResult.Rating.count;
    var oldSum = oldResult.Rating.sum;
    const result =await instructors.findOneAndUpdate({Username:name},{Rating:{rate:(Number(oldSum)+Number(newRate))/(oldCount+1), count:(oldCount+1), 
    sum:(Number(oldSum)+Number(newRate))}})
    res.json(result)
});


instructorR.post("/searchtitle",async function(req,res){
    var search = req.params.searchtitle
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

instructorR.post("/searchsubject",async function(req,res){
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


instructorR.post("/searchinstructor",async function(req,res){
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

// instructorR.post("/searchinstructor",async function(req,res){
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
//             if(array[i]==cour[j].Instructor)
//             {
//                 array2 = array2.concat([cour[j]]);
//             }
//         }
//     }
//     res.send(array2);
// })
    
// instructorR.post("/addcourse",function(req,res){
//     var instructor = req.body.InstructorUserName;
//     var title = req.body.title;
//     var subject = req.body.subject;
//     var price = req.body.price;
//     var outline = req.body.outline;
//     var shortsummary = req.body.shortsummary;
//     var totalhours = req.body.subtitle;


//     courses.create({Instructor:instructor,
//         Title:title,
//         Subject:subject,
//         Price:price,
//         Outline:outline,
//         ShortSummary:shortsummary,
//         TotalHours:totalhours,

//     }
//       );    
//       res.render("../views/instructor.ejs",{title:"add a course"});
// })
module.exports = instructorR;