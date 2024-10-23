const mongoose = require('mongoose');
require('dotenv').config();

// Connect to MongoDB
const dbConnect = () => {
    const MONGODB_URL = process.env.MONGODB_URL;
    mongoose.connect(MONGODB_URL)
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Failed to connect to MongoDB', err));
 }

 module.exports = dbConnect;