const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const adminSchema = new Schema({
    UserName: {
        type: String,
        required: true,
        unique: true
    },
    
    Password: {
        type: String,
        required: true,
    },

    Reports: {
        type: [String]
    },
  
    CourseRequests: {
        type: [String],
    },

    RefundRequests: {
        type: [String],
    },



}, { timestamps: true });



const admin = mongoose.model('admin', adminSchema);
module.exports = admin;