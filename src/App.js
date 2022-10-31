const express = require("express");
const mongoose = require('mongoose');
require('dotenv').config();
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 327565635577ab09c1273dcc871baed92548ff1b
//const guestS = require('./Models/guestSchema');
// const { route } = require("./Routes/guestRoutes");
=======
const guestSchema = require('./Models/guestSchema');

>>>>>>> 3819f8295f8b6c49cedacaa079559368d12ebcd9
var bodyParser = require('body-parser')
const guestR = require('./Routes/guestRoutes');
<<<<<<< HEAD
const instructorR = require('./Routes/instructorRoutes');
// const index = require('./views/index.ejs');
=======
const instRouter = require('./Routes/instructorRoutes');
const indvidualRouter = require('./Routes/individualTraineeRoutes');
const corporateRouter = require('./Routes/corporateTraineeRoutes');
const courseR = require('./Routes/courseRoutes');
const adminR = require('./Routes/adminRoutes');
const courses = require('./Models/courseSchema');
>>>>>>> 327565635577ab09c1273dcc871baed92548ff1b

// const index = require('./views/index.ejs');
<<<<<<< HEAD
const url = "mongodb+srv://basss:Basss12345@cluster0.khvliyt.mongodb.net/BASSS?retryWrites=true&w=majority"
=======
// const instRouter = require('./Routes/instructorRoutes');
// const corporateRouter = require('./Routes/corporateTraineeRoutes');
// const indvidualRouter = require('./Routes/individualTraineeRoutes');

>>>>>>> 3819f8295f8b6c49cedacaa079559368d12ebcd9
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
<<<<<<< HEAD

app.use('/instructor', instructorR)
<<<<<<< HEAD
=======
=======
>>>>>>> 3819f8295f8b6c49cedacaa079559368d12ebcd9
app.use('/guest', guestR)
app.use('/course', courseR)
app.use('/admin', adminR)
app.use('/instructor', instRouter)
app.use('/corporateTrainee', corporateRouter)
app.use('/indvidualTrainee', indvidualRouter)
>>>>>>> 327565635577ab09c1273dcc871baed92548ff1b
