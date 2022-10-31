const express = require('express');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const instructorSchema = new Schema({
    country: {
        type: String,
        //required: true,
      },
      rating: {
        type: Number ,min:1,max:5,
        //required: true,
      },
      reviews: {
        type: String,
        required: true,
      },
      email: {
        type: String,
        //required: true,
        unique: true,
      },
      username: {
        type: String,
        required: true,
        //unique: true
      },
      password: {
        type: String,
        //required: false,
      },
      miniBio: {
        type: String,
        //required: false,
      },
      gender: {
        type: String,
        //required: false,
      },
      balance: {
        type: Number,
        //required: false,
      },
      problems: {
        type: String,
        //required: false,
      },
      //courses: courseSchema
})



var instructors = mongoose.model('instructors', instructorSchema);
module.exports ={instructorSchema,instructors};

/*instructor.create({
    Name:"bassel"
})*/
