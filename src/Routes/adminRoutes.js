const admin = require('../Models/adminSchema');
const express = require("express");
const adminR = express.Router();



adminR.route('/')

app.get("/" ,function(req,res){
    res.render("index",{message:"",title:"login"});
  });
module.exports = guestR;