const express = require('express');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const guestSchema = new Schema({
    Name: {
        type: String,
        required: true,
        unique: true,
      },
    Country: {
        type: String,
        required: true,
      },
    Password: {
        type: String,
        required: true,
      },
    Gender: {
        type: String,
        required: true,
      }
      
})

const guests = mongoose.model('guests', guestSchema);
module.exports = guests