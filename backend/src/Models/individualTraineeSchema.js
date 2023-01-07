const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const individualTraineeschema = new Schema({
    UserName: {
        type: String,
        required: true,
        unique: true,
    },

    FirstName: {
      type: String,
      required: true,
    },
  
    LastName: {
      type: String,
      required: true,
    },

    Email: {
      type: String,
      required: true,
    },

    Country: {
        type: String,
        required: true,
        default: 'United States'
    },

    Password: {
        type: String,
        required: true,
    },

    Gender: {
        type: String,
        required: true,
    },

    CreditCardsInfo: {
       type: [{CardNumber:Number , ExpMonth: Number, ExpYear:Number, CVC:Number}]
    },

    Wallet: {
        type: Number,
        default:0,
        required:true
    },

    Courses: {
         //DateEnrolled String for now la7ad manshoof hayeb2a enrolled date ezay fel a3'lab hateb2a Date type//
        type: [{Course:mongoose.Schema.Types.ObjectId, Progress:Number, PayedAmount:Number, DateEnrolled:String}] 
        // type: [[String]], //[[Course1.ID,Progress%],[Course2.ID,Progress%],[Course3.ID,Progress%],...... ]
    },
    
    Exercises: {
        type: [{Subtitle: mongoose.Schema.Types.ObjectId, MyAnswer: String, MyGrade:String}]
        // type: [[String]], //[[Ex1.ID,MyAnswer,MyGrade],[Ex2.ID,MyAnswer,MyGrade],[Ex3.ID,MyAnswer,MyGrade],......]
    },

    Certificates: {
        type: [String], //[Certificates1,Certificates2,Certificates3,......]
    },
    
    Notes: {
        type: [{
            Note:String,
            SubtitleID:String
        }], //[Note1,Note2,Note3,......]
    },

    Reports: {
        type: [String], // ReportID
    },

    RefundRequests: {
        type: [{
            CourseID:String,
            Status:String
        }], //[{Course1.ID,Status},{Course2.ID,Status},{Course3.ID,Status},...... ]
        required: true,
        default: []
    },
    Reviews: {
        type: [{
            InstructorID:String,
            Review:String
        }],
        required: true,
        default: []
    }



}, { timestamps: true });


const individualTrainees = mongoose.model('individualTrainees', individualTraineeschema);
module.exports = individualTrainees;