const express = require("express");
const admin = require('../Models/adminSchema');
const user = require('../Models/userSchema');
const instructors = require('../Models/instructorSchema');
const courses = require('../Models/courseSchema');
const corporateTrainee = require('../Models/corporateTraineeSchema');
const corporateRequest = require('../Models/RequestsSchema');
const reports = require('../Models/ReportSchema');
const individualTrainees = require('../Models/individualTraineeSchema');
const refundSchema = require('../Models/refundSchema');

const adminR = express.Router();
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');

require('dotenv').config();

adminR.get("/signup/:username/:password/:email/:firstname/:lastname/:gender",async function(req,res){
    
  var username = req.params.username;
  var password = req.params.password;
  var email = req.params.email;
  var firstname = req.params.firstname;
  var lastname = req.params.lastname;
  var gender = req.params.gender;
  

  try {
    const exists = await user.findOne({UserName: username})
    if(exists){
        return res.status(400).json({msg:'Username Already Taken'})
    }
      const salt = await bcrypt.genSalt();
      const hashedPassword = await bcrypt.hash(password, salt);
      const user1 = await user.create({ UserName: username, Password: hashedPassword, Type: "IndividualTrainee" });
      console.log('user:')
      console.log(user1)
      const trainee = await individualTrainees.create({UserName: username, FirstName: firstname, LastName: lastname, Email: email,Password: hashedPassword, Gender: gender})
      console.log('trainee:')
      console.log(trainee)
      return res.status(200).json('Done')
  } catch (error) {
    console.log(error)
      return res.status(400).json({msg: 'User Could not be created, try again later'})
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

  adminR.get("/getUser",async(req, res) => {
    const result = await user.find({})
    res.send(result)
  });

  adminR.get("/AddUser",async(req, res) => {
    const users = await user.create({UserName: 'hazem123', Password: '123', Type:'individualTrainee'});
    return res.status(200).json(users);
  });



///////////////////////////////////////////////////////////////////////// ADD USER ///////////////////////////////////////////////
  

adminR.get("/addAdmin/:username/:password",async function(req,res){
    
    var userName = req.params.username;
    var password = req.params.password;
    
    try{
      const salt = await bcrypt.genSalt();
      const hashedPassword = await bcrypt.hash(password, salt);
      const users = await user.create({UserName: userName, Password: hashedPassword, Type:'Admin'});
      await admin.create({UserName: userName, Password: hashedPassword});
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
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);
    await user.create({UserName: userName, Password: hashedPassword, Type:'Instructor'});
    await instructors.create({Username: userName, Password: hashedPassword , Email: userName});
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
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);
    await user.create({UserName: userName, Password: hashedPassword, Type:'corporateTrainee'});
    await corporateTrainee.create({Username: userName, Password: hashedPassword , Email: userName});
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
  var Reporter = res.locals.user;
  var CourseID = req.params.CourseID;    
  
  
      try{
        //courseRequests
        const Course1 = await courses.findOne({_id: CourseID })
        const CorporateTrainee = await corporateTrainee.findOne({Username : Reporter});
        const CoRequest1 = await corporateRequest.findOne({Reporter : Reporter , CourseID : CourseID , Status : 'Unseen'});
        const CourseTitle = Course1.Title
        for(let i = 0 ; i < CorporateTrainee.AccessibleCourses.length ; i++){
          if(CourseID == CorporateTrainee.AccessibleCourses[i]){
            return res.status(400).json('Course Already Accesible');
          }
        }
        if(CoRequest1){
          return res.status(400).json('Course Request Already Sent');
        }
  
        const coReq = await corporateRequest.create({
            Reporter:Reporter,
            //Status:Status,
            CourseID:CourseID,
            CourseTitle:CourseTitle
      });
      const arr = CorporateTrainee.courseRequests.concat(coReq._id);
      const UpdatedTrainee = await corporateTrainee.findOneAndUpdate({Username : Reporter} , {courseRequests:arr});
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

adminR.get("/getCoReqByID/:ID",async(req, res) => {
  var ID = req.params.ID;
  const result = await corporateRequest.findOne({_id: ID})
  res.send(result)
});


adminR.get("/getCoReq/:Username",async function(req,res){
    
  var Username = res.locals.user;
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
  console.log('accept')

  try{
    const CorporateRequest = await corporateRequest.findOne({_id : RequestID});
    // console.log(CorporateRequest);

    if(CorporateRequest.Status == 'Unseen'){
      const Reporter = CorporateRequest.Reporter;
      // console.log(Reporter);
      const CourseID = CorporateRequest.CourseID;
      // console.log(CourseID);
      const Trainee = await corporateTrainee.findOne({Username:Reporter});
      // console.log(Trainee);
    
      for(let i = 0 ; i<Trainee.AccessibleCourses.length ; i++){
        if(CourseID == Trainee.AccessibleCourses[i]){
          console.log('Course Already Accesible')
          return res.status(400).json('Course Already Accesible');
        }
      }

      console.log('accept 2')

      const arr = Trainee.AccessibleCourses.concat(CourseID);
      const RefundReq = await corporateRequest.findOneAndUpdate({_id:RequestID} , {Status:Status});
      const UpdatedTrainee = await corporateTrainee.findOneAndUpdate({Username:Trainee.Username} , {AccessibleCourses:arr});

      console.log("Course Request Accepted");
      return res.status(200).json({RefundReq , UpdatedTrainee });
    }
    else{
      return res.status(400).json('Course Request Already Handled');
    }
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

    if(CorporateRequest.Status == 'Unseen'){
        
      //  console.log(CorporateRequest);
      const Reporter = CorporateRequest.Reporter;
      //  console.log(Reporter);
      const CourseID = CorporateRequest.CourseID;
      //  console.log(CourseID);
      const Trainee = await corporateTrainee.findOne({Username:Reporter});
      // console.log(Trainee);
    
      for(let i = 0 ; i<Trainee.AccessibleCourses.length ; i++){
        if(CourseID == Trainee.AccessibleCourses[i]){
          return res.status(400).json('Course Already Accesible');
        }
      }

      const RefundReq = await corporateRequest.findOneAndUpdate({_id:RequestID} , {Status:Status});

      console.log("Course Request Rejected");
      return res.status(200).json({RefundReq});
    }
    else{
      return res.status(400).json('Course Request Already Handled');
    }
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


// adminR.get("/createRefundReq/:Reporter/:CourseID",async function(req,res){   //:Status/
//   var Reporter = req.params.Reporter;
//   var Status = "Unseen";
//   var CourseID = req.params.CourseID;    
  
//   var RefundRequest = {CourseID:CourseID , Status:Status};
//   const Trainee = await individualTrainees.findOne({UserName:Reporter});

//   const arr = Trainee.RefundRequests.concat(RefundRequest);

//   try{
  
//     const RefundReq = await individualTrainees.findOneAndUpdate({UserName:Reporter} , {RefundRequests:arr});

//   console.log("Refund Request Sent")
//   return res.status(200).json({RefundReq});
//   }
//   catch(error)
//   {
//     console.log("Couldn't Send Refund Request")
//     console.log(error);
//     return res.status(400).json({msg: error});
//   }        
// })

adminR.get("/createRefundReqNew/:Reporter/:CourseID",async function(req,res){
  var Reporter = res.locals.user;
  var CourseID = req.params.CourseID;  
  
    try{
      const Course1 = await courses.findOne({_id: CourseID })
      const individualTrainee = await individualTrainees.findOne({UserName : Reporter});
      const refund1 = await refundSchema.findOne({Reporter : Reporter , CourseID : CourseID});
      const CourseTitle = Course1.Title
      if(refund1){
        return res.status(400).json('Course Request Already Sent');
      }

      const refund = await refundSchema.create({
          Reporter:Reporter,
          CourseID:CourseID,
          CourseTitle:CourseTitle
    });
    const arr = individualTrainee.RefundRequests.concat(refund._id);
    console.log(arr)
    const UpdatedTrainee = await individualTrainees.findOneAndUpdate({UserName : Reporter} , {RefundRequests:arr});
    console.log("Refund Request Sent")
    return res.status(200).json({refund});
    }
    catch(error)
    {
      console.log("Couldn't Send Refund Request")
      console.log(error);
      return res.status(400).json({msg: error.message});
    }
})

// adminR.get("/getAllRefundReq",async(req, res) => {
//   const TraineesArray = await individualTrainees.find({});
//   var Result = [];
// //  {UserName, CourseID, Status}
//   for(let i = 0  ; i<TraineesArray.length ; i++){
//     var Trainee = TraineesArray[i];
//     for(let j = 0 ; j < Trainee.RefundRequests.length ; j++){
//       Result = Result.concat({UserName: Trainee.UserName, CourseID: Trainee.RefundRequests[j].CourseID, Status: Trainee.RefundRequests[j].Status});
//     }
//   }
//   res.send(Result)
// });

adminR.get("/getAllRefundReqNew",async(req, res) => {
  const result = await refundSchema.find({})
  res.send(result)
});

adminR.get("/getRefundReqByID/:ID",async(req, res) => {
  try{
  var ID = req.params.ID;
  const result = await refundSchema.findOne({_id: ID})
  return res.send(result)
  }
  catch(error){
    return res.json({error})
  }
});


adminR.get("/getRefundReqByName/:Username",async function(req,res){
  var Username = res.locals.user;
  
  const user = await individualTrainees.findOne({UserName: Username })
  if(user) {
     return res.json(user.RefundRequests);
  }
  else{
     return res.json("ok"); 
  }
})


//get amount paid , -80% from instructor wallet , +100% to trainee wallet , change request status 
adminR.get("/acceptRefundReq/:RequestID",async function(req,res){
  var RequestID = req.params.RequestID;
  var Status = "Accepted";
  console.log('accept')

  try{
    const Refund = await refundSchema.findOne({_id : RequestID});
      //console.log(Refund);
    if(Refund && Refund.Status == 'Unseen'){
      const Reporter = Refund.Reporter;
      //console.log(Reporter);
      const CourseID = Refund.CourseID;
      //console.log(CourseID);
      const Trainee = await individualTrainees.findOne({UserName:Reporter});
      //console.log(Trainee.Courses);
      const Course = await courses.findOne({_id : Refund.CourseID});
      //console.log(Course.InstructorUserName)
      const Instructor = await instructors.findOne({Username : Course.InstructorUserName});
      //console.log(Instructor)

      for(let i = 0 ; i < Trainee.Courses.length ; i++){
        //console.log(Trainee.Courses[i].Course)
        if(Trainee.Courses[i].Course == CourseID && Trainee.Courses[i].Progress < 50){
          var AmountPaid = Trainee.Courses[i].PayedAmount
        }
      }
      //console.log(AmountPaid)

      const walletInst = Instructor.Wallet - ((80 * AmountPaid)/100) 
      const walletTrainee = Trainee.Wallet + AmountPaid

      //console.log(walletInst)
      //console.log(walletTrainee)

      const RefundReq = await refundSchema.findOneAndUpdate({_id:RequestID} , {Status:Status});
      const RefundReq1 = await instructors.findOneAndUpdate({Username : Course.InstructorUserName} , {Wallet:walletInst});
      const RefundReq2 = await individualTrainees.findOneAndUpdate({UserName : Reporter} , {Wallet:walletTrainee});

      console.log("Refund Request Accepted");
      return res.status(200).json({RefundReq});
    }
    else{
      return res.status(400).json('Refund Request Already Handled');
    }
}
  catch(error)
  {
    console.log("Couldn't Accept Refund Request");
    console.log(error);
    return res.status(400).json({msg: error});
  }        
})


adminR.get("/rejectRefundReq/:RequestID",async function(req,res){   //:Status/
  var RequestID = req.params.RequestID;
  var Status = "Rejected";

  try{
    const Refund = await refundSchema.findOne({_id : RequestID});
     //console.log(Refund);

    if(Refund && Refund.Status == 'Unseen'){
      const Reporter = Refund.Reporter;
      // console.log(Reporter);
      const CourseID = Refund.CourseID;
      // console.log(CourseID);
      const Trainee = await individualTrainees.findOne({UserName:Reporter});
      // console.log(Trainee);
    
      const RefundReq = await refundSchema.findOneAndUpdate({_id:RequestID} , {Status:Status});

      //console.log("Refund Request Accepted");
      return res.status(200).json({RefundReq});
    }
    else{
      return res.status(400).json('Refund Request Already Handled');
    }
}
  catch(error)
  {
    console.log("Couldn't Accept Refund Request");
    console.log(error);
    return res.status(400).json({msg: error});
  }        
})
// adminR.get("/getRefundReq/:Username",async function(req,res){
    
//   var Username = req.params.Username;
//   const user = await individualTrainees.findOne({UserName: Username })
//   if(user) {
//     console.log('Trainee Found')
//      return res.json(user.RefundRequests);
//   }
//   else{
//     console.log('Trainee Not Found')
//      return res.json("ok"); 
//   }
// })

// adminR.get("/getRefundReqByID/:ID",async function(req,res){
    
//   var ID = req.params.ID;
//   var userList = []
//   try{
//      userList = await individualTrainees.find({})
//       for(let i = 0 ; userList.length ; i++){
//         if(userList[i].RefundRequests !== []) {
//           for(let j = 0 ; j < userList[i].RefundRequests.length ; j++){
//             if(userList[i].RefundRequests[j]._id == ID){
//               return res.json({R : userList[i].RefundRequests[j] , T : userList[i].UserName})
//             }
//           }
//         }
//       }
//       return res.json('not found')
//   }
//   catch(error){
//     return res.json(error.message)
//   }
// })

// adminR.get("/acceptRefundReq/:CourseID1/:UserName",async function(req,res){
//   var CourseID1 = req.params.CourseID1;
//   var Username = req.params.UserName;

//   // CourseID:String,
//   // Status:String

//   try{
//     const Trainee = await individualTrainees.findOne({UserName: Username })
//     if(Trainee) {
//       console.log('Trainee Found')
//       console.log(Trainee)
//       var RequestArray = Trainee.RefundRequests
//       for(let i = 0 ; RequestArray.length ; i++){
//         if(RequestArray[i].CourseID == CourseID1){
//           var newReq = {CourseID : CourseID1 , Status : 'Accepted'}
//           console.log(newReq)
//           RequestArray[i] = newReq
//           console.log(RequestArray)
//           const UpdatedTrainee = await individualTrainees.findOneAndUpdate({UserName : Username} , {RefundRequests:RequestArray});
//         }
//       }
//       return res.json(UpdatedTrainee);
//     }
//   }
//   catch(error)
//   {
//     return res.status(400).json({msg: error.message});
//   }  

// })

// adminR.get("/rejectRefundReq/:CourseID1/:UserName",async function(req,res){
//   var CourseID1 = req.params.CourseID1;
//   var Username = req.params.UserName;

//   // CourseID:String,
//   // Status:String

//   try{
//     const Trainee = await individualTrainees.findOne({UserName: Username })
//     if(Trainee) {
//       console.log('Trainee Found')
//       console.log(Trainee)
//       var RequestArray = Trainee.RefundRequests
//       for(let i = 0 ; RequestArray.length ; i++){
//         if(RequestArray[i].CourseID == CourseID1){
//           var newReq = {CourseID : CourseID1 , Status : 'Rejected'}
//           console.log(newReq)
//           RequestArray[i] = newReq
//           console.log(RequestArray)
//           const UpdatedTrainee = await individualTrainees.findOneAndUpdate({UserName : Username} , {RefundRequests:RequestArray});
//         }
//       }
//       return res.json(UpdatedTrainee);
//     }
//   }
//   catch(error)
//   {
//     return res.status(400).json({msg: error.message});
//   }  

// })

///////////////////////////////////////////////////////////////////////// Reports ///////////////////////////////////////////////

adminR.get("/createReport/:Reporter/:CourseID/:Type/:Comment",async function(req,res){   //:Status/
  var Reporter = res.locals.user;
  var Type = req.params.Type;
  var CourseID = req.params.CourseID;  
  var Comment = req.params.Comment  
  
  try{
    const Course1 = await courses.findOne({_id: CourseID })
    const CourseTitle = Course1.Title
    const user1 = await user.findOne({UserName: Reporter })
    var Report = [];
    if(Comment == "Empty")
    {
      Report = await reports.create({
      Reporter:Reporter,
      Type:Type,
      CourseID:CourseID,
      CourseTitle:CourseTitle,
    });
    }
    else{
        Report = await reports.create({
        Reporter:Reporter,
        Type:Type,
        CourseID:CourseID,
        CourseTitle:CourseTitle,
        Comment:Comment
      });
    }

    console.log(user1.Type)

    if(user1.Type == "individualTrainee"){
      const individualTrainee = await individualTrainees.findOne({UserName: Reporter })
      const arr = individualTrainee.Reports.concat(Report._id);
      const UpdatedTrainee = await individualTrainees.findOneAndUpdate({UserName : Reporter} , {Reports:arr});
    }

    else if(user1.Type == "corporateTrainee"){
      const corporateTrainee1 = await corporateTrainee.findOne({Username: Reporter })
      const arr1 = corporateTrainee1.Reports.concat(Report._id);
      const UpdatedTrainee1 = await corporateTrainee.findOneAndUpdate({Username : Reporter} , {Reports:arr1});
    }

    else if(user1.Type == "Instructor"){
      const Instructor1 = await instructors.findOne({Username: Reporter })
      const arr2 = Instructor1.Reports.concat(Report._id);
      const UpdatedTrainee1 = await instructors.findOneAndUpdate({Username : Reporter} , {Reports:arr2});
    }
    

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
  var Username = res.locals.user;
  
  try{
  const reportList = await reports.find({Reporter: Username })

  var list = []
    for (let i = 0; i < reportList.length; i++) {
        const course = await courses.findOne({_id:reportList[i].CourseID})
        list = list.concat([[reportList[i],course]])
    }

  if(list) {
    //console.log('report Found')
     return res.json(list);
  }
  else{
    console.log('report Not Found')
     return res.json("ok"); 
  }
}
catch(error)
{
  console.log("Couldn't Get Report")
  console.log(error);
  return res.status(400).json({msg: error});
}        
})

adminR.get("/getReportID/:ID",async function(req,res){
  var ID = req.params.ID;
  
  try{
    if(ID){
    const report = await reports.findOne({_id: ID })

    if(report) {
      return res.json(report);
    }
    else{
      return res.json("ok"); 
    }
  }
  }
  catch(error){
    return res.json(error.message)
  }
})
adminR.get("/FollowUp/:ReportID/:Message", async function(req,res){

  var Message = req.params.Message;
  var ReportID = req.params.ReportID;

  var FollowUp = {Message:Message, Date:"10", Time:"10"}
  var Report = await reports.findOne({_id:ReportID});

  var arr = Report.FollowUps.concat(FollowUp);

  const Result = await reports.findByIdAndUpdate({_id:ReportID}, {FollowUps:arr})

  res.json(Result);

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

adminR.get("/SetPromotion/:CourseID/:PromotionPercentage/:PromotionStartTime/:PromotionEndTime/:PromotionStartDate/:PromotionEndDate",async function(req,res){   //:Status/
  var CourseID = req.params.CourseID;
  var PromotionPercentage = req.params.PromotionPercentage;
  var PromotionStartTime = req.params.PromotionStartTime;
  var PromotionEndTime = req.params.PromotionEndTime;
  var PromotionStartDate = req.params.PromotionStartDate;
  var PromotionEndDate = req.params.PromotionEndDate;
  try{

    var SplitStartDate = []
    SplitStartDate = PromotionStartDate.split('-')
    var StartDay = SplitStartDate[2]
    console.log('Start Day:')
    console.log(StartDay)
    var StartMonth = SplitStartDate[1]
    console.log('Start Month:')
    console.log(StartMonth)
    var StartYear = SplitStartDate[0]
    console.log('Star tYear:')
    console.log(StartYear)

    var SplitEndDate = []
    SplitEndDate = PromotionEndDate.split('-')
    var EndDay = SplitEndDate[2]
    console.log('End Day:')
    console.log(EndDay)
    var EndMonth = SplitEndDate[1]
    console.log('End Month:')
    console.log(EndMonth)
    var EndYear = SplitEndDate[0]
    console.log('End Year:')
    console.log(EndYear)
  
  
    let ts = Date.now();
    console.log('ts:')
    console.log(ts)
    let date_ob = new Date(ts);
    let currentDate = date_ob.getDate();
    let currentMonth = date_ob.getMonth() + 1;
    let currentYear = date_ob.getFullYear();
    let currentHour = date_ob.getHours();
  
    //(10/10/2010) // Year> , year== + month> , year== + month== + day>, year== + month== + day== + hour>
    //(11/9/2010)
    // prints date & time in YYYY-MM-DD format
    console.log(currentYear + "-" + currentMonth + "-" + currentDate);
    //       Year>,                    year== + month>,                                 year== + month== + day>,                                              year== + month== + day== + hour>
    if((currentYear > EndYear)||(currentMonth > EndMonth && currentYear == EndYear)||(currentDate > EndDay && currentMonth == EndMonth && currentYear == EndYear)||(currentDate == EndDay && currentMonth == EndMonth && currentYear == EndYear && currentHour > PromotionEndTime)){ //Expired 5alas
      console.log('Expired Condition')  
      const course1 = await courses.findOneAndUpdate({_id : CourseID} , {$set: {PromotionPercentage: 0, PromotionState: 'Expired',PromotedPrice:0 } });
    }

    else if((currentYear > StartYear)||(currentMonth > StartMonth && currentYear == StartYear)||(currentDate > StartDay && currentMonth == StartMonth && currentYear == StartYear)||(currentDate == StartDay && currentMonth == StartMonth && currentYear == StartYear && currentHour > PromotionStartTime)){
      console.log('Ongoing Condition')  

      const courseSara = await courses.findOne({_id: CourseID });
      console.log(courseSara)
        var PriceOld = courseSara.Price;
        var PriceNew = PriceOld*(100-PromotionPercentage)/100;
        console.log('Price Old :')
        console.log(PriceOld)
        console.log('Price New :')
        console.log(PriceNew)

        const courseUpdated = await courses.findOneAndUpdate({_id : CourseID} , {$set: {PromotionPercentage: PromotionPercentage, PromotionState: 'Ongoing', PromotionStartTime:PromotionStartTime, PromotionEndTime: PromotionEndTime, PromotionStartDate:PromotionStartDate, PromotionEndDate: PromotionEndDate, PromotedPrice:PriceNew }});
        console.log(courseUpdated);
    }
    console.log("Promotion Added");
    return res.status(200).json({msg: 'Done'});
  }
  catch(error)
  {
    console.log("Couldn't Add Promotion");
    console.log(error);
    return res.status(400).json({msg: error});
  }        
})




adminR.get("/GetPromotionState/:CourseID",async function(req,res){   //:Status/
  var CourseID = req.params.CourseID;
  
  try{

    const course = await courses.findOne({_id: CourseID });

    var PromotionPercentage = course.PromotionPercentage;
    var PromotionStartTime = course.PromotionStartTime;
    console.log(PromotionStartTime)
    var PromotionEndTime = course.PromotionEndTime;
    console.log(PromotionEndTime)
    var PromotionStartDate = course.PromotionStartDate;
    console.log(PromotionStartDate)
    var PromotionEndDate = course.PromotionEndDate;
    console.log(PromotionEndDate)

    var SplitStartDate = []
//    SplitStartDate = PromotionStartDate.split('-')
    var StartDay = PromotionStartDate.getDay();
    console.log(StartDay)
    var StartMonth = PromotionStartDate.getMonth();
    console.log(StartMonth)
    var StartYear = PromotionStartDate.getFullYear();
    console.log(StartYear)

    var SplitEndDate = []
//    SplitEndDate = PromotionEndDate.split('-')
    var EndDay = PromotionEndDate.getDay();
    console.log(EndDay)
    var EndMonth = PromotionEndDate.getMonth();
    console.log(EndMonth)
    var EndYear = PromotionEndDate.getFullYear();
    console.log(EndYear)


    let ts = Date.now();
    console.log('ts:')
    console.log(ts)
    let date_ob = new Date(ts);
    let currentDate = date_ob.getDate();
    let currentMonth = date_ob.getMonth() + 1;
    let currentYear = date_ob.getFullYear();
    let currentHour = date_ob.getHours();
  
    //(10/10/2010) // Year> , year== + month> , year== + month== + day>, year== + month== + day== + hour>
    //(11/9/2010)
    // prints date & time in YYYY-MM-DD format
    console.log(currentYear + "-" + currentMonth + "-" + currentDate);
    //       Year>,                    year== + month>,                                 year== + month== + day>,                                              year== + month== + day== + hour>
    if((currentYear > EndYear)||(currentMonth > EndMonth && currentYear == EndYear)||(currentDate > EndDay && currentMonth == EndMonth && currentYear == EndYear)||(currentDate == EndDay && currentMonth == EndMonth && currentYear == EndYear && currentHour > PromotionEndTime)){ //Expired 5alas
        const course1 = await courses.findOneAndUpdate({_id : CourseID} , {$set: {PromotionPercentage: 0, PromotionState: 'Expired',PromotedPrice:0 } });
    }

    else if((currentYear > StartYear)||(currentMonth > StartMonth && currentYear == StartYear)||(currentDate > StartDay && currentMonth == StartMonth && currentYear == StartYear)||(currentDate == StartDay && currentMonth == StartMonth && currentYear == StartYear && currentHour > PromotionStartTime)){

        var PriceOld = course.Price;
        var PriceNew = PriceOld*(100-PromotionPercentage)/100;
        console.log(PriceOld)
        console.log(PriceNew)

        const courseUpdated = await courses.findOneAndUpdate({_id : CourseID} , {$set: {PromotionPercentage: PromotionPercentage, PromotionState: 'Ongoing', PromotionStartTime:PromotionStartTime, PromotionEndTime: PromotionEndTime, PromotionStartDate:PromotionStartDate, PromotionEndDate: PromotionEndDate, PromotedPrice:PriceNew }});
    }
    console.log("Promotion Status");
    return res.status(200).json(course.PromotionState);
  }
  catch(error)
  {
    console.log("Couldn't Get Promotion Status");
    console.log(error);
    return res.status(400).json({msg: error});
  }        
})

adminR.get("/firstLogin", async (req,res) => {
  //token name
  const name = res.locals.user

  const ad = await admin.findOne({UserName: name})
  if(!ad){
    return res.status(400).json("User not found")
  }
  else{
    return res.status(200).json(ad.FirstLogin)
  }
})

adminR.get("/changeFirstLogin", async (req,res) => {
  //token name
  const name = res.locals.user

  const ad = await admin.findOneAndUpdate({UserName: name},{FirstLogin: false})
  if(!ad){
    return res.status(400).json("User not found")
  }
  else{
    return res.status(200).json(ad.FirstLogin)
  }
})

adminR.post('/changePass', async (req,res) =>{
  
  const name = res.locals.user;
  const newPass = req.body.newPass;

  if(!name){
      return res.status(400).json('You must be logged in')
  }
  if(!newPass){
      return res.status(400).json('You must enter a new password')
  }

  const u = await user.findOne({UserName: name})

  try{
    const hashedpass = u.Password;
    bcrypt.compare(newPass,hashedpass,(err,data)=>{
        if(err){
            return res.status(400).json('Not Found')
        }
        if(data){
            return res.status(400).json('New password cannot be old password')
          }
        })
        const salt = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(newPass, salt);
        await user.findOneAndUpdate({UserName: name},{Password: hashedPassword})
      
        await admin.findOneAndUpdate({UserName: name},{Password: hashedPassword})
            
        return res.status(200).json('Password Changed')
        
  } catch (error) {
      res.json({error: error.message})
  }
})




module.exports = adminR;