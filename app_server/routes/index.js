// app_server/routes/index.js

const express = require('express');
const router = express.Router();
const ctrlMain = require('../controllers/main');
const ctrlSignUp = require('../controllers/signUp'); 
const ctrlSignIn = require('../controllers/signIn'); 

/* Define routes */
router.get('/', ctrlMain.index);
router.get('/signup', ctrlSignUp.signUp); 
router.get('/signin', ctrlSignIn.signIn); 

module.exports = router;
