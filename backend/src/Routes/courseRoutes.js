const express = require("express");
const courseR = express.Router();
const mongoose = require('mongoose');
const courses = require('../Models/courseSchema')
const excercises = require('../Models/ExerciseSchema')
const instructors = require('../Models/instructorSchema')
const subtitleSchema = require('../Models/subtitleSchema')

courseR.get("/",async(req, res) => {
    const result =await courses.find({})
    res.send(result)
});



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
       return res.status(200).json({excercise});
    }
    else{
      console.log("Excercise Not Found")
       return res.status(400).json({msg: "Excercise Not Found"}); 
    }
   // res.status(200).json(users)

})

courseR.get("/createCourse/:InstructorName/:Title/:Subject/:TotalHours/:Price/:VideoPreviewLink/:shortSummary/:CertificateTemplate/:Subtitles",async function(req,res){
    
    var Title = req.params.Title;
    var Subject = req.params.Subject;
    var TotalHours = req.params.TotalHours;
    var Price = req.params.Price;
    var VideoPreviewLink = req.params.VideoPreviewLink;
    var shortSummary = req.params.shortSummary;
    var CertificateTemplate = req.params.CertificateTemplate;
    var Subtitles = req.params.Subtitles;
    var InstructorName = req.params.InstructorName; 
    
    try{

        const courseahoo = await courses.create({
        Title: Title,
        Subject: Subject,
        TotalHours: TotalHours,
        Price: Price,
        InstructorUserName: InstructorName,
        Subtitles: [],
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
        subtitleNumber:subtitleNumber
    });
      console.log("Done ya bashaaa subtitle ahoo")
    return res.status(200).json({subzeft});
    }
    catch(error)
    {
      console.log("La mesh naf3a")
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

        const excercise = await excercises.create({
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
      console.log("La mesh naf3a")
      return res.status(400).json({msg: error});
    }        
})



module.exports = courseR;




/*
FillSubtitlesArray{
subtitles=[],
    for(int i=0 ; #ofSubtitleDivs ; i++ ){
        ExcerciseID = (create excercise => retrun ExcerciseID)
        //get excercise subtitle# => return subtitle#
        subtitles[subtitle#][0] = (Hours)
        subtitles[subtitle#][1] = (Link)
        subtitles[subtitle#][2] = (Description)
        subtitles[subtitle#][3] = (ExcerciseID) 
    }
return subtitles;
}

createCourse(with values + (FillSubtitlesArray));
*/