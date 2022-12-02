const express = require('express');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const subtitleSchema = require('./subtitleSchema');

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
        type: [String]
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
