const express = require("express");
const guestR = express.Router();
const mongoose = require('mongoose');
const courses = require("../Models/courseSchema")
const instructors = require("../Models/instructorSchema")

guestR.get("/",(req, res) => {
    res.render("../views/guest.ejs",{title:"guest country"})});

guestR.post("/selectcountry",function(req,res){

    console.log(req.body)
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
    if(key!= null){
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
    }
    else{
        res.status(404);
    }
})
    
module.exports = guestR;