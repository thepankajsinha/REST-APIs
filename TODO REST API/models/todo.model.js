const mongoose = require('mongoose');

//create todo schema
const todoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        maxlength: 50
    },
    description: {
        type: String,
        required: true, 
        maxlength: 200
    },
    completed: {
        type: Boolean,
        default: false
    }
}, {timestamps: true})

//create todo model
const Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;