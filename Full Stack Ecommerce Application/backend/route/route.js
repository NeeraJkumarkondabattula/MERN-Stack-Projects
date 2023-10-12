const express = require("express");
const router = express.Router();

const productController = require("../controller/productController");

//home page route
router.get("/",productController.home);
//products adding page route
router.post("/addproduct",productController.createProduct);
//products page route
router.get("/products",productController.products);
//products delete by Id page route
router.delete("/products/:id",productController.deleteProduct);
//update product route
router.put("/updateproduct/:id",productController.updateProduct);

router.put("/products/sort",productController.sortProducts);



module.exports = router;