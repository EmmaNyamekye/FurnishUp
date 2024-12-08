// app_api/controllers/products.js

const mongoose = require('mongoose');
const Product = mongoose.model('Product');

// Get all products
const productsList = function (req, res) {
    Product
        .find()
        .then((products) => {
            console.log('Here');
            if (!products || products.length === 0) {
                return res.status(404).json({ message: "No products available" });
            }
            res.status(200).json(products);
        })
        .catch((err) => res.status(500).json({ error: err.message }));
};

// Get a single product by ID
const productsFindOne = function (req, res) {
    if (req.params && req.params.id) {
        Product
            .findById(req.params.id)
            .then((product) => {
                if (!product) {
                    return res.status(404).json({ message: "Product not found" });
                }
                res.status(200).json(product);
            })
            .catch((err) => res.status(500).json({ error: err.message }));
    } else {
        res.status(400).json({ message: "No product ID in request" });
    }
};

// Add a new product
const productsAdd = function (req, res) {
    Product
        .create(req.body)
        .then((product) => res.status(201).json(product))
        .catch((err) => res.status(400).json({ error: err.message }));
};

module.exports = {
    productsList,
    productsFindOne,
    productsAdd,
};
