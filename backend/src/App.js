const express = require("express");
const mongoose = require('mongoose');
require('dotenv').config();

// const guestS = require('./Models/guestSchema');
// const { route } = require("./Routes/guestRoutes");
var bodyParser = require('body-parser')
const guestR = require('./Routes/guestRoutes');
const instructorR = require('./Routes/instructorRoutes');
const individualTraineeR = require('./Routes/individualTraineeRoutes');
const corporateTraineeR = require('./Routes/corporateTraineeRoutes');
const courseR = require('./Routes/courseRoutes');
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
app.use('/guest', guestR)
app.use('/instructor', instructorR)
app.use('/individualTrainee', individualTraineeR)
app.use('/corporateTrainee', corporateTraineeR)
app.use('/course', courseR);


