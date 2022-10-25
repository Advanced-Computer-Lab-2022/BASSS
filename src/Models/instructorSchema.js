const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const instructorschema = new Schema({
    country: {
        type: String,
        required: true,
      },
      rating: {
        type: Number ,min:1,max:5,
        required: true,
      },
      reviews: {
        type: String,
        required: true,
      },email: {
        type: String,
        required: true,
        unique: true,
      },courses: {
       /**/ type: String,
        required: true,
      },username: {
        type: String,
        required: true,
        unique: true
      },
      password: {
        type: String,
        required: true,
      },miniBio: {
        type: String,
        required: true,
      },gender: {
        type: String,
        required: true,
      },balance: {
        type: Number,
        required: false,
      },problems: {
        type: String,
        required: false,
      },
})



const instructor = mongoose.model('instructor', instructorschema);
/*instructor.create({
    Name:"bassel"
})*/
module.exports = instructor;