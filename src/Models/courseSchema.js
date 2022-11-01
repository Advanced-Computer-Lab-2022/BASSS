const express = require('express');
const mongoose = require('mongoose');
const instructor = require('./instructorSchema');
const Schema = mongoose.Schema;
const instructors= require('./instructorSchema');
// require('mongoose-currency').loadType(mongoose);
// var Currency = mongoose.Types.Currency;

// const subjectSchema = new Schema ({
//     Title: String,
//     Courses : {
//        type: [mongoose.Types.ObjectId],
//        ref: 'courses'
//     }
// })

const subtitleSchema = new Schema ({
    TotalHours:{
        type: Number,
        required: true
    },
    ShortDescription: String
    
    //Videos
})


<<<<<<< HEAD
    Instructor:{
        type: String,
        required: true,
    },
=======

const courseSchema = new Schema ({
    courseID: mongoose.Types.ObjectId,
>>>>>>> 3819f8295f8b6c49cedacaa079559368d12ebcd9
    Title:{
        type: String,
        required: true,
    },
    Subject:{
        type:String,
        required: true
    },
    TotalHours:{
        type: Number,
        required: true
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
<<<<<<< HEAD
    //Subtitles: subtitleSchema
    //Instructor
=======
    Subtitles:{
        type:mongoose.Types.ObjectId,
        ref:'Subtitles'
    },
    Instructorname:{
        type:String
    },
    Instructor: {
       type: mongoose.Types.ObjectId,
       ref: 'Instructor',
       required: true
    }    
>>>>>>> 3819f8295f8b6c49cedacaa079559368d12ebcd9
    //Exercises
    //Certificate


})
<<<<<<< HEAD

const subtitle = mongoose.model('subtitles', subtitleSchema);
//subtitle.create({TotalHours:4,ShortDescription:"nice"})
module.exports.subtitle;

const course = mongoose.model('courses', courseSchema);
//course.create({ Instructor: "salama",Title: "CSEN101", Subject: "CS",  TotalHours: 4, Price: 10,  Promotions: 4 , Views:101, Progress:3 ,  Outline: "ss" ,ShortSummary:"ss", Notes:"ss" })
module.exports = course;

=======
const course = mongoose.model('courses', courseSchema);
module.exports = course;
>>>>>>> 3819f8295f8b6c49cedacaa079559368d12ebcd9
