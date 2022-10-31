const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const courses = require('./courseSchema');

const instructorschema = new Schema({
    country: {
        type: String,
        // required: true,
      },
      rating: {
        type: Number ,min:1,max:5,
      },
      reviews: {
        type: String,
        // required: true,
      },email: {
        type: String,
        // required: true,
        unique: true,
      },courses: {
        type: [mongoose.Types.ObjectId],
        ref: 'Course',
        required: true,
      },username: {
        type: String,
        // required: true,
        unique: true
      },
      password: {
        type: String,
        // required: true,
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
})

const instructors = mongoose.model('instructors', instructorschema);
/*instructor.create({
    Name:"bassel"
})*/
module.exports = instructors;
