const todomodel = require('../model/todo.model');

class TodoServices{
    static async createTodo(userId, title, description){
        const createTodo = new todomodel({userId, title, description});
        return await createTodo.save();
    }
}

module.exports = TodoServices