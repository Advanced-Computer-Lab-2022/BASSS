const express = require("express");
const instructorR = express.Router();
const mongoose = require('mongoose');
const instructors = require("../Models/instructorSchema");
const courses = require("../Models/courseSchema");
var nodemailer = require('nodemailer');

instructorR.get("/getWallet", async function (req,res){
  console.log(res.locals.user)
})

instructorR.get("/searchmycourses/:searchkey", async function(req,res){
    //token name
    const name = res.locals.user;

    const key = req.params.searchkey;
    var array = [];
    var query = await courses.find({InstructorUserName:"salama"});
    for(let i = 0 ; i<query.length ; i++)
    {
        course = query[i];
        if (course.Title.toLowerCase().includes(key.toLowerCase()) ||
            course.Subject.toLowerCase().includes(key.toLowerCase()))
        {
            array=array.concat(course);
        }
    }
    res.status(200).json(array)
 
 })

 instructorR.get('/instructorViewtitles', function(req, res) {
    //token name 
    const name = res.locals.user;

    var query = courses.find({InstructorUserName:"salama"})
    query.exec(function(err,result){
        if (err) throw err;
        if(result.length==0){

        }else{
            courses.find({InstructorUserName:name})            
            res.send(result);
        }
      })
})

  instructorR.get("/myInfo/first/:minibio",function(req,res){
    //token name
    const name = res.locals.user;

    var minibio = req.params.minibio;
    var query = instructors.find({Username:name})
        query.exec(function(err,result){
            if (err) throw err;
            if(result.length==0){

            }else{
                instructors.findOneAndUpdate({Username:name},{MiniBio:minibio},{upsert:true},function(err,doc){
                    if(err) throw err;
                  });         
            }
})

})
    

instructorR.get("/myInfo/second/:mail",function(req,res){
  //token name
  const name = res.locals.user;
  //usermail??
  var mail = req.params.mail;
    var query = instructors.find({Username:name})
        query.exec(function(err,result){
            if (err) throw err;
            if(result.length==0){
              //  res.render("../views/instructor.ejs",{title:"instructor country"});
            }else{
                instructors.findOneAndUpdate({Username:name},{Email:mail},{upsert:true},function(err,doc){
                    if(err) throw err;
                  });         
              // res.render("../views/instructor.ejs",{title:"instructor country"});
            }
})

})
instructorR.get("/myInfo/third/:pass",function(req,res){
  //token name
  const name = res.locals.user;

  var pass = req.params.pass;
    var query = instructors.find({Username:name})
        query.exec(function(err,result){
            if (err) throw err;
            if(result.length==0){
              //  res.render("../views/instructor.ejs",{title:"instructor country"});
            }else{
                instructors.findOneAndUpdate({Username:name},{Password:pass},{upsert:true},function(err,doc){
                    if(err) throw err;
                  });         
              // res.render("../views/instructor.ejs",{title:"instructor country"});
            }
})

})
  
instructorR.get("/myInfo/pass/:pass",function(req,res){
  //token name
  const name = res.locals.user;

  var pass = req.params.pass;
      var query = instructors.find({Username:name})
          query.exec(function(err,result){
              if (err) throw err;
              if(result.length==0){
                //  res.render("../views/instructor.ejs",{title:"instructor country"});
              }else{
                instructors.findOneAndUpdate({Username:name},{Password:pass},{upsert:true},function(err,doc){
                      if(err) throw err;
                    });         
              // res.render("../views/instructor.ejs",{title:"instructor country"});
              }
  })
})

instructorR.get("/viewRating/review",async(req, res) => {
  //token name
  const name = res.locals.user;

  const result =await instructors.find({Username:"salama"})
  res.json(result)
});

instructorR.get("/getInstructor",async(req, res) => {
  //token name
  // const name = res.locals.user;

  const result =await instructors.findOne({Username:"salama"})
   res.json(result)
});


instructorR.get("/updateRate/:name/:newRate",async(req, res) => {
    //token name
    const name = res.locals.user;

    var newRate = req.params.newRate;
    var oldResult =await instructors.findOne({Username:name})
    var oldCount = oldResult.Rating.count;
    var oldSum = oldResult.Rating.sum;
    const result =await instructors.findOneAndUpdate({Username:name},{Rating:{rate:(Number(oldSum)+Number(newRate))/(oldCount+1), count:(oldCount+1), 
    sum:(Number(oldSum)+Number(newRate))}})
    res.json(result)
});

instructorR.get("/forgetpass", (req,res) => {
    var transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'acltest321@gmail.com',
        pass: 'yzdnccfnpqvmwpgr'
      }
    });
    
    var mailOptions = {
      from: 'acltest321@gmail.com',
      to: 'basselbassel28@gmail.com',
      subject: 'Sending Email using Node.js',
      text: 'To reset your password please click here , http://localhost:3000/instructor/forgetpass'
    };
    
    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });
})

module.exports = instructorR;