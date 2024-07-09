const TodoServices = require('../services/todo.services');

exports.createTodo = async (req, res, next) => {
    try{
        const {userId, title, description} = req.body;

        let todo = await TodoServices.createTodo(userId, title, description);

        res.json({
            status: true,
            success: todo
        })
        
    }catch (err){
        throw err
    }
}