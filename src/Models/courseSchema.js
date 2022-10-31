const express = require('express');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// require('mongoose-currency').loadType(mongoose);
// var Currency = mongoose.Types.Currency;


const subtitleSchema = new Schema ({
    TotalHours:{
        type: Number,
        required: true
    },
    ShortDescription: String
    
    //Videos
})

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
    Promotions: Number,
    Views: Number,
    Progress:Number,  
    Outline: String,
    ShortSummary: String,
    Notes: String,
    Subtitles:{
        type:mongoose.Types.ObjectId,
        ref:'Subtitles'
    },
    Instructor:{
        type:mongoose.Types.ObjectId,
        ref:'Instructor',

    },
    Instructorname:{
        type:String
    }

    //Exercises
    //Certificate


})

const course = mongoose.model('courses', courseSchema);
module.exports = course;
