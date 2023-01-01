const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const instructorschema = new Schema({
  UserName: {
    type: String,
    required: true,
    unique: true,
  },

  Email: {
    type: String,
    //required: true,
    unique: true,
  },

  Password: {
    type: String,
    required: true,
  },

  Country: {
    type: String,
    // required: true,
  },

  Wallet: {
    type: Number,
    default:0,
    required:true
  },

  courses: {
    type: [String], //[Course1.ID,Course2.ID,Course3.ID,...... ]
  },

  Reports: {
    type: [[String]], //[[Report1.ID,Type,Status,FollowUp],[Report2.ID,Type,Status,FollowUp],[Report3.ID,Type,Status,FollowUp],......]
  },

  Rating:{
    type: {rate:Number, count:Number , sum:Number},
    default: {rate:0, count:0, sum:0} 
},

  Reviews: {
    type: [String],
    // required: true,
  },

  MiniBio: {
    type: String,
    // required: true,
  }

}, { timestamps: true });




const instructors = mongoose.model('instructors', instructorschema);

// instructors.create({Username:"bassel", Password:12345, Wallet:5, courses:[], Reports:[[]], Reviews:[], Email:"beses@gmail.com", Country:"Egypt",
// Rating:5, MiniBio:"nancy agram"})

module.exports = instructors;