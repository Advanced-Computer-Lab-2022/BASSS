const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//{[Subtitles.Hours , VideoLink, ShortVideoDescription, ExerciseID, %ofCourse ]]
const subtitleSchema = new Schema ({
    CourseID:{
        type:String,
        required: true
    },
    SubtitleHours:{
        type: Number,
        required: true
    },
    VideoLink :{
        type: String,
        required: true
    },
    ShortVideoDescription:{
        type: String,
        required: true
    },
    Exercise: {type :String},
    subtitleNumber:{
        type :Number,
        required: true
    }

    

})


const subtitle = mongoose.model('subtitle', subtitleSchema);
module.exports = subtitle;