const express = require("express");
const mongoose = require('mongoose');
require('dotenv').config();

//const guestS = require('./Models/guestSchema');
// const { route } = require("./Routes/guestRoutes");

const guestSchema = require('./Models/guestSchema');


var bodyParser = require('body-parser')
const guestR = require('./Routes/guestRoutes');
const instructorR = require('./Routes/instructorRoutes');
// const index = require('./views/index.ejs');
const indvidualRouter = require('./Routes/individualTraineeRoutes');
const corporateRouter = require('./Routes/corporateTraineeRoutes');
const courseR = require('./Routes/courseRoutes');
const adminR = require('./Routes/adminRoutes');
const courses = require('./Models/courseSchema');

// const index = require('./views/index.ejs');

// const instRouter = require('./Routes/instructorRoutes');
// const corporateRouter = require('./Routes/corporateTraineeRoutes');
// const indvidualRouter = require('./Routes/individualTraineeRoutes');

//App variables
const app = express();
//const courseS = require('./Models/courseSchema');
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


app.use('/instructor', instructorR)
app.use('/guest', guestR)
app.use('/course', courseR)
app.use('/admin', adminR)
app.use('/corporateTrainee', corporateRouter)
app.use('/indvidualTrainee', indvidualRouter)

