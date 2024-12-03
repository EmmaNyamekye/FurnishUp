// filename = app_api/models/db.js

const mongoose = require('mongoose');

// Import models
require('./users');
require('./products');

// Retrieve database credentials from environment variables
const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

// Construct the MongoDB URI
const dbURI = "mongodb+srv://" + username + ":" + password + "@cluster0.227ig.mongodb.net/FurnishUp?retryWrites=true&w=majority&appName=Cluster0";

try {
    mongoose.connect(
        dbURI
    ).then(
        () => { console.log("Mongoose connected successfully") },
        err => { console.error("Mongoose connection error:", err) }
    );
} catch (e) {
    console.error("Could not connect to MongoDB:", e);
}
