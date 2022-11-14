const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ExerciseSchema = new Schema({
   
  Question:{
      type:String,
      required:true
  },

  Choices:{
      type:[String],
      required:true
  },

  MaxGrade:{
      type: Number,
      required: true,
  },
  CorrectAnswer:{
      type: String,
      required: true,
  }
  
}, { timestamps: true });



const exercise = mongoose.model('exercise', exerciseSchema);
module.exports = exercise;
