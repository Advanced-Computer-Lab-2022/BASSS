const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    UserName: {
        type: String,
        required: true,
        unique: true,
    },

    Password: {
        type: String,
        required: true,
    },

    Type:{
        type: String,
        required: true,
    }

}, { timestamps: true });


const user = mongoose.model('user', userSchema);
module.exports = user;