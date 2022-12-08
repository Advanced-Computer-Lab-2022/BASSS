const express = require("express");
const courseR = express.Router();
const mongoose = require('mongoose');
const courses = require('../Models/courseSchema')
const excercises = require('../Models/exerciseSchema')
const instructors = require('../Models/instructorSchema')
const subtitleSchema = require('../Models/subtitleSchema')
const subtitles = require('../Models/subtitleSchema');
const exercises = require('../Models/exerciseSchema');
courseR.get("/",async(req, res) => {
    const result =await courses.find({})
    res.send(result)
});


courseR.get("/:name",async(req, res) => {
  const instName = req.params.name;
  const result =await courses.find({InstructorUserName:instName})
  res.status(200).json(result);
});

courseR.get("/courseDetails/:courseId", async(req,res) => {
    var id = req.params.courseId;
    var result = await courses.find({_id:id});
    res.status(200).json(result);
})
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

courseR.get("/getsubtitle/:courseID",async(req, res) => {
  var courseId = req.params.courseID;
  const list = [] ;
  const result =await subtitles.find({Course:courseId})
  // for (let i = 0; i < result.length; i++) {

  // }
  res.json(result)
});

courseR.get("/exercise/:courseID/:subtitleID", async(req,res) => {
    const courseId = req.params.courseID;
    const subtitleId = req.params.subtitleID;

    const course = await courses.findOne({_id:courseId});
    const subtitle = await subtitles.findById(course.Subtitles.find(element => element==subtitleId))
    const exercise = await exercises.findById(subtitle.Exercise);

    res.status(200).json(exercise);
});

