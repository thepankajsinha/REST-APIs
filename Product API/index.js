const express = require('express')
const mongoose = require("mongoose");
const productRoutes = require("./Routes/product.route.js")
const Product = require("./Models/product.model.js");

//creating constant
const PORT = 8000;
const MONGO_DB_URL = "mongodb+srv://askpankajsinha:mnr6mYnZf22uM3hU@cluster0.dbvib.mongodb.net/";


//server is created
const app = express()


//middlewares
app.use(express.json())  //it is use to get user input in json
app.use(express.urlencoded({extended: true})) //it is use to get user input as form


//product routes
app.use("/api/product", productRoutes)


//conncet database
mongoose.connect(MONGO_DB_URL)
.then(() => console.log("Database connected"))
.catch(() => console.log("Connection Failed !!"))


//Listen a server
app.listen(PORT, () => {
    console.log("Server is connected")
});
