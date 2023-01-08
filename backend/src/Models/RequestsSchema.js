const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RequestSchema = new Schema({
    
    Reporter: {
        type: String,
        required: true
    },

    Status: {
        type:String,
        required:true,
        default:'Unseen'
    },

    CourseID:{
        type:String,
        required:true,
    },

    CourseTitle:{
        type:String,
    }
    
}, { timestamps: true });


const Request = mongoose.model('Request', RequestSchema);
module.exports = Request;