const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const instructorschema = new Schema({
  Username: {
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

  Rating: {
    type: Number ,min:1,max:5,
    // required: true,
  },

  reviews: {
    type: [String],
    // required: true,
  },

  MiniBio: {
    type: String,
    // required: true,
  }

}, { timestamps: true });


const instructors = mongoose.model('instructors', instructorschema);
module.exports = instructors;