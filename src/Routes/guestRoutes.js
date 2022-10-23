const guest = require('../Models/guestSchema');
const express = require("express");
const guestR = express.Router();



guestR.route('/')


.get((req, res) => {
    res.render("../views/index.html",{title:"123"})});


module.exports = guestR;