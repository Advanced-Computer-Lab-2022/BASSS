const express = require("express");
const mongoose = require('mongoose');
require('dotenv').config();
const guestSchema = require('./Models/guestSchema');
const guestRouter = require('./Routes/guestRouter');
var bodyParser = require('body-parser')
const guestR = require('./Routes/guestRoutes');
const courses = require('./Models/courseSchema');


//App variables
const app = express();

app.use(bodyParser.urlencoded({ extended: false }))
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
app.set('view engine', 'ejs');
app.engine('ejs', require('ejs').renderFile);
app.use('/guest', guestRouter)
