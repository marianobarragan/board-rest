require('./config/config.js')
const validator = require('validator');
const bodyParser = require('body-parser');

const express = require('express')
const app = express()

const TasksControllerFile = require('./controllers/TasksController');
const tasksController = new TasksControllerFile.TasksController()
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())


/****************************************************** */
app.get('/', function (req, res) {
  res.json('Hello World')
})
/****************************************************** */
app.get('/api/v1/tasks', (req, res) => {tasksController.getTasks(req,res)})

app.post('/api/v1/tasks', function (req, res) {
    tasksController.createTask(req,res)
})

app.put('/api/v1/tasks/:id', function (req, res) {
    tasksController.modifyTask(req,res)
})

app.delete('/api/v1/tasks/:id', function (req, res) {
    tasksController.softDeleteTask(req,res)
})

/****************************************************** */
const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/board', (err,res)=>{
    if (err) throw err;
    console.log("Connected to MongoDB: OK");
});
/****************************************************** */
app.listen(process.env.PORT, ()=>{
    console.log(`Listening to: ${process.env.PORT}`);
} );