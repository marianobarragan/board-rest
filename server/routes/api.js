module.exports = function(app){

    const TasksControllerFile = require('./../controllers/TasksController');
    const tasksController = new TasksControllerFile.TasksController()    

    app.get('/', (req, res) => {res.json('Hello World')})

    // ******************************************************************** //
    // Tasks
    // ******************************************************************** //
    
    app.get('/api/v1/tasks', (req, res) => {tasksController.getTasks(req,res)})

    app.post('/api/v1/tasks', (req, res) => {tasksController.createTask(req,res)})

    app.put('/api/v1/tasks/:id', (req, res) => {tasksController.modifyTask(req,res)})

    app.delete('/api/v1/tasks/:id', (req, res) => {tasksController.softDeleteTask(req,res)})

}