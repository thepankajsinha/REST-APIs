const express = require('express');
const { createTodo , getAllTodo, getTodoById, updateTodo, deleteTodo } = require('../controllers/todo.controller.js');
const router = express.Router();

// all api routes
router.post('/createTodo', createTodo)
router.get('/getAllTodo', getAllTodo)
router.get('/getTodo/:id', getTodoById)
router.put('/updateTodo/:id', updateTodo)
router.delete('/deleteTodo/:id', deleteTodo)

module.exports = router;