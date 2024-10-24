const express = require('express');
const router = express.Router();
const ctrlMain = require('../controllers/main');
const ctrlProfiles = require('../controllers/profile'); 
const ctrlSignUp = require('../controllers/signUp'); 
const ctrlSignIn = require('../controllers/signIn'); 

/* GET home page. */
router.get('/', ctrlMain.index);
router.get('/profile', ctrlProfiles.profile)
router.get('/signup', ctrlSignUp.signUp)
router.get('/signIn', ctrlSignIn.signIn)
module.exports = router;