const express = require("express");
const admin = require('../Models/adminSchema');
const user = require('../Models/userSchema');
const instructors = require('../Models/instructorSchema');
const corporateTrainee = require('../Models/corporateTraineeSchema');
const corporateRequest = require('../Models/RequestsSchema');
const reports = require('../Models/ReportSchema');
const individualTrainees = require('../Models/individualTraineeSchema');
const courses = require('../Models/courseSchema');

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

  adminR.get("/getUser",async(req, res) => {
    const result = await user.find({})
    res.send(result)
  });

  adminR.get("/AddUser",async(req, res) => {
    const users = await user.create({UserName: 'Sara', Password: 's', Type:'Admin'});
    return res.status(200).json(users);
  });



///////////////////////////////////////////////////////////////////////// ADD USER ///////////////////////////////////////////////
  

adminR.get("/addAdmin/:username/:password",async function(req,res){
    
    var userName = req.params.username;
    var password = req.params.password;
    
    try{

      await admin.create({UserName: userName, Password: password});
      const users = await user.create({UserName: userName, Password: password, Type:'Admin'});
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
    await user.create({UserName: userName, Password: password, Type:'Instructor'});
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
    await user.create({UserName: userName, Password: password, Type:'corporateTrainee'});
    console.log("Done ya bashaaa")
  return res.status(200).json({msg: "User Added"});
  }
  catch(error)
  {
    console.log("La mesh naf3a")
    return res.status(400).json({msg: "User Name Already Taken"});
  }      
})

//////////////////////////////////// SPRINT 3 ///////////////////////////////////

/* 
    Todo list:
    1) Filter Requests,Reports By Reporter,Type,CourseID,Status
    2) Search for Requests,Reports By Reporter,Type,CourseID,Status

*/

///////////////////////////////////////////////////////////////////////// CORPORATE REQUESTS ///////////////////////////////////////////////