courseR.get("/correctAnswer/:courseID/:subtitleID", async(req,res) => {
    const courseId = req.params.courseID;
    const subtitleId = req.params.subtitleID;

    const course = await courses.findOne({_id:courseId});
    const subtitle = await subtitles.findById(course.Subtitles.find(element => element==subtitleId));
    const exercise = await exercises.findById(subtitle.Exercise);

    res.status(200).json(exercise.CorrectAnswer);
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

courseR.get("/getInstructor/:username",async function(req,res){
    
    var name = req.params.username;
    const user = await instructors.findOne({Username: name })
    if(user) {
      console.log("Instructor Found")
       return res.status(200).json({user});
    }
    else{
      console.log("Instructor Not Found")
       return res.status(400).json({msg: "Instructor Not Found"}); 
    }
})

courseR.get("/getExcercise/:CourseTitle/:InstructorName/:SubtitleNumber/:Question",async function(req,res){
    var CourseTitle = req.params.CourseTitle;
    var InstructorName = req.params.InstructorName;
    var SubtitleNumber = req.params.SubtitleNumber;
    var Question = req.params.Question;

    const excercise = await excercises.findOne({CourseTitle:CourseTitle,InstructorName:InstructorName,SubtitleNumber:SubtitleNumber,Question:Question})
    if(excercise) {
      console.log("Excercise Found")
       return res.status(200).json(excercise);
    }
    else{
      console.log("Excercise Not Found")
       return res.status(400).json({msg: "Excercise Not Found"}); 
    }

})

courseR.get("/getSubtitleAndUpdate/:SubID/:CourseID",async function(req,res){
  console.log('get subtitle hena')
    var SubID = req.params.SubID;
    var CourseID = req.params.CourseID;
    await subtitleSchema.findOneAndUpdate({_id:SubID} , {Course:CourseID})
  // if(Subtitle) {
  //   console.log("SubTitle Found Found")
  //    return res.status(200).json(Subtitle);
  // }
  // else{
  //   console.log("SubTitle Not Found")
  //    return res.status(400).json({msg: "SubTitle Not Found"}); 
  // }

})

//  courseR.get("/createCourse/:InstructorName/:Title/:Subject/:TotalHours/:Price/:VideoPreviewLink/:shortSummary/:CertificateTemplate/:Subtitles",async function(req,res){
//     var Array = []
//     var Title = req.params.Title;
//     var Subject = req.params.Subject;
//     var TotalHours = req.params.TotalHours;
//     var Price = req.params.Price;
//     var VideoPreviewLink = req.params.VideoPreviewLink;
//     var shortSummary = req.params.shortSummary;
//     var CertificateTemplate = req.params.CertificateTemplate;
//     var Subtitles = req.params.Subtitles;
//     var InstructorName = req.params.InstructorName; 
//     Array = Subtitles.split(',')
//     console.log(Array)

//     try{

//         const courseahoo = await courses.create({
//         Title: Title,
//         Subject: Subject,
//         TotalHours: TotalHours,
//         Price: Price,
//         InstructorUserName: InstructorName,
//         Subtitles: Array,
//         VideoPreviewLink: VideoPreviewLink,
//         ShortSummary: shortSummary,
//         CertificateTemplate: CertificateTemplate
//     });
//       console.log("Done ya bashaaa course ahoo")
//     return res.status(200).json({courseahoo});
//     }
//     catch(error)
//     {
//       console.log("La mesh naf3a")
//       return res.status(400).json({msg: error});
//     }        
// })

courseR.post("/createCourse",async (req,res)=>{
    var Title = req.body.Title;
    var Subject = req.body.Subject;
    var TotalHours = req.body.TotalHours;
    var Price = req.body.Price;
    var VideoPreviewLink = req.body.VideoPreviewLink;
    var shortSummary = req.body.shortSummary;
    var CertificateTemplate = req.body.CertificateTemplate;
    var Subtitles = req.body.SubtitlesArray;
    console.log("Subtitles:")
    console.log(Subtitles)
    var InstructorName = req.body.InstructorName; 
   
    try{

        const courseahoo = await courses.create({
        Title: Title,
        Subject: Subject,
        TotalHours: TotalHours,
        Price: Price,
        InstructorUserName: InstructorName,
        Subtitles: Subtitles,
        VideoPreviewLink: VideoPreviewLink,
        ShortSummary: shortSummary,
        CertificateTemplate: CertificateTemplate
    });
    console.log("Done ya bashaaa course ahoo")
    return res.status(200).json({courseahoo});
    }
    catch(error)
    {
      console.log("La mesh naf3a")
     // console.log(error)
      return res.status(400).json({msg: error});
    }        
})

courseR.get("/createSubtitle/:CourseID/:SubtitleHours/:VideoLink/:ShortVideoDescription/:Exercise/:subtitleNumber",async function(req,res){
    var SubtitleHours = req.params.SubtitleHours;
    var VideoLink = req.params.VideoLink;
    var ShortVideoDescription = req.params.ShortVideoDescription;    
    var Exercise = req.params.Exercise;
    var subtitleNumber = req.params.subtitleNumber;
    var CourseID = req.params.CourseID;
    
    try{

        const subzeft = await subtitleSchema.create({
        CourseID:CourseID,
        SubtitleHours:SubtitleHours,
        VideoLink:VideoLink,
        ShortVideoDescription:ShortVideoDescription,
        Exercise:Exercise,
        SubtitleNumber:subtitleNumber
    });
      console.log("Done ya bashaaa subtitle ahoo")
    return res.status(200).json({subzeft});
    }
    catch(error)
    {
      console.log("La mesh naf3a sub")
      console.log(error);
      return res.status(400).json({msg: error});
    }        
})



courseR.get("/createExcercise/:CourseTitle/:InstructorName/:SubtitleNumber/:Question/:Choice1/:Choice2/:Choice3/:Choice4/:MaxGrade/:CorrectAnswer",async function(req,res){
   console.log('wasalt')
    var CourseTitle = req.params.CourseTitle;
    var InstructorName = req.params.InstructorName;
    var SubtitleNumber = req.params.SubtitleNumber;    
    var Question = req.params.Question;
    var Choice1 = req.params.Choice1;
    var Choice2 = req.params.Choice2;
    var Choice3 = req.params.Choice3;
    var Choice4 = req.params.Choice4;
    var MaxGrade = req.params.MaxGrade;
    var CorrectAnswer = req.params.CorrectAnswer;
    var Choices = [Choice1,Choice2,Choice3,Choice4]
    try{

        const excercise = await exercises.create({
        CourseTitle:CourseTitle,
        InstructorName:InstructorName,
        SubtitleNumber:SubtitleNumber,
        Question:Question,
        Choices:Choices,
        MaxGrade:MaxGrade,
        CorrectAnswer:CorrectAnswer
    });
      console.log("Done ya bashaaa ex ahoo")
    return res.status(200).json({excercise});
    }
    catch(error)
    {
      console.log("La mesh naf3a Ex")
      console.log(error)
      return res.status(400).json({msg: error});
    }        
})



module.exports = courseR;