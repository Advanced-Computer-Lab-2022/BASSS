const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const individualTraineeschema = new Schema({
    email: {
        type: String,
        // required: true,
        unique: true,
    },
    username: {
        type: String,
        // required: true,
        unique: true,
    },
    password: {
        type: String,
        // required: true,
    },
    gender: {
        type: String,
        // required: true,
    },
    country: {
        type: String,
        // required: true,
    },
    balance: {
        type: Number,
    },
    problems: {
        type: String,
    },
    /**/courses: {
        type: String,
    }


})

const individualTrainees = mongoose.model('individualTrainees', individualTraineeschema);
module.exports = individualTrainees;