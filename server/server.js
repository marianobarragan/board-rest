require('./config/config.js')
const validator = require('validator');
const bodyParser = require('body-parser');
const express = require('express')
const app = express()

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

app.get('/', function (req, res) {
  res.json('Hello World')
})


/*************************** */
app.get('/api/v1/tasks', function (req, res) {
    res.json('tasks')
  })

app.post('/api/v1/tasks', function (req, res) {
    let body = req.body    
    
    if (body._id === undefined){
        res.status(404).json({
            success: false,
            message: "_id not defined"
        });        
    }

    res.json({body: body})
})

// app.use(function (req, res) {
//   res.setHeader('Content-Type', 'text/plain')
//   res.write('you posted:\n')
//   res.end(JSON.stringify(req.body, null, 2))
// })


app.put('/api/v1/tasks/:id', function (req, res) {
    
    const id = req.params.id + ''
    if (validator.isInt(id) ){
        res.json({id})
    } else {
        res.status(404).json({
            success: false,
            message: "Invalid type parameter"
        });
    }
})

app.delete('/api/v1/tasks/:id', function (req, res) {
    const id = req.params.id + ''
    if (validator.isInt(id) ){
        res.json({id})
    } else {
        res.status(404).json({
            success: false,
            message: "Invalid type parameter"
        });
    }
})

/*************************** */
app.listen(process.env.PORT, ()=>{
    console.log(`listening to: ${process.env.PORT}`);
} );