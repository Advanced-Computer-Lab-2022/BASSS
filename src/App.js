const express = require("express");
const mongoose = require('mongoose');
require('dotenv').config();
//const guestS = require('./Models/guestSchema');
// const { route } = require("./Routes/guestRoutes");
var bodyParser = require('body-parser')
const guestR = require('./Routes/guestRoutes');
// const index = require('./views/index.ejs');
const url = "mongodb+srv://basss:Basss12345@cluster0.khvliyt.mongodb.net/BASSS?retryWrites=true&w=majority"
//App variables
const app = express();
//const courseS = require('./Models/courseSchema');
const instructorR = require('./Routes/instructorRoutes');
app.use(bodyParser.urlencoded({ extended: false }))
const port = process.env.PORT || "9000";


mongoose.connect(url)
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

app.use('/instructor', instructorR)
app.use('/guest', guestR)
