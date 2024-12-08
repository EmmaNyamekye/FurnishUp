// app_api/models/products.js

const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    imageUrl: { type: String, required: true },
    description: { type: String, required: true },
    location: { type: String, required: true },
    contact: { type: String, required: true },
});

mongoose.model('Product', productSchema, 'Product');
