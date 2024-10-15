const express = require("express")
const router = express.Router();
const {createProduct, getAllProducts, getProductByID, updateProduct, deleteProduct} = require("../Controllers/product.controller.js")

//get product
router.get("/", getAllProducts)
router.get("/:id", getProductByID)

//create product
router.post("/", createProduct)

//update product
router.put("/:id", updateProduct)

//delete product
router.delete("/:id", deleteProduct)


//export route
module.exports = router;