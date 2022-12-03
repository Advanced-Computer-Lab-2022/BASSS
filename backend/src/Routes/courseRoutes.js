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

courseR.get("/getCourse/:id",async(req, res) => {
  var courseId = req.params.id;
  const result =await courses.findOne({_id:courseId})
  res.json(result)
});

courseR.get("/updateRate/:id/:newRate",async(req, res) => {
  var courseId = req.params.id;
  var newRate = req.params.newRate;
  var oldResult =await courses.findOne({_id:courseId})
  var oldCount = oldResult.Rating.count;
  var oldSum = oldResult.Rating.sum;
  const result =await courses.findOneAndUpdate({_id:courseId},{Rating:{rate:(Number(oldSum)+Number(newRate))/(oldCount+1), count:(oldCount+1), 
  sum:(Number(oldSum)+Number(newRate))}})
  res.json(result)
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




module.exports = courseR;