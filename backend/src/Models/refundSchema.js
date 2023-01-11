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
    },

    AmountPaid:{
        type:Number,
        required:true,
    } 
    
}, { timestamps: true });


const Refund = mongoose.model('Refund', refundSchema);
module.exports = Refund;