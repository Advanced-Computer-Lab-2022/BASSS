// const { guestSchema,guests } = require("../Models/guestSchema");
const express = require("express");
const guestR = express.Router();
const mongoose = require('mongoose');
const courses = require("../Models/courseSchema")
const instructors = require("../Models/instructorSchema")


guestR.get("/",(req, res) => {
    res.render("../views/guest.ejs",{title:"guest country"})});

guestR.post("/selectcountry",function(req,res){
    // console.log(req.body)
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

guestR.get("/:searchkey",async function(req,res){
    const key = req.params.searchkey;
    var array = [];
    var query = await courses.find({});
    for(let i = 0 ; i<query.length ; i++)
    {
        course = query[i];
        if (course.Title.toLowerCase().includes(key.toLowerCase()) ||
            course.Subject.toLowerCase().includes(key.toLowerCase()) ||
            course.InstructorUserName.toLowerCase().includes(key.toLowerCase()))
        {
            array=array.concat(course);
        }
    }
    res.status(200).json(array)
})


guestR.post("/searchtitle",async function(req,res){
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

guestR.post("/searchsubject",async function(req,res){
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
guestR.post("/searchinstructor",async function(req,res){
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

// guestR.post("/searchinstructor",async function(req,res){
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
    
    
    
    

module.exports = guestR;