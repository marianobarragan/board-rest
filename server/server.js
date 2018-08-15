require('./config/config.js')
require('dotenv').config({path: './.env'})


const express = require('express')
const app = express()

const validator = require('validator');
const bodyParser = require('body-parser');
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

// Load middleware
require('./middleware/loader.js')(app);

// Load routes
require('./routes/api.js')(app);

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
