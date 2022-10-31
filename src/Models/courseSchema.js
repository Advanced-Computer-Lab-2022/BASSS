// const express = require('express');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// require('mongoose-currency').loadType(mongoose);
// var Currency = mongoose.Types.Currency;

const courseSchema = new Schema ({

    Instructor:{
        type: String,
    },

    Title:{
        type: String,
        //required: true,
    },
    Subject:{
        type: String,
        //required: true,
    },
    TotalHours:{
        type: Number,
        //required: true,
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
    //Exercises
    //Certificate


})



var courses = mongoose.model('courses', courseSchema);
module.exports = {courses};
