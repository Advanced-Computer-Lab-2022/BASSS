const express = require('express');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const subtitleSchema = new Schema ({
    TotalHours:{
        type: Number,
        //required: true
    },
    ShortDescription: String
    
    //Videos
})

var subtitles = mongoose.model('subtitles', subtitleSchema);
module.exports = subtitles;