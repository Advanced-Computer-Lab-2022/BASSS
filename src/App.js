const express = require("express");
const mongoose = require('mongoose');
require('dotenv').config();
const guestSchema = require('./Models/guestSchema');

var bodyParser = require('body-parser')
const guestR = require('./Routes/guestRoutes');
const adminR = require('./Routes/adminRoutes');
const courses = require('./Models/courseSchema');
const instRouter = require('./Routes/instructorRoutes');
const corporateRouter = require('./Routes/corporateTraineeRoutes');
const indvidualRouter = require('./Routes/individualTraineeRoutes');

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
app.use('/guest', guestR)
app.use('/admin', adminR)
app.use('/instructor', instRouter)
app.use('/corporateTrainee', corporateRouter)
app.use('/indvidualTrainee', indvidualRouter)
