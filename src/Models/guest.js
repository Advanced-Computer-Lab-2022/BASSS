const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const guestschema = new Schema({
    Name: {
        type: String,
        required: true,
      }
})



const guest = mongoose.model('guest', guestschema);
guest.create({
    Name:"bassel"
})
module.exports = guest;