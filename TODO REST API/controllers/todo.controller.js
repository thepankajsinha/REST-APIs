const Todo = require('../models/todo.model.js');

const createTodo = async (req, res) => {
  try {
    // Extract title and description from the request body
    const { title, description } = req.body;

    // Create a new Todo and insert it into the database
    const todo = await Todo.create({ title, description });

    // Send status code and message to the client
    res.status(201).json({
      success: true,
      message: 'Todo created successfully',
      data: todo
    });
  } catch (error) {
    // Print error message
    console.log(error);

    // Send error status code and message to the client
    res.status(500).json({
      success: false,
      message: 'Internal Server Error'
    });
  }
};

const getAllTodo = async (req, res) => {
    try {
      //find all todos from the database
      const todos = await Todo.find({});

      // Send status code and message to the client
      res.status(200).json({
        success: true,
        message: 'All Todos fetched successfully',
        data: todos
      });
    } catch (error) {
      // Print error message
      console.log(error);
  
      // Send error status code and message to the client
      res.status(500).json({
        success: false,
        message: 'Internal Server Error'
      });
    }
};

const getTodoById = async (req, res) => {
    try {
      //get the todo id from the request url
      const { id } = req.params;

      //find the todo by id from the database
      const todo = await Todo.findById(id);

      // Send status code and message to the client
      res.status(200).json({
        success: true,
        message: 'Todos fetched successfully',
        data: todo
      });
    } catch (error) {
      // Print error message
      console.log(error);
  
      // Send error status code and message to the client
      res.status(500).json({
        success: false,
        message: 'Internal Server Error'
      });
    }
};

const updateTodo = async (req, res) => {
    try {
      //get the todo id from the request url
      const { id } = req.params;

      // Extract title and description from the request body
      const { completed } = req.body;
      
      // update the todo in the database
      const updatedTodo = await Todo.findByIdAndUpdate(id, { completed });

      // Send status code and message to the client
      res.status(200).json({
        success: true,
        message: 'Todo updated successfully',
        data: updatedTodo
      });
    } catch (error) {
      // Print error message
      console.log(error);
  
      // Send error status code and message to the client
      res.status(500).json({
        success: false,
        message: 'Internal Server Error'
      });
    }
};

const deleteTodo = async (req, res) => {
    try {
      //get the todo id from the request url
      const { id } = req.params;
      
      // delete the todo from the database
      const deletedTodo = await Todo.findByIdAndDelete(id);

      // Send status code and message to the client
      res.status(200).json({
        success: true,
        message: 'Todo deleted successfully',
        data: deletedTodo
      });
    } catch (error) {
      // Print error message
      console.log(error);
  
      // Send error status code and message to the client
      res.status(500).json({
        success: false,
        message: 'Internal Server Error'
      });
    }
};

module.exports = {
  createTodo,
  getAllTodo,
  getTodoById,
  updateTodo,
  deleteTodo
};
