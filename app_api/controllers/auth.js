// filename = app_api/controllers/auth.js

const mongoose = require('mongoose');
const User = mongoose.model('User'); 

// Register function
const createUser = function (req, res) {
  User
    .create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      address: req.body.address,
      city: req.body.city,
      email: req.body.email,
      password: req.body.password 
    })
    .then((user) => {
      res
        .status(201)
        .json(user);
    })
    .catch((err) => {
      res
        .status(400)
        .json(err);
    });
};

// Login function
const loginUser = function (req, res) {
  if (req.body && req.body.email && req.body.password) {
    User
      .findOne({ email: req.body.email })
      .then((user) => {
        if (!user) {
          res
            .status(404)
            .json({ message: 'User not found' });
          return;
        }
        res
          .status(200)
          .json(user);
      })
      .catch((err) => {
        res
          .status(400)
          .json(err);
      });
  } else {
    res
      .status(400)
      .json({ message: 'No email or password in request' });
  }
};

module.exports = {
  createUser,
  loginUser
};
