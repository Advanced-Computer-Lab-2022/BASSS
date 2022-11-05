const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const problemSchema = new Schema({
    Status: {
        type: String,
        required: true,
      }
})



const problem = mongoose.model('problem', problemSchema);
module.exports = problem;