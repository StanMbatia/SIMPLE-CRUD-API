const express = require('express');
const Product = require('../models/products.model');
const router= express.Router();
const {getProducts, getProduct, createProduct, updateProduct, deleteProduct}= require('../controllers/product.controller');


router.get('/', getProducts);
router.get('/', getProduct);

router.post('/', createProduct);


//update a product
router.put('/:id', updateProduct);

// delete a product
router.delete('/:id', deleteProduct);


module.exports= router;
