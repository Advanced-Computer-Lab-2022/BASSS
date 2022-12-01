const express = require("express");
const courseR = express.Router();
const mongoose = require('mongoose');
const courses = require('../Models/courseSchema')


courseR.get("/",async(req, res) => {
    const result =await courses.find({})
    res.send(result)
});

courseR.get("/FindTitleAndUpdate/:title/:percentage/:enddate", async(req,res)=>{
    const title = req.params.title
    const percentage = req.params.percentage
    const enddate = req.params.enddate
    var query = courses.find({Title:title})
    query.exec(function(err,result){
        if (err) throw err;
        if(result.length==0){
            // res.render("../views/instructor.ejs",{title:"instructor country"});
        }else{
            courses.findOneAndUpdate({Title:title},{PromotionPercentage:percentage,PromotionEndDate:enddate},{upsert:true},function(err,doc){
                if(err) throw err;
            });         
            // res.render("../views/instructor.ejs",{title:"instructor country"});
        }
    })    
});

courseR.get("/:subject/:rate/:price",async(req, res) => {
    // res.render("../views/course.ejs",{title:"courses"})
    var subject = req.params.subject;
    var rate = req.params.rate;
    var price = req.params.price;
    var result = []
    if(subject == "empty" && rate == "empty" && price=="empty"){
     
      result = await courses.find({})
   }
   else
      if(subject == "empty" && price=="empty"){
        result =await courses.find({Rating:rate })
        
      }
     else if(rate == "empty" && price=="empty"){
        result =await courses.find({Subject:subject})
        
      }else if(rate == "empty" && subject=="empty"){
           result =await courses.find({Price:price})
      }else if (subject == "empty"){
        result =await courses.find({Rating :rate ,Price:price})
      }else if (rate == "empty"){
        result =await courses.find({Subject :subject ,Price:price})
      }else if (price == "empty"){
        result =await courses.find({Rating :rate ,Subject :subject})
      }
      else{
        result =await courses.find({Subject:subject, Rating:rate , Price:price})
      
      }
  
    res.status(200).json(result);
  });
  courseR.get("/:my/:name/:subject/:price",async(req, res) => {
    // res.render("../views/course.ejs",{title:"courses"})
    var name = req.params.name;
    var subject = req.params.subject;
    var price = req.params.price;
    var result = []
    if(subject == "empty" && price=="empty"){
     
      result = await courses.find({InstructorUserName:name})
      }else if (subject == "empty"){
        result =await courses.find({InstructorUserName:name, Price:price})
      }else if (price == "empty"){
        result =await courses.find({InstructorUserName:name, Subject :subject})
      }
      else{
        result =await courses.find({InstructorUserName:name, Subject:subject, Price:price})
      
      }
  
    res.status(200).json(result);
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