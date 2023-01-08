const express = require("express");
const individualTraineeR = express.Router();
const mongoose = require('mongoose');
const individualTrainees = require("../Models/individualTraineeSchema");
const corporateTrainees = require("../Models/corporateTraineeSchema");
const instructors = require("../Models/instructorSchema");
const courses = require("../Models/courseSchema");
// const { default: ErrorMessage } = require("../../../frontend/src/components/ErrorMessage/ErrorMessage");
const exercises = require('../Models/exerciseSchema')
const subtitles = require('../Models/subtitleSchema')
const reports = require('../Models/ReportSchema')
var nodemailer = require('nodemailer');
//const instructors = require("../Models/instructorSchema");
require('dotenv').config();

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

individualTraineeR.get("/",(req, res) => {
    res.render("../views/individualTrainee.ejs",{title:"individualTrainee"})
});


individualTraineeR.post("/selectcountry",function(req,res){
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
  }
)

individualTraineeR.get("/myInfo/pass/:pass",async function(req,res){
  // console.log(req.body)
var pass = req.params.pass;
const result =await individualTrainees.findOneAndUpdate({UserName:'hazem123'},{Password:pass})
//res.json(result)
res.json({message:"updated successfully"})

})

individualTraineeR.get("/myInfo/pass/:oldpass/:pass",async function(req,res){
    // console.log(req.body)
      var pass = req.params.pass;
      var oldpass = req.params.oldpass;
    
  var oldpass2 =await individualTrainees.findOne({UserName:'hazem123'})
  
  if(oldpass==oldpass2.Password){
  const result =await individualTrainees.findOneAndUpdate({UserName:'hazem123'},{Password:pass})
  //res.json(result)
  res.json({message:"updtaed successfully"})
   } else
   res.json({message:"incorrect password"})
  
 })

 individualTraineeR.get("/unroll_from_course/:username/:couID",async(req,res)=>{
   var couID = req.params.couID;
   var username = res.locals.user;
   var list = [];
   const trainee =  await individualTrainees.findOne({UserName:username})
   const x = await courses.findOne({_id:couID});
   const courseID = trainee.Courses
   for (let i = 0; i < courseID.length; i++) {
    if(courseID[i].Course==couID)
    {
      if (courseID[i].Progress < 50)
      {
        for (let j = 0; j < courseID.length; j++) {

          if(courseID[j].Course!=couID  )
           {
            list = list.concat(courseID[j])
           }    
         }
           await individualTrainees.findOneAndUpdate({UserName:username},{Courses:list},{upsert:true})        
        }
        else{
          console.log('course progress is not less than 50');
        }
      }
      else{
        console.log('no such course');
      }
    }
    res.json(list);
})


 individualTraineeR.get("/updateprogressind/:username/:couID" , async(req,res)=>{
  const username = res.locals.user;
  const couID = req.params.couID;
  const trainee = await individualTrainees.find({UserName:username})
  const courseID = trainee[0].Courses
  var list = []
  var ratio = 0;
  var count =0;
  // const sub = await subtitles.find({Course:couID})
  const course = await courses.findOne({_id:couID})
  const sub = course.Subtitles

  for (let i = 0;  i < sub.length; i++) {
    count++
  }
  for (let i =+ 0; i < courseID.length; i++) {
    // const subb = await subtitles.find({_id:sub[i]})
    
    if(courseID[i].Course == couID)
    {
      console.log('adham')
      ratio = (1/count)*100
      
      const prog = (courseID[i].Progress)+ratio;
      if(prog<=101)
      {
        const obj = {'Course':couID , Progress:prog}
        var newarr = courseID 
        console.log('SASAS')
        newarr[i]=obj
           individualTrainees.findOneAndUpdate({UserName:username},{Courses:newarr},{upsert:true},function(err,doc){
            if(err) throw err;
          });         
      }
      else{
        console.log('100%')
      }
      
      }

  }
 console.log(newarr)
res.json(newarr)
})




 individualTraineeR.get("/submitAnswer/:traineeid/:subtitleid/:answer", async(req,res) => {
    const traineeID = req.params.traineeid;
    const subid = req.params.subtitleid;
    const answers = req.params.answer;
    var grade = 0;
    const sub = await subtitles.findOne({_id: subid});
    const e = await exercises.findOne({_id: sub.Exercise});

    if(e.CorrectAnswer == answers){
        grade = e.MaxGrade;
    }
    const ex = {
        Subtitle: subid,
        MyAnswer: answers,
        MyGrade: grade
    }

    const trainee = await individualTrainees.findOne({_id: traineeID});
    if(trainee){
        const arr = trainee.Exercises.concat(ex)
        const newT = await individualTrainees.findOneAndUpdate({_id: traineeID},{Exercises:arr}, {new:true});
        res.status(200).json(grade);
    }
    else{
        res.status(400).json({message: "couldn't submit"})
    }
    
});


