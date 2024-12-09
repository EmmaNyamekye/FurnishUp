// filename = app_api/models/users.js

const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

// Define the User Schema
const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  address: { type: String, required: true },
  city: { type: String, required: true },
  email: { type: String, required: true, unique: true },
});

// Add Passport.js Plugin
userSchema.plugin(passportLocalMongoose, {
  usernameField: 'email', // Use 'email' instead of 'username' for login
});

// Export the User Model
module.exports = mongoose.model('User', userSchema);
