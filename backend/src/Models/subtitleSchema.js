const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const exerciseSchema = require('./exerciseSchema');

const subtitleSchema = new Schema ({
    Course:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course'
    },
    SubtitleNumber:{
        type: Number,
        required:true
    },
    SubtitleHours:{
        type:  Number,
        required: true
    },
    VideoLink: {
        type: String,
        required: true
    },
    ShortVideoDescription: {
        type: String,
        required: true
    },
    Exercise:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Exercise'
    },


})


const subtitle = mongoose.model('subtitle', subtitleSchema);
module.exports = subtitle;