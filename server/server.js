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

require('./routes/api.js')(app);

/****************************************************** */
const mongoose = require('mongoose');
mongoose.connect(`mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`, (err,res)=>{
    if (err){
        throw err;
    } else {
        console.log("Connected to MongoDB: OK");
    }
});
/****************************************************** */
app.listen(process.env.PORT, ()=>{
    console.log(`Listening to: ${process.env.PORT}`);
} );
