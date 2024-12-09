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
  res.render("register", {});
});

// Register Route - Handle Form Submission
router.post("/register", async (req, res, next) => {
  try {
    const newUser = new User({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
    });

    // Register using Passport.js
    User.register(
      newUser,
      req.body.password,
      (err, account) => {
        if (err) {
          return res.render("register", { error: err.message });
        }
        passport.authenticate("local")(req, res, () => {
          req.session.save((err) => {
            if (err) return next(err);
            res.redirect("/");
          });
        });
      }
    );
  } catch (err) {
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
      res.redirect("/");
    });
  }
);

// Logout Route
router.get("/logout", (req, res, next) => {
  req.logout((err) => {
    if (err) return next(err);
    req.session.save((err) => {
      if (err) return next(err);
      res.redirect("/");
    });
  });
});

module.exports = router;
