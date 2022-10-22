const express = require("express");
const mongoose = require('mongoose');
require('dotenv').config();
const guestM = require('./Models/guest');

const guestR = require('./Routes/guest');


//App variables
const app = express();
const port = process.env.PORT || "9000";


mongoose.connect(process.env.mongoURl)
.then(()=>{
  console.log("MongoDB is now connected!")
// Starting server
 app.listen(port, () => {
    console.log(`Listening to requests on http://localhost:${port}`);
  })
})
.catch(err => console.log(err));

app.use('/guest', guestR)