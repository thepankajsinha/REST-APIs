const express = require('express');
const app = express();
require('dotenv').config();

const PORT = process.env.PORT || 8000

//Inbuilt middleware- It is used to read body data sent from the client
app.use(express.json());

//import routes
const todoRoutes = require('./routes/todo.routes.js');
app.use('/api', todoRoutes);

//connect to MongoDB
const dbConnect = require('./config/database.js');
dbConnect();

//start the server 8000 port
app.listen(PORT, () => { 
    console.log('Server running on port 8000');
})