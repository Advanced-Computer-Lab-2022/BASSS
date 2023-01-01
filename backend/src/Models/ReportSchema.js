const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ReportSchema = new Schema({
    Reporter: {
        type: String,
        required: true
    },

    CourseID:{
        type:String,
        required:true,
    },

    CourseTitle:{
        type:String,
    },

    Status:{
        type:String,
        required:true,
        default:'Unseen'
    },

    Type:{
        type:String,
        required:true
    },

    Comment:{
        type:String,
        default:''
    },

    ResolvedMessage:{
        type:String,
    },

    PendingMessage:{
        type:String,
    },

    FollowUps:{
        type: [{
            Message:String,
            Date:String,
            Time:String
        }], //[{Course1.ID,Status},{Course2.ID,Status},{Course3.ID,Status},...... ]
    }
    
}, { timestamps: true });


const Report = mongoose.model('Report', ReportSchema);
module.exports = Report;