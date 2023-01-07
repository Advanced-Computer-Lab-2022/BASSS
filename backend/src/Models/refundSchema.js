const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const refundSchema = new Schema({
    
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


const Refund = mongoose.model('Refund', refundSchema);
module.exports = Refund;