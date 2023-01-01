const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const corporateTraineeschema = new Schema({
    
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

    courses: {
        type: [{Course:mongoose.Schema.Types.ObjectId, Progress:Number, DateEnrolled:String }], //[[Course1.ID,Progress%],[Course2.ID,Progress%],[Course3.ID,Progress%],...... ]
    },

    AccessibleCourses:{
        type: [mongoose.Schema.Types.ObjectId], //[[Course1.ID,Course2.ID,,Course3.ID,...... ]
    },
    
    Exercises: {
        type: [{Subtitle: mongoose.Schema.Types.ObjectId, MyAnswer: String, MyGrade:String}], //[[Ex1.ID,MyAnswer,MyGrade],[Ex2.ID,MyAnswer,MyGrade],[Ex3.ID,MyAnswer,MyGrade],......]
    },

    Certificates: {
        type: [{
            Certificates:String,
            CourseID:String
        }], //[Certificates1,Certificates2,Certificates3,......]
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

    courseRequests: {
        type: [String], //[Request1 ID,Request2 ID,Request3 ID,...... ]
    },
    
    Reviews: {
        type: [{
            InstructorID:String,
            Review:String
        }],
        required: true,
        default: []
    },

    FirstLogin: {
        type: Boolean,
        default: true
    }

}, { timestamps: true });


const corporateTrainee = mongoose.model('corporateTrainee', corporateTraineeschema);
// corporateTrainee.create({Username:'nour',Email:'nour@gmail.com',
// Country:'germany',Password:'123',courses:[['637e73821194304d45a2fe5a','50%'],['6383a008cf44823c1f52d63a','20%']]})
module.exports = corporateTrainee;
