// app_server/routes/users.js

const express = require("express");
const passport = require("passport");
const mongoose = require("mongoose");
require("../../app_api/models/users"); // Ensure the User model is loaded
const User = mongoose.model("User");

const router = express.Router();

// Middleware to pass logged-in user data to views
router.use((req, res, next) => {
  res.locals.user = req.user;
  next();
});

// Register Route - Display Registration Form
router.get("/register", (req, res) => {
  res.render("signUp", {}); // Render the Sign-Up page
});

// Register Route - Handle Form Submission
router.post("/register", async (req, res, next) => {
  try {
    // Validate fields
    if (!req.body.firstName || !req.body.lastName || !req.body.email || !req.body.password) {
      return res.render("signUp", { error: "All fields are required!" });
    }

    const newUser = new User({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      address: req.body.address,
      city: req.body.city,
      email: req.body.email,
    });

    // Register using Passport.js
    User.register(newUser, req.body.password, (err, account) => {
      if (err) {
        console.error("Registration error:", err);
        return res.render("signUp", { error: err.message });
      }
      passport.authenticate("local")(req, res, () => {
        req.session.save((err) => {
          if (err) return next(err);
          res.redirect("/"); // Redirect to the homepage upon success
        });
      });
    });
  } catch (err) {
    console.error("Unexpected error:", err);
    next(err);
  }
});

// Login Route - Display Login Form
router.get("/login", (req, res) => {
  res.render("login", { user: req.user, error: req.flash("error") });
});

// Login Route - Handle Login
router.post(
  "/login",
  passport.authenticate("local", {
    failureRedirect: "/login",
    failureFlash: true,
  }),
  (req, res, next) => {
    req.session.save((err) => {
      if (err) return next(err);
      res.redirect("/"); // Redirect to the homepage upon success
    });
  }
);

// Logout Route
router.get("/logout", (req, res, next) => {
  req.logout((err) => {
    if (err) return next(err);
    req.session.save((err) => {
      if (err) return next(err);
      res.redirect("/"); // Redirect to the homepage after logout
    });
  });
});

module.exports = router;
