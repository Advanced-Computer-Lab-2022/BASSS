const express = require('express');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// require('mongoose-currency').loadType(mongoose);
// var Currency = mongoose.Types.Currency;

const courseSchema = new Schema ({

    Title:{
        type: String,
        required: true,
    },
    Subject:{
        type: String,
        required: true,
    },
    TotalHours:{
        type: Number,
        required: true,
    },
    Price:{
        type: Number,
        required: true,
    },
    Rating:{
        type: Number,
        min: 1,
        max: 5,
    },
    
    InstructorUserName:{
        type:String,
        required:true
    },

    Subtitles:{
        type: [[String]], //[[Subtitles.Hours , VideoLink, ShortVideoDescription, ExerciseID, %ofCourse ]]
        ///////////////////////////////////////////////////////////////////////////////////////////////////////
        required:true
    },

    Views: {
        type: Number,
        default: 0
    },
    
    VideoPreviewLink: {
        type: String,
        required:true
    },

    Reviews: {
        type: [String]
    },

    
    ShortSummary: {
        type: String,
        required: true
    },

    PromotionPercentage: {
        type: Number,
        default: 0
    },

    PromotionEndTime: {type: Number, min: 0, max:24},
    
    PromotionEndDate: {type: Date},
    
    CertificateTemplate:{
        type: String,
        required: true
    }

}, { timestamps: true });



const course = mongoose.model('course', courseSchema);
module.exports = course;
/*course.create({Title:"graphics" , Subject:"CS",TotalHours:4, Price:100 ,Rating:3, InstructorUserName:"bassel" , Subtitles:["cs101_sub1"],Views:3,
                VideoPreviewLink: "f" , Reviews:["nice"],ShortSummary:"ok ok ok",PromotionPercentage:10 , 
            CertificateTemplate:"cong" , PromotionEndTime: 12 , PromotionEndDate:'12/2/2000'},{upsert:true},function(err,doc){
    if(err) throw err;
  });*/