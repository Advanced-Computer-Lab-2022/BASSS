const express = require("express");
const courseR = express.Router();
const mongoose = require('mongoose');
const courses = require('../Models/courseSchema')


courseR.get("/",async(req, res) => {
    // res.render("../views/course.ejs",{title:"courses"})
    const result =await courses.find({})
    res.send(result)
});

// courseR.post("/selectcountry",function(req,res){
//     console.log(req.body)
//     var country = req.body.country;
//     var query = corporateTrainees.find({username:"adham"})
//         query.exec(function(err,result){
//             if (err) throw err;
//             if(result.length==0){
//                 res.render("../views/corporateTrainee.ejs",{title:"corporateTrainee country"});
//             }else{
//                 corporateTrainees.findOneAndUpdate({username:"adham"},{country:country},{upsert:true},function(err,doc){
//                     if(err) throw err;
//                   });         
//               res.render("../views/corporateTrainee.ejs",{title:"corporateTrainee country"});
//             }
// })
// })
module.exports = courseR;