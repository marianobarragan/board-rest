const validator = require('validator');
const bodyParser = require('body-parser');
const TaskModel = require('../models/Tasks');

exports.getTasks = (request,response) => {
    
    response.status(200).json(TaskModel.getTasks())
}

exports.createTask = (req,res) => {
    let body = req.body    

    if (body._id === undefined){
        res.status(404).json({
            success: false,
            message: "_id not defined"
        });        
    }
    res.status(201).json({body: body})
}

exports.modifyTask = (req,res) => {
    const id = req.params.id + ''
    if (validator.isInt(id) ){
        res.status(202).json({id})
    } else {
        res.status(404).json({
            success: false,
            message: "Invalid type parameter"
        });
    }
}

exports.softDeleteTask = (req,res) => {
    const id = req.params.id + ''
    if (validator.isInt(id) ){
        res.status(202).json({id})
    } else {
        res.status(404).json({
            success: false,
            message: "Invalid type parameter"
        });
    }
}

// class TasksController{
//     getTasks(request,response) {
//         response.json('tasks')
//     }
// // app.use(function (req, res) {
// //   res.setHeader('Content-Type', 'text/plain')
// //   res.write('you posted:\n')
// //   res.end(JSON.stringify(req.body, null, 2))
// // })    
// }
// module.exports = {TasksController};