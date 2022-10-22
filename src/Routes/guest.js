const guest = require('../Models/guest');
const express = require("express");
const guestR = express.Router();



guestR.route('/')


.get(async(req, res) => {
    res.send(await(guest.find()))});


module.exports = guestR;