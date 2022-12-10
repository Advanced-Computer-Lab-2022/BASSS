const express = require("express");
const mongoose = require('mongoose');
require('dotenv').config();
var bodyParser = require('body-parser');
const adminR = require('./Routes/adminRoutes');
const instructorR = require('./Routes/instructorRoutes');
const individualTraineeR = require('./Routes/individualTraineeRoutes');
const corporateTraineeR = require('./Routes/corporateTraineeRoutes');
const courseR = require('./Routes/courseRoutes');
const exerciseR = require('./Routes/exercisesRoutes');
const reportR = require('./Routes/reportRoutes');
const requestsR = require('./Routes/requestsRoutes');

const nodemailer = require('nodemailer');
const cors = require('cors');
const guestR = require("./Routes/guestRoutes");

const app = express();
app.use(express.json());

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


app.use(cors())
app.set('view engine', 'ejs');
app.engine('ejs', require('ejs').renderFile);
app.use('/instructor', instructorR)
app.use('/individualTrainee', individualTraineeR)
app.use('/corporateTrainee', corporateTraineeR)
app.use('/course', courseR)
app.use('/exercises', exerciseR)
app.use('/admin', adminR)
app.use('/report', reportR)
app.use('/request', requestsR)
app.use('/guest', guestR)