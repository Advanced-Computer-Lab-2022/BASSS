const express = require("express");
const mongoose = require('mongoose');
require('dotenv').config();
const guestS = require('./Models/guestSchema');
// const { route } = require("./Routes/guestRoutes");
var bodyParser = require('body-parser')
const guestR = require('./Routes/guestRoutes');
const adminR = require('./Routes/adminRoutes');
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
app.set('view engine', 'ejs');
app.engine('ejs', require('ejs').renderFile);

app.use('/guest', guestR)
app.use('/admin', adminR)
