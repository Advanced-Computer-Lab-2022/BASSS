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

    Instructor:{
        type: String,
        required: true,
    },
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
    //Subtitles: subtitleSchema
    //Instructor
    //Exercises
    //Certificate


})

const subtitle = mongoose.model('subtitles', subtitleSchema);
//subtitle.create({TotalHours:4,ShortDescription:"nice"})
module.exports.subtitle;

const course = mongoose.model('courses', courseSchema);
//course.create({ Instructor: "salama",Title: "CSEN101", Subject: "CS",  TotalHours: 4, Price: 10,  Promotions: 4 , Views:101, Progress:3 ,  Outline: "ss" ,ShortSummary:"ss", Notes:"ss" })
module.exports = course;

