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
    Email: {
        type: String,
        unique: true,
      },

    Type:{
        type: String,
        required: true,
    }

}, { timestamps: true });


const user = mongoose.model('user', userSchema);
//user.create(UserName="bassel31",Password="123",Email="bassel@gmail.com",Type="Instructor");
module.exports = user;