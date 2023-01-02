const express = require('express');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const subtitleSchema = require('./subtitleSchema');
const subtitlesSchema = require('./subtitleSchema');

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

    PromotedPrice:{
        type: Number
    },

    // Ratings:{
    //     type:[Number]
    // },

    Rating:{
        type: {rate:Number, count:Number , sum:Number},
        default: {rate:0, count:0, sum:0} 
    },
    
    InstructorUserName:{
        type:String,
        required:true
    },

    Subtitles:{
        type: [mongoose.Schema.Types.ObjectId],
        ref : 'Subtitle'
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

    PromotionState:{
        type: String,
        default: 'Undefined'
    },

    PromotionPercentage: {
        type: Number, min: 0, max:100,
        default: 0
    },
    PromotionStartTime: {type: Number, min: 0, max:23},

    PromotionEndTime: {type: Number, min: 0, max:23},
    
    PromotionStartDate: {type: Date},  // Format: YEAR-MONTH-DAY
    
    PromotionEndDate: {type: Date},  // Format: YEAR-MONTH-DAY
        
    CertificateTemplate:{
        type: String,
        required: true
    },

    Enrolled:{
        type: Number,
        required: true,
        default: 0
    }

}, { timestamps: true });


const course = mongoose.model('course', courseSchema);

 //course.create({Title:"React for react", Subject:"React", TotalHours:10, Price:911, InstructorUserName:"salama", Subtitles:[[]], 
 //VideoPreviewLink:"video link", ShortSummary:"el basha galkoo", CertificateTemplate:"edeko foo2"})

module.exports = course;
