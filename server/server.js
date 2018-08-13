require('./config/config.js')
require('dotenv').config({path: './.env'})

const validator = require('validator');
const bodyParser = require('body-parser');
const express = require('express')
const app = express()

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

require('./middleware/headers.js')(app);
require('./routes/api.js')(app);
/****************************************************** */
// var cors = require('cors');
// app.use(cors({origin: 'localhost:3000'}))
/****************************************************** */
const mongoose = require('mongoose');
mongoose.connect(`mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`,{ useNewUrlParser: true }, (err,res)=>{
    if (err) throw err;
    console.log("Connected to MongoDB: OK");
});
/****************************************************** */
app.listen(process.env.PORT, () => {
    console.log(`Listening to: ${process.env.PORT}`);
    //console.log(process.env);
} );
