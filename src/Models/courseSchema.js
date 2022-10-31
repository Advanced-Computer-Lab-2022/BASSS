// const express = require('express');
const mongoose = require('mongoose');
const instructor = require('./instructorSchema');
const Schema = mongoose.Schema;
const instructors= require('./instructorSchema');
// require('mongoose-currency').loadType(mongoose);
// var Currency = mongoose.Types.Currency;

<<<<<<< HEAD
const courseSchema = new Schema ({

    Instructor:{
        type: String,
    },

=======
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
>>>>>>> 327565635577ab09c1273dcc871baed92548ff1b
    Title:{
        type: String,
        //required: true,
    },
    Subject:{
<<<<<<< HEAD
        type: String,
        //required: true,
    },
    TotalHours:{
        type: Number,
        //required: true,
=======
        type:String,
        required: true
    },
    TotalHours:{
        type: Number,
        required: true
>>>>>>> 327565635577ab09c1273dcc871baed92548ff1b
    },
    Price:{
        type: Number,
        //required: true,
    },
    Rating:{
        type: Number,
        min: 1,
        max: 5,
    },
    Subtitles:{
        TotalHours:{
            type:Number,
        },
        ShortDescription:{
            type: String,
        }
        //videos
    },

    Promotions: Number,
    Views: Number,
    Progress:Number,  
    Outline: String,
    ShortSummary: String,
    Notes: String,
<<<<<<< HEAD
    //Subtitles: {[mongoose.Types.ObjectId], ref:"subtitles"},
=======
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
>>>>>>> 327565635577ab09c1273dcc871baed92548ff1b
    //Exercises
    //Certificate


})
<<<<<<< HEAD

const subtitle = mongoose.model('subtitles', subtitleSchema);
//subtitle.create({TotalHours:4,ShortDescription:"nice"})
module.exports.subtitle;

<<<<<<< HEAD


var courses = mongoose.model('courses', courseSchema);
module.exports = {courses};
=======
const course = mongoose.model('courses', courseSchema);
//course.create({ Instructor: "salama",Title: "CSEN101", Subject: "CS",  TotalHours: 4, Price: 10,  Promotions: 4 , Views:101, Progress:3 ,  Outline: "ss" ,ShortSummary:"ss", Notes:"ss" })
module.exports = course;

=======
const course = mongoose.model('courses', courseSchema);
module.exports = course;
>>>>>>> 3819f8295f8b6c49cedacaa079559368d12ebcd9
>>>>>>> 327565635577ab09c1273dcc871baed92548ff1b