////////// Don't Forget to check if the course is already in their accessible courses
adminR.get("/createCoReq/:Reporter/:CourseID",async function(req,res){   //:Status/
  var Reporter = req.params.Reporter;
  var Status = req.params.Status;
  var CourseID = req.params.CourseID;    
  
      try{
  
        const CorporateTrainee = await corporateTrainee.find({Username : Reporter});
        const AccessibleCourses = CorporateTrainee.AccessibleCourses;
      
        for(let i = 0 ; i<AccessibleCourses.length ; i++){
          if(CourseID == AccessibleCourses[i]){
            return res.status(400).json('Course Already Accesible');
          }
        }
  
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

adminR.get("/getAllCoReq",async(req, res) => {
  const result = await corporateRequest.find({})
  res.send(result)
});


adminR.get("/getCoReq/:Username",async function(req,res){
    
  var Username = req.params.Username;
  const user = await corporateTrainee.findOne({Username: Username })
  if(user) {
    console.log('CorporateTrainee Found')
     return res.json(user.courseRequests);
  }
  else{
    console.log('CorporateTrainee Not Found')
     return res.json("ok"); 
  }
})


//Change Status + Add to list
adminR.get("/AcceptCoRequest/:RequestID",async function(req,res){   //:Status/
  var RequestID = req.params.RequestID;
  var Status = "Accepted";

  try{
    const CorporateRequest = await corporateRequest.findOne({_id : RequestID});
    // console.log(CorporateRequest);
    const Reporter = CorporateRequest.Reporter;
    // console.log(Reporter);
    const CourseID = CorporateRequest.CourseID;
    // console.log(CourseID);
    const Trainee = await corporateTrainee.findOne({Username:Reporter});
    console.log(Trainee);
  
    for(let i = 0 ; i<Trainee.AccessibleCourses.length ; i++){
      if(CourseID == Trainee.AccessibleCourses[i]){
        return res.status(400).json('Course Already Accesible');
      }
    }


    const arr = Trainee.AccessibleCourses.concat(CourseID);
    const RefundReq = await corporateRequest.findOneAndUpdate({_id:RequestID} , {Status:Status});
    const UpdatedTrainee = await corporateTrainee.findOneAndUpdate({Username:Trainee.Username} , {AccessibleCourses:arr});

    console.log("Course Request Accepted");
    return res.status(200).json({RefundReq , UpdatedTrainee });
  }
  catch(error)
  {
    console.log("Couldn't Accept Course Request");
    console.log(error);
    return res.status(400).json({msg: error});
  }        
})


adminR.get("/RejectCoRequest/:RequestID",async function(req,res){   //:Status/
  var RequestID = req.params.RequestID;
  var Status = "Rejected";

  try{
    const CorporateRequest = await corporateRequest.findOne({_id : RequestID});
     console.log(CorporateRequest);
    const Reporter = CorporateRequest.Reporter;
     console.log(Reporter);
    const CourseID = CorporateRequest.CourseID;
     console.log(CourseID);
    const Trainee = await corporateTrainee.findOne({Username:Reporter});
    console.log(Trainee);
  
    for(let i = 0 ; i<Trainee.AccessibleCourses.length ; i++){
      if(CourseID == Trainee.AccessibleCourses[i]){
        return res.status(400).json('Course Already Accesible');
      }
    }

    const RefundReq = await corporateRequest.findOneAndUpdate({_id:RequestID} , {Status:Status});

    console.log("Course Request Rejected");
    return res.status(200).json({RefundReq});
  }
  catch(error)
  {
    console.log("Couldn't Reject Course Request");
    console.log(error);
    return res.status(400).json({msg: error});
  }        
})

///////////////////////////////////////////////////////////////////////// Refund REQUESTS ///////////////////////////////////////////////
// User.Wallet += Course.Price


adminR.get("/createRefundReq/:Reporter/:CourseID",async function(req,res){   //:Status/
  var Reporter = req.params.Reporter;
  var Status = "Unseen";
  var CourseID = req.params.CourseID;    
  
  var RefundRequest = {CourseID:CourseID , Status:Status};
  const Trainee = await individualTrainees.findOne({UserName:Reporter});

  const arr = Trainee.RefundRequests.concat(RefundRequest);

  try{
  
    const RefundReq = await individualTrainees.findOneAndUpdate({UserName:Reporter} , {RefundRequests:arr});

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


adminR.get("/getAllRefundReq",async(req, res) => {
  const TraineesArray = await individualTrainees.find({});
  var Result = [];
//  {UserName, CourseID, Status}
  for(let i = 0  ; i<TraineesArray.length ; i++){
    var Trainee = TraineesArray[i];
    for(let j = 0 ; j < Trainee.RefundRequests.length ; j++){
      Result = Result.concat({UserName: Trainee.UserName, CourseID: Trainee.RefundRequests[j].CourseID, Status: Trainee.RefundRequests[j].Status});
    }
    console.log(Result);    
  }

  res.send(Result)
});

adminR.get("/getRefundReq/:Username",async function(req,res){
    
  var Username = req.params.Username;
  const user = await individualTrainees.findOne({Username: Username })
  if(user) {
    console.log('Trainee Found')
     return res.json(user.RefundRequests);
  }
  else{
    console.log('Trainee Not Found')
     return res.json("ok"); 
  }
})

///////////////////////////////////////////////////////////////////////// Reports ///////////////////////////////////////////////
//eh el tanzim el gamd da ya sara ^_^

adminR.get("/createReport/:Reporter/:CourseID/:Type",async function(req,res){   //:Status/
  var Reporter = req.params.Reporter;
  var Type = req.params.Type;
  var CourseID = req.params.CourseID;    
  
  try{
  
    const Report = await reports.create({
      Reporter:Reporter,
      Type:Type,
      CourseID:CourseID
});

  console.log("Report Sent")
  return res.status(200).json({Report});
  }
  catch(error)
  {
    console.log("Couldn't Send Report")
    console.log(error);
    return res.status(400).json({msg: error});
  }        
})


adminR.get("/getAllReports",async(req, res) => {
  const result = await reports.find({})
  res.send(result)
});


adminR.get("/getReport/:Username",async function(req,res){
  var Username = req.params.Username;
  
  const reportList = await reports.find({Reporter: Username })

  var list = []
    for (let i = 0; i < reportList.length; i++) {
        const course = await courses.findOne({_id:reportList[i].CourseID})
        list = list.concat([[reportList[i],course]])
    }

  if(list) {
    console.log('report Found')
     return res.json(list);
  }
  else{
    console.log('report Not Found')
     return res.json("ok"); 
  }
})


//Change Status
adminR.get("/PendingReport/:ReportID",async function(req,res){   //:Status/
  var ReportID = req.params.ReportID;
  var Status = "Pending";

  try{
    const Report = await reports.findOneAndUpdate({_id : ReportID} , {Status:Status});

    console.log("Report is Pending");
    return res.status(200).json({Report});
  }
  catch(error)
  {
    console.log("Couldn't Pend Report");
    console.log(error);
    return res.status(400).json({msg: error});
  }        
})


adminR.get("/ResolveReport/:ReportID",async function(req,res){   //:Status/
  var ReportID = req.params.ReportID;
  var Status = "Resolved";

  try{
    const Report = await reports.findOneAndUpdate({_id : ReportID} , {Status:Status});

    console.log("Report Resolved");
    return res.status(200).json({Report});
  }
  catch(error)
  {
    console.log("Couldn't Resolve Report");
    console.log(error);
    return res.status(400).json({msg: error});
  }        
})

///////////////////////////////////////////////////////////////////////// Set Promotions ///////////////////////////////////////////////
//


module.exports = adminR;