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
        type: [mongoose.Types.ObjectId],
        ref: 'courses'
    }


})

const corporateTrainee = mongoose.model('corporateTrainee', corporateTraineeschema);
//module.exports = corporateTrainee;
module.exports ={corporateTraineeschema,corporateTrainee};