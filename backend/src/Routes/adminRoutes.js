const admin = require('../Models/adminSchema');
const express = require("express");
const instructors = require('../Models/instructorSchema');
const corporateTrainee = require('../Models/corporateTraineeSchema');
const corporateRequest = require('../Models/RequestsSchema');
const reports = require('../Models/ReportSchema');
const individualTrainees = require('../Models/individualTraineeSchema');
const adminR = express.Router();



// adminR.route('/')


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
///////////////////////////////////////////////////////////////////////// ADD USER ///////////////////////////////////////////////
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

///////////////////////////////////////////////////////////////////////// CORPORATE REQUESTS ///////////////////////////////////////////////

adminR.get("/createCoReq/:Reporter/:CourseID",async function(req,res){   //:Status/
  var Reporter = req.params.Reporter;
  var Status = req.params.Status;
  var CourseID = req.params.CourseID;    
  
  try{

      const coReq = await corporateRequest.create({
        Reporter:Reporter,
        //Status:Status,
        CourseID:CourseID
  });
    console.log("Course Request Sent")
  return res.status(200).json({coReq});
  }
  catch(error)
  {
    console.log("Couldn't Send Course Request")
    console.log(error);
    return res.status(400).json({msg: error});
  }        
})


///////////////////////////////////////////////////////////////////////// Refund REQUESTS ///////////////////////////////////////////////

adminR.get("/createRefundReq/:Reporter/:CourseID",async function(req,res){   //:Status/
  var Reporter = req.params.Reporter;
  var Status = "Unseen";
  var CourseID = req.params.CourseID;    
  
  var RefundRequests = {CourseID:CourseID , Status:Status};

  try{
  
    const RefundReq = await individualTrainees.findOneAndUpdate({UserName:Reporter} , {RefundRequests:RefundRequests});

  console.log("Refund Request Sent")
  return res.status(200).json({RefundReq});
  }
  catch(error)
  {
    console.log("Couldn't Send Refund Request")
    console.log(error);
    return res.status(400).json({msg: error});
  }        
})


///////////////////////////////////////////////////////////////////////// Reports ///////////////////////////////////////////////




///////////////////////////////////////////////////////////////////////// Set Promotions ///////////////////////////////////////////////



module.exports = adminR;