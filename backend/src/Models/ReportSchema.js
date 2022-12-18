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

    Status:{
        type:String,
        required:true,
        default:'Unseen'
    },

    Type:{
        type:String,
        required:true
    }
    
}, { timestamps: true });


const Report = mongoose.model('Report', ReportSchema);
module.exports = Report;