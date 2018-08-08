module.exports = function(app){

    // const TasksControllerFile = require('../controllers/TasksController');
    // const tasksController = new TasksControllerFile.TasksController();    
    const TaskController = require('../controllers/TasksController')
    app.get('/', (req, res) => {res.json('Hello World')})

    app.get('/test', (req, res) => { TaskController.getTasks(req,res)})

    // ******************************************************************** //
    // Tasks
    // ******************************************************************** //
    
    app.get('/api/v1/tasks', (req, res) => {TaskController.getTasks(req,res)})

    app.post('/api/v1/tasks', (req, res) => {TaskController.createTask(req,res)})

    app.put('/api/v1/tasks/:id', (req, res) => {TaskController.modifyTask(req,res)})

    app.delete('/api/v1/tasks/:id', (req, res) => {TaskController.softDeleteTask(req,res)})

}