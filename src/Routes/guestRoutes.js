const { guestSchema,guests } = require("../Models/guestSchema");
const express = require("express");
const guestR = express.Router();
const mongoose = require('mongoose');


guestR.get("/",(req, res) => {
    res.render("../views/guest.ejs",{title:"guest country"})});

guestR.post("/selectcountry",function(req,res){
    // console.log(req.body)
    var country = req.body.country;
    var query = guests.find({Name:"salama"})
        query.exec(function(err,result){
            if (err) throw err;
            if(result.length==0){
                res.render("../views/guest.ejs",{title:"guest country"});
            }else{
                guests.findOneAndUpdate({Name:"salama"},{Country:country},{upsert:true},function(err,doc){
                    if(err) throw err;
                  });         
              res.render("../views/guest.ejs",{title:"guest country"});
            }
          })
    }) 


module.exports = guestR;