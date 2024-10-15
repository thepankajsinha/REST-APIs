const Product = require("../Models/product.model.js")

//create product function
const createProduct = async (req, res) => {
    try {
        const product = await Product.create(req.body)
        res.status(200).json(product)

    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

//get all product function
const getAllProducts = async (req, res) => {
    try {
        const product = await Product.find({})
        res.status(200).json(product)

    } catch (error) {
        res.status(500).json({message: error.message})
    }
}


//get product by ID function
const getProductByID = async (req, res) => {
    try {
        const id = req.params.id;
        const product = await Product.findById(id)
        res.status(200).json(product)

    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

//update product function
const updateProduct = async (req, res) => {
    try {
        const id = req.params.id;
        const product = await Product.findByIdAndUpdate(id, req.body)
        
        if(product === false){
            res.status(404).json({message: "Product not found"}) 
        }
        else{
            const updatedProduct = await Product.findById(id)
            res.status(200).json(updatedProduct)
        }
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

//delete product function`
const deleteProduct = async (req, res) =>{
    try {
        const id = req.params.id;
        const product = await Product.findByIdAndDelete(id, req.body)
        
        if(product === false){
            res.status(404).json({message: "Product not found"}) 
        }
        else{
            res.status(200).json({message: "Product delete successfully"})
        }
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}


module.exports ={
    createProduct,
    getAllProducts,
    getProductByID,
    updateProduct,
    deleteProduct
}