const TaskController = require('../controllers/TasksController')

module.exports = (app) => {

    app.get('/', (req, res) => {res.json('Hello Test')})
    app.get('/test', (req, res) => {res.json(process.env)})

    // ******************************************************************** //
    // Tasks
    // ******************************************************************** //
    
    // app.get('/api/v1/tasks/:id', (req, res) => {res.status(200).json(tasks["to-do"].tasks[0])})

    app.get('/api/v1/tasks', (req, res) => {TaskController.getTasks(req,res)})

    app.post('/api/v1/tasks', (req, res) => {TaskController.createTask(req,res)})

    app.put('/api/v1/tasks/:id', (req, res) => {TaskController.modifyTask(req,res)})

    app.delete('/api/v1/tasks/:id', (req, res) => {TaskController.softDeleteTask(req,res)})

}