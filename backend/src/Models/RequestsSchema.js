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
    }
    
}, { timestamps: true });


const Request = mongoose.model('Request', RequestSchema);
module.exports = Request;