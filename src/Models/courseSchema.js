// const express = require('express');
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

//const subtitleSchema = new Schema ({
    //TotalHours:{
        //type: Number,
        //required: true
    //},
    //ShortDescription: String
    
    //Videos
//})


const courseSchema = new Schema ({
    courseID: mongoose.Types.ObjectId,

    Title:{
        type: String,
        //required: true,
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

    //Subtitles: {[mongoose.Types.ObjectId], ref:"subtitles"},


    //Subtitles: subtitleSchema
    //Instructor

    //Subtitles:{
        //type:mongoose.Types.ObjectId,
        //ref:'Subtitles'
    //},
    Instructorname:{
        type:String,
        require:true
    },
    //Instructor: {
       //type: mongoose.Types.ObjectId,
       //ref: 'Instructor',
       //required: true
    //}    
    //Exercises
    //Certificate


})


//const subtitle = mongoose.model('subtitles', subtitleSchema);
//subtitle.create({TotalHours:4,ShortDescription:"nice"})
//module.exports.subtitle;




var courses = mongoose.model('courses', courseSchema);
module.exports = {courses};


