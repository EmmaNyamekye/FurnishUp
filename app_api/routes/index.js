// app_api/routes/index.js

const express = require('express');
const router = express.Router();
const productsController = require('../controllers/products');
const authController = require('../controllers/auth');

// Authentication routes
router.post('/register', authController.createUser);
router.post('/login', authController.loginUser);

// Product routes
router.get('/products', productsController.productsList);
router.get('/products/:id', productsController.productsFindOne);
router.post('/products', productsController.productsAdd);

module.exports = router;
