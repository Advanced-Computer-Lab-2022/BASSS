const express = require("express");
const instructorR = express.Router();
const mongoose = require('mongoose');
const instructors = require("../Models/instructorSchema");
const courses = require("../Models/courseSchema");
var nodemailer = require('nodemailer');

// instructorR.get("/",(req, res) => {
//     res.render("../views/instructor.ejs",{title:"instructor"})});

//  instructorR.get("/:country",function(req,res){
//      const country = req.params.country;
//      console.log(country);
//      var query = instructors.find({Username:"adham"})
//         query.exec(function(err,result){
//             if (err) throw err;
//             if(result.length==0){
//                  res.render("../views/instructor.ejs",{title:"instructor country"});
//                  // res.render("../views/instructor.ejs",{title:"instructor country"});
//             }else{
//                  instructors.findOneAndUpdate({username:"adham"},{country:country},{upsert:true},function(err,doc){
//                  instructors.findOneAndUpdate({Username:"adham"},{Country:country},{upsert:true},function(err,doc){
//                     if(err) throw err;
//                    });         
//                res.render("../views/instructor.ejs",{title:"instructor country"});
//                  });         
//                  // res.render("../views/instructor.ejs",{title:"instructor country"});
//             }
//          })        
// })


 instructorR.get("/searchmycourses/:instructorName/:searchkey", async function(req,res){
     const key = req.params.searchkey;
     const name = req.params.instructorName;
     var array = [];
     var query = await courses.find({InstructorUserName:name});
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
    var query = courses.find({InstructorUserName:"salama"})
    query.exec(function(err,result){
        if (err) throw err;
        if(result.length==0){
           // res.render("../views/instructor.ejs",{title:"view course"});
        }else{
            courses.find({InstructorUserName:"salama"})      
      
        res.send(result);
         // res.render("../views/instructorViewtitles.ejs",{title:"view courses"});
        }
      })

   
    })

  instructorR.get("/myInfo/first/:minibio",function(req,res){
    //console.log(req.body)
    var minibio = req.params.minibio;
    var query = instructors.find({Username:"soha"})
        query.exec(function(err,result){
            if (err) throw err;
            if(result.length==0){
              //  res.render("../views/instructor.ejs",{title:"instructor country"});
            }else{
                instructors.findOneAndUpdate({Username:"soha"},{MiniBio:minibio},{upsert:true},function(err,doc){
                    if(err) throw err;
                  });         
              // res.render("../views/instructor.ejs",{title:"instructor country"});
            }
})

})
instructorR.get("/myInfo/second/:mail",function(req,res){
  //  console.log(req.body)
    var mail = req.params.mail;
    var query = instructors.find({Username:"soha"})
        query.exec(function(err,result){
            if (err) throw err;
            if(result.length==0){
              //  res.render("../views/instructor.ejs",{title:"instructor country"});
            }else{
                instructors.findOneAndUpdate({Username:"soha"},{Email:mail},{upsert:true},function(err,doc){
                    if(err) throw err;
                  });         
              // res.render("../views/instructor.ejs",{title:"instructor country"});
            }
})

})
instructorR.get("/myInfo/third/:pass",function(req,res){
    // console.log(req.body)
    var pass = req.params.pass;
    var query = instructors.find({Username:"soha"})
        query.exec(function(err,result){
            if (err) throw err;
            if(result.length==0){
              //  res.render("../views/instructor.ejs",{title:"instructor country"});
            }else{
                instructors.findOneAndUpdate({Username:"soha"},{Password:pass},{upsert:true},function(err,doc){
                    if(err) throw err;
                  });         
              // res.render("../views/instructor.ejs",{title:"instructor country"});
            }
})

})
  
instructorR.get("/myInfo/pass/:pass",function(req,res){
    // console.log(req.body)
      var pass = req.params.pass;
      var query = instructors.find({Username:"soha"})
          query.exec(function(err,result){
              if (err) throw err;
              if(result.length==0){
                //  res.render("../views/instructor.ejs",{title:"instructor country"});
              }else{
                instructors.findOneAndUpdate({Username:"soha"},{Password:pass},{upsert:true},function(err,doc){
                      if(err) throw err;
                    });         
              // res.render("../views/instructor.ejs",{title:"instructor country"});
              }
  })
     
     })
instructorR.get("/forgetpass",function(req,res){
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