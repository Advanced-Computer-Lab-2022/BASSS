const express = require('express');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
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

 //course.create({Title:"React for react", Subject:"React", TotalHours:10, Price:911, InstructorUserName:"salama", Subtitles:[[]], 
 //VideoPreviewLink:"video link", ShortSummary:"el basha galkoo", CertificateTemplate:"edeko foo2"})

module.exports = course;
