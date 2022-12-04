const express = require("express");
const instructorR = express.Router();
const mongoose = require('mongoose');
const instructors = require("../Models/instructorSchema");
const courses = require("../Models/courseSchema");
var nodemailer = require('nodemailer');

instructorR.get("/",(req, res) => {
    res.render("../views/instructor.ejs",{title:"instructor"})});

instructorR.post("/selectcountry",function(req,res){
    console.log(req.body)
    var country = req.body.country;
    var query = instructors.find({username:"adham"})
        query.exec(function(err,result){
            if (err) throw err;
            if(result.length==0){
              //  res.render("../views/instructor.ejs",{title:"instructor country"});
            }else{
                instructors.findOneAndUpdate({username:"adham"},{country:country},{upsert:true},function(err,doc){
                    if(err) throw err;
                  });         
             // res.render("../views/instructor.ejs",{title:"instructor country"});
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
instructorR.post("/searchtitle",async function(req,res){
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
    

module.exports = instructorR;