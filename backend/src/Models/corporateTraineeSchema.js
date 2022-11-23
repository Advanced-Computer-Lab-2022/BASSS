const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const corporateTraineeschema = new Schema({
    
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

    courses: {
        type: [[String]], //[[Course1.ID,Progress%],[Course2.ID,Progress%],[Course3.ID,Progress%],...... ]
    },
    
    Exercises: {
        type: [[String]], //[[Ex1.ID,MyAnswer,MyGrade],[Ex2.ID,MyAnswer,MyGrade],[Ex3.ID,MyAnswer,MyGrade],......]
    },

    Certificates: {
        type: [String], //[Certificates1,Certificates2,Certificates3,......]
    },
    
    Notes: {
        type: [String], //[Note1,Note2,Note3,......]
    },

    Reports: {
        type: [[String]], //[[Report1.ID,Type,Status,FollowUp],[Report2.ID,Type,Status,FollowUp],[Report3.ID,Type,Status,FollowUp],......]
    },

    courseRequests: {
        type: [[String]], //[[Course1.ID,Status],[Course2.ID,Status],[Course3.ID,Status],...... ]
    }


}, { timestamps: true });


const corporateTrainee = mongoose.model('corporateTrainee', corporateTraineeschema);
module.exports = corporateTrainee;
