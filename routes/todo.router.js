const TodoController = require('../controller/todo.controller');
const router = require('express').Router();

router.post("/storeTodo", TodoController.createTodo);
// router.post("/getUserTodoList", UserController.register);
// router.post("/deleteTodo", UserController.register);

module.exports = router;