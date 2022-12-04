const express = require("express");
const exercisesR = express.Router();
const mongoose = require('mongoose');
const exercises = require('../Models/exerciseSchema')



module.exports = exercisesR;
