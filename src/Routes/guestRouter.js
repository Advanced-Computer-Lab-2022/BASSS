const guest = require('../Models/guestSchema');
const express = require("express");
const guestRouter = express.Router();



guestRouter.route('/')


.get(async(req, res) => {
    res.send(await(guest.find()))});


module.exports = guestRouter;