individualTraineeR.get("/forgetpass/:username/:email",async function(req,res){
  const username = req.params.username;
  const email = req.params.email;
  const indivtrainee = await individualTrainees.findOne({UserName: username});
  const corptrainee = await corporateTrainees.findOne({UserName: username});
  const instructor = await instructors.findOne({UserName: username});
  if (indivtrainee){
  var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'acltest321@gmail.com',
          pass: 'yzdnccfnpqvmwpgr'
        }
      });
      
      var mailOptions = {
        from: 'acltest321@gmail.com',
        to: email,
        subject: 'Sending Email using Node.js',
        text: 'To reset your password please click here , http://localhost:3000/individualtrainee/forgetpass'
      };
      
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });
    }
    else if(corptrainee){
      var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'acltest321@gmail.com',
          pass: 'yzdnccfnpqvmwpgr'
        }
      });
      
      var mailOptions = {
        from: 'acltest321@gmail.com',
        to: email,
        subject: 'Sending Email using Node.js',
        text: 'To reset your password please click here , http://localhost:3000/corporatetrainee/forgetpass'
      };
      
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });
    }
    else if (instructor){
      var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'acltest321@gmail.com',
          pass: 'yzdnccfnpqvmwpgr'
        }
      });
      
      var mailOptions = {
        from: 'acltest321@gmail.com',
        to: email,
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
    }
})
individualTraineeR.get("/sendcertificate",function(req,res){
  
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
        subject: 'Congratulations ',
        text: 'Dear '+"user"+', this is your certificate of completion for your course , to download please click here http://localhost:3000/dowloadcertificate'
      };
      
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });

})


individualTraineeR.get("/individualCourses/:username",async(req, res) => {
    const username = res.locals.user;
    const trainee = await individualTrainees.find({UserName:username})
     const courseID = trainee[0].Courses
    var list = []
    for (let i = 0; i < courseID.length; i++) {
      if(courseID[i].Course != null)
      {
        const course = await courses.findOne({_id:courseID[i].Course})
        const progress = courseID[i].Progress
        list = list.concat([[course,progress]])
      }
    }
  res.json(list)
});

individualTraineeR.get("/viewWallet", async(req,res) => {
  //token name
  // const name = res.locals.user;

  const trainee = await individualTrainees.findOne({UserName: 'adham123'})
  if(trainee){
    res.status(200).json(trainee.Wallet)
  }
  else{
    res.status(400).json('User not Found')
  }
})


individualTraineeR.post("/payByWallet", async(req,res) => {
  //token name
  // const name = res.locals.user;
  const amount = req.body.amount
  const trainee = await individualTrainees.findOne({UserName:'adham123'})
  if(trainee){
    var newWallet = trainee.Wallet - amount
    await individualTrainees.findOneAndUpdate({UserName:'adham123'}, {Wallet: newWallet})
    return res.status(200).json('Payed')
  }
  else{
    return res.status(404).json('Not Found')
  }
})


individualTraineeR.post("/payInst", async(req,res) => {
  const course = req.body.course
  const amount = req.body.amount

  const courseInst  = await courses.findOne({_id:course})
  const inst = await instructors.findOne({UserName: courseInst.InstructorUserName})
  const addedAmount = amount*0.8 + inst.Wallet //20% goes to website
  const newInst = await instructors.findOneAndUpdate({UserName:courseInst.InstructorUserName},{Wallet:addedAmount})
  return res.status(200).json('done')
})

individualTraineeR.post("/enroll", async(req,res) => {
  // const name = res.locals.user
  const course = req.body.course
  const amount = req.body.amount
  let date = new Date().toLocaleDateString();
  try{
    
    const trainee = await individualTrainees.findOne({UserName: "adham123"})
    const addedCourse = trainee.Courses.concat({
      Course: course,
      Progress: 0,
      PayedAmount: amount,
      DateEnrolled: date
    }) 
    const newT = await individualTrainees.findOneAndUpdate({UserName: "adham123"}, {Courses: addedCourse})

    const c = await courses.findOne({_id: course})
    const cplus  = c.Views +1
    const newC = await courses.findOneAndUpdate({_id:course},{Views:cplus})
    return res.status(200).json('enrolled')

  }catch(error){
    return res.status(400).json(error.message)
  }

})

individualTraineeR.get("/getKey", (req,res)=>{
  res.status(200).json({publishableKey: process.env.STRIPE_PUBLIC_KEY})
})

individualTraineeR.post("/paymentIntent", async(req,res) => {
  const {currency, amount} = req.body 
  try{
    const paymentIntent = await stripe.paymentIntents.create({
      currency: currency,
      amount: amount,
      // automatic_payment_methods:{
      //   enabled: true,
      // },
      payment_method_types: ['card'],
    })

    return res.status(200).json({clientSecret: paymentIntent.client_secret})
  }catch(error){
    return res.status(400).json("Server Error occured please try again later")
  }


})

individualTraineeR.get("/getIndividual",async(req, res) => {
  //token name
  const name = res.locals.user;


  const result =await individualTrainees.findOne({UserName:name})
  return res.json(result)
});


module.exports = individualTraineeR;