const Task = require('../models/Task')

module.exports = class TaskController {
  //por estar invocando os models sem instanciar um objeto, cria-se o controller static 
  static createTask(req, res) {
    res.render('tasks/create')
  }
}
