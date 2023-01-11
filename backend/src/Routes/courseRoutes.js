const express = require("express");
const courseR = express.Router();
const mongoose = require('mongoose');
const courses = require('../Models/courseSchema')
const excercises = require('../Models/exerciseSchema')
const instructors = require('../Models/instructorSchema')
const subtitleSchema = require('../Models/subtitleSchema')
const subtitles = require('../Models/subtitleSchema');
const exercises = require('../Models/exerciseSchema');


// courseR.get("/",async(req, res) => {
//     const result =await courses.find({})
//     return res.send(result)
// });



courseR.get("/:name",async(req, res) => {
  const instName = req.params.name;
  const result =await courses.find({InstructorUserName:instName})
  res.status(200).json(result);
});

courseR.get("/courseDetails/:courseId", async(req,res) => {
    var id = req.params.courseId;
    var result = await courses.findOne({_id:id});
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

courseR.get("/adham/getsubtitle/:courseID",async(req, res) => {
  var courseId = req.params.courseID;
  const Course =await courses.findOne({_id:courseId})
  const list = [] ;
  const result =Course.Subtitles
  const sub = await subtitles.find({_id:result})
  // for (let i = 0; i < result.length; i++) {

  // }
  res.json(sub)
});

courseR.get("/allcourses/mostviewd",async(req, res) => {
  var list =[] ;
  const result =await courses.find({})
  for (let i = 0; i < result.length; i++) {    
    if(result[i].Views>2 )
    {
       list = list.concat(result[i]);
    }
  }
  res.json(list)
});

courseR.get("/allcourses/mostViewedSara",async(req, res) => {
  try{
  console.log("sara")
  var list = await courses.find({})
  list = list.sort(function(a, b){return a.Views - b.Views});
  list = list.slice(list.length - 5)
  console.log(list)
  return res.json(list)
  }
  catch(error){
    return res.json({error})
  }
});

courseR.get("/exercise/:courseID/:subtitleID", async(req,res) => {
    const courseId = req.params.courseID;
    const subtitleId = req.params.subtitleID;
  try{
    const course = await courses.findOne({_id:courseId});
    if(!course){
      return res.status(400).json("No course found")
    }
    const subtitle = await subtitles.findOne({_id: course.Subtitles.find(element => element==subtitleId)})
    if(!subtitle){
      return res.status(400).json("No subtitle found")
    }
    const exercise = await exercises.findOne({_id: subtitle.Exercise});
    if(!exercise){
      return res.status(400).json("No exercise found")
    }


    return res.status(200).json(exercise);

  }catch(error){
    return res.status(400).json(error.message);
  }

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

courseR.get("/filter_adsa/:subject/:rate/:price",async(req, res) => {
    // res.render("../views/course.ejs",{title:"courses"})
    var subject = req.params.subject;
    var frate = req.params.rate;
    var price = req.params.price;
    var result = []
    if(subject == "empty" && frate == "empty" && price=="empty"){
     
      result = await courses.find({})
   }
   else
      if(subject == "empty" && price=="empty"){
        result =await courses.find({"Rating.rate": frate})
        
      }
     else if(frate == "empty" && price=="empty"){
        result =await courses.find({Subject:subject})
        
      }else if(frate == "empty" && subject=="empty"){
           result =await courses.find({Price:price})
      }else if (subject == "empty"){
        result =await courses.find({"Rating.rate": frate ,Price:price})
      }else if (frate == "empty"){
        result =await courses.find({Subject :subject ,Price:price})
      }else if (price == "empty"){
        result =await courses.find({"Rating.rate": frate  ,Subject :subject})
      }
      else{
        result =await courses.find({Subject:subject, "Rating.rate": frate  , Price:price})
      
      }
  
    res.status(200).json(result);
  });

  courseR.get("/:my/:name/:subject/:price",async(req, res) => {
    // res.render("../views/course.ejs",{title:"courses"})
    var name = res.locals.user;
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
    
    var name = res.locals.user;
    const user = await instructors.findOne({UserName: name })
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
    var InstructorName = res.locals.user;
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

courseR.get("/getSubtitleAndUpdate2/:CourseID",async function(req,res){
    var CourseID = req.params.CourseID;

    var SubArray = [];
    var Length = SubArray.length
    const Course = await courses.find({_id : CourseID});
    SubArray = Course.Subtitles;
    for(let i = 0; i<Length ; i++){
      var AofI = SubArray[i]
      console.log(AofI);
      await subtitleSchema.findOneAndUpdate({_id:AofI} , {Course:'637e73821194304d45a2fe5a'})

    }

  

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
    var InstructorName = res.locals.user; 
   
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
    return res.status(200).json({courseahoo});
    }
    catch(error)
    {
      return res.status(400).json({msg: error});
    }        
})

courseR.get("/createSubtitle/:SubtitleHours/:VideoLink/:ShortVideoDescription/:Exercise/:subtitleNumber",async function(req,res){
   var SubtitleHours = req.params.SubtitleHours;
    var VideoLink = req.params.VideoLink;
    var ShortVideoDescription = req.params.ShortVideoDescription;    
    var Exercise = req.params.Exercise;
    var subtitleNumber = req.params.subtitleNumber;
    //var CourseID = req.params.CourseID;
    
    try{

        const subzeft = await subtitleSchema.create({
        //CourseID:CourseID,
        SubtitleHours:SubtitleHours,
        VideoLink:VideoLink,
        ShortVideoDescription:ShortVideoDescription,
        Exercise:Exercise,
        SubtitleNumber:subtitleNumber
    });
    return res.status(200).json({subzeft});
    }
    catch(error)
    {
      return res.status(400).json({msg: error});
    }        
})



courseR.get("/createExcercise/:CourseTitle/:InstructorName/:SubtitleNumber/:Question/:Choice1/:Choice2/:Choice3/:Choice4/:MaxGrade/:CorrectAnswer",async function(req,res){
    var CourseTitle = req.params.CourseTitle;
    var InstructorName = res.locals.user;
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
    return res.status(200).json({excercise});
    }
    catch(error)
    {
      return res.status(400).json({msg: error});
    }        
})

courseR.get("/getExercisesByCourseID/:Course",async(req, res) => {
  const Course = req.params.Course

  try{
    const course1 = await courses.findOne({_id : Course})
    if(course1){
      var SubArray = [1,2]
      var Ex1 = []
      SubArray = course1.Subtitles
      var subtitles1 =[]
  
      for(let i = 0 ; i < SubArray.length ; i++){
        var Sub = await subtitleSchema.findOne({_id : SubArray[i]})
        subtitles1 = subtitles1.concat(Sub)
        Ex1 = Ex1.concat(Sub.Exercise)
      }
      return res.status(200).json({subtitles1 , Ex1});
    }
  }
  catch(error)
  {
    
    return res.status(400).json({msg: error.message});
  }       

})

module.exports = courseR;