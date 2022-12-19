const express = require("express");
const individualTraineeR = express.Router();
const mongoose = require('mongoose');
const individualTrainees = require("../Models/individualTraineeSchema");
const courses = require("../Models/courseSchema");
//import { jsPDF } from "jspdf";
const jsPDF = require("jspdf")

individualTraineeR.get("/",(req, res) => {
    res.render("../views/individualTrainee.ejs",{title:"individualTrainee"})});

individualTraineeR.post("/selectcountry",function(req,res){
    console.log(req.body)
    var country = req.body.country;
    var query = individualTrainees.find({username:"adham"})
        query.exec(function(err,result){
            if (err) throw err;
            if(result.length==0){
                res.render("../views/individualTrainee.ejs",{title:"individualTrainee country"});
            }else{
                individualTrainees.findOneAndUpdate({username:"adham"},{country:country},{upsert:true},function(err,doc){
                    if(err) throw err;
                  });         
              res.render("../views/individualTrainee.ejs",{title:"individualTrainee country"});
            }
})
})
individualTraineeR.get("/myInfo/pass/:pass",function(req,res){
    // console.log(req.body)
     var pass = req.params.pass;
     var query = individualTraineeR.find({Username:"soha"})
         query.exec(function(err,result){
             if (err) throw err;
             if(result.length==0){
               //  res.render("../views/instructor.ejs",{title:"instructor country"});
             }else{
                individualTrainees.findOneAndUpdate({Username:"soha"},{Password:pass},{upsert:true},function(err,doc){
                     if(err) throw err;
                   });         
              // res.render("../views/instructor.ejs",{title:"instructor country"});
             }
 })
 
 })
individualTraineeR.post("/searchtitle",async function(req,res){
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

individualTraineeR.post("/searchsubject",async function(req,res){
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


individualTraineeR.post("/searchinstructor",async function(req,res){
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
// individualTraineeR.get("/sendcert",function(req,res){
//     var doc = new jsPDF ('landscape','px','a4','false')
//         doc.text(160,100,'certificate of completion ')
//         doc.text(160,130,'is awarded to: ')
//         doc.setFont('Helvertica','bold')
//         doc.text(160,160,'Adham Bassel Salama ')
//         doc.save('certificate.pdf')



//     var transporter = nodemailer.createTransport({
//         service: 'gmail',
//         auth: {
//           user: 'acltest321@gmail.com',
//           pass: 'yzdnccfnpqvmwpgr'
//         }
//       });
      
//       var mailOptions = {
//         from: 'acltest321@gmail.com',
//         to: 'basselbassel28@gmail.com',
//         subject: 'Sending Email using Node.js',
//         text: 'To reset your password please click here , http://localhost:3000/instructor/forgetpass'
//       };
      
//       transporter.sendMail(mailOptions, function(error, info){
//         if (error) {
//           console.log(error);
//         } else {
//           console.log('Email sent: ' + info.response);
//         }
//       });

// })

// individualTraineeR.post("/searchinstructor",async function(req,res){
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

module.exports = individualTraineeR;