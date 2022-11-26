const express = require("express");
const courseR = express.Router();
const mongoose = require('mongoose');
const courses = require('../Models/courseSchema')


courseR.get("/",async(req, res) => {
    // res.render("../views/course.ejs",{title:"courses"})
    const result =await courses.find({})
    res.send(result)
});



courseR.get("/:name",async(req, res) => {
  // res.render("../views/course.ejs",{title:"courses"})
  const instName = req.params.name;
  const result =await courses.find({InstructorUserName:instName})
  res.status(200).json(result);
});



// const getCourses = async (req, res) => {
//     const course = await courses.find({})
  
//     // for (let index = 0; index < users.length; index++) {
//     //     const element = users[index];
//     //     console.log(element.id);
//     //}
//     res.status(200).json(course)
//   }


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
