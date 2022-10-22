const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const corporateTraineeschema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    username: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    gender: {
        type: String,
        required: true,
    },
    country: {
        type: String,
        required: true,
    },
    problems: {
        type: String,
    },
    /**/courses: {
        type: String,
    }


})

const corporateTrainee = mongoose.model('corporateTrainee', corporateTraineeschema);

/*
corporateTrainee.create({
    Name:"bassel"
})
*/

module.exports = corporateTrainee;
