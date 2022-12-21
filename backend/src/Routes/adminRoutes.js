const admin = require('../Models/adminSchema');
const express = require("express");
const instructors = require('../Models/instructorSchema');
const corporateTrainee = require('../Models/corporateTraineeSchema');
const adminR = express.Router();

const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');
require('dotenv').config();

// create json web token
const maxAge = 3 * 24 * 60 * 60; //3 days

const createToken = (name) => {
    return jwt.sign({ name },process.env.secret , {
        expiresIn: maxAge
    });
};

adminR.post("/login" , async (req, res) => {
  const {username,pass} = req.body;
  const user = await admin.findOne({UserName:username});
  if(user){
      const hashedpass = user.Password;
      bcrypt.compare(pass,hashedpass,(err,data)=>{
          if(err){
              return res.status(400).json({error: err.message})
          }
          if(data){
              const token = createToken(user.UserName);
              res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000 });
              return res.status(200).json(user.UserName)
              // console.log(res.getHeader('set-cookie').split(';')[0]);
          }
          else{
              return res.status(400).json({msg: "incorrect password"})
          }
      });
  }
})



adminR.get("/" , function(req,res){
    res.render("../views/admin.ejs",{message:"",title:"login"});
  });



  adminR.get("/getAdmin/:username",async function(req,res){
    
      var name = req.params.username;
      const user = await admin.findOne({UserName: name })
      if(user) {
        console.log("User Name Already Taken")
         return res.json( "User Name Already Taken");
      }
      else{
        console.log("User Name Not Taken")
         return res.json("ok"); 
      }
     // res.status(200).json(users)
  
  })

  adminR.get("/addAdmin/:username/:password",async function(req,res){
    
    var userName = req.params.username;
    var password = req.params.password;
    
    try{

      await admin.create({UserName: userName, Password: password});
      console.log("Done ya bashaaa")
    //  alert('User Added To System')
    return res.status(200).json({msg: "User Added"});

    // console.log('alooooo')
    }
    catch(error)
    {
      console.log("La mesh naf3a")
      return res.status(400).json({msg: "User Name Already Taken"});

    //  alert('User Name Already Taken')
    //  console.log('msh tamam')
    }
 
    
  //  res.render("../views/admin.ejs",{title:"admin home page"});
  // alert('created')
          
})

adminR.get("/addInstructor/:username/:password",async function(req,res){
    
  var userName = req.params.username;
  var password = req.params.password;
  
  try{
    await instructors.create({Username: userName, Password: password , Email: userName});
    console.log("Done ya bashaaa")
  return res.status(200).json({msg: "User Added"});
  }
  catch(error)
  {
    console.log("La mesh naf3a")
    return res.status(400).json({msg: "User Name Already Taken"});
  }      
})


adminR.get("/addCoTrainee/:username/:password",async function(req,res){
    
  var userName = req.params.username;
  var password = req.params.password;
  
  try{
    await corporateTrainee.create({Username: userName, Password: password , Email: userName});
    console.log("Done ya bashaaa")
  return res.status(200).json({msg: "User Added"});
  }
  catch(error)
  {
    console.log("La mesh naf3a")
    return res.status(400).json({msg: error});
  }      
})


module.exports = adminR;