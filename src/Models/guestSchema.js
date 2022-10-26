const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const guestSchema = new Schema({
    Name: {
        type: String,
        required: true,
      }
})



const guest = mongoose.model('guest', guestSchema);
guest.create({
    Name:"bassel"
})
module.exports = guest;