const express = require("express");
const mongoose = require('mongoose');
require('dotenv').config();
//const guestS = require('./Models/guestSchema');
// const { route } = require("./Routes/guestRoutes");
var bodyParser = require('body-parser')
const adminR = require('./Routes/adminRoutes');
const instructorR = require('./Routes/instructorRoutes');
const individualTraineeR = require('./Routes/individualTraineeRoutes');
const corporateTraineeR = require('./Routes/corporateTraineeRoutes');
const courseR = require('./Routes/courseRoutes');
const exerciseR = require('./Routes/exercisesRoutes');
const reportR = require('./Routes/ReportRoutes');
const requestsR = require('./Routes/RequestsRoutes');
var nodemailer = require('nodemailer');

// var transporter = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     user: 'acltest321@gmail.com',
//     pass: 'yzdnccfnpqvmwpgr'
//   }
// });

// var mailOptions = {
//   from: 'acltest321@gmail.com',
//   to: 'basselbassel28@gmail.com',
//   subject: 'Sending Email using Node.js',
//   text: 'To reset your password please click hereeeeeeeee , http://localhost:3000/instructor/myInfo'
// };

// transporter.sendMail(mailOptions, function(error, info){
//   if (error) {
//     console.log(error);
//   } else {
//     console.log('Email sent: ' + info.response);
//   }
// });

const cors = require('cors')
// const index = require('./views/index.ejs');

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



