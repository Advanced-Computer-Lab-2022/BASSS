const express = require('express');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const courses = require('./courseSchema');


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
        // required: true,
      },email: {
        type: String,
        // required: true,
        unique: true,
      },courses: {
        type: [mongoose.Types.ObjectId],
        ref: 'Course',
        required: true,
      },miniBio: {
        type: String,
        // required: true,
      },gender: {
        type: String,
        // required: true,
      },balance: {
        type: Number,
        // required: false,
      },problems: {
        type: String,
        // required: false,
      },
      //courses: courseSchema
})



/*instructor.create({
    Name:"bassel"
})*/
const instructors = mongoose.model('instructors', instructorSchema);
/*instructor.create({
    Name:"bassel"
})*/
module.exports = instructors;
