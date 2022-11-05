const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const adminSchema = new Schema({
    Name: {
        type: String,
        required: true,
        unique: true
      },
    Country: {
        type: String,
        required: true,
      },
    Password: {
        type: String,
        required: true,
      },
    Gender: {
        type: String,
        required: true,
      },
    requests: {
        type: String,
      },
       Email: {
        type: String,
        required: true,
        unique: true
      },
})



const admin = mongoose.model('admin', adminSchema);
module.exports = admin;