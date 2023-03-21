const express = require('express');
const app = express();
const cors = require('cors')
const cookieParser = require('cookie-parser')
require('./config/mongoose.config');
require('dotenv').config();
app.use(cookieParser())
app.use(cors({credentials:true, origin:'http://localhost:3000'}))
app.use(express.json(), express.urlencoded({ extended: true }));



// DONT FORGET TO ADD ROUTE REQUIRE
require('./routes/user.routes')(app);
require('./routes/dog.routes')(app);
require('./routes/reservations.routes')(app);




app.listen(8000, () => {
    console.log("Listening at Port 8000")
})

