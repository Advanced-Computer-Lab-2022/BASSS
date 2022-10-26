const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
    Grade: {
        type: Number,
        required: true,
      },
      Answers: {
        type: String,
        required: true,
      },
      CorrectAnswers: {
        type: String,
        required: true,
      }
})



const exercise = mongoose.model('exercise', exerciseSchema);
module.exports = exercise;