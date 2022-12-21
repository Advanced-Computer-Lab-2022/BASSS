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
const guestR = require("./Routes/guestRoutes");

const nodemailer = require('nodemailer');
const cors = require('cors');

const { requireAuth, typeAuth } = require('./Authenticator/authenticator');
const {login, signup, logout, search}= require('./Routes/commonRoutes')

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

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

//common routes
app.post('/signup', signup);
app.post('/login', login)
app.get('/logout',typeAuth, logout);
app.get('/search/:searchkey', search)

app.use('/instructor',typeAuth,instructorR)
app.use('/individualTrainee', individualTraineeR)
app.use('/corporateTrainee', corporateTraineeR)
app.use('/course', courseR)
app.use('/exercises', exerciseR)
app.use('/admin', adminR)
app.use('/report', reportR)
app.use('/request', requestsR)
// app.use('/guest', guestR)