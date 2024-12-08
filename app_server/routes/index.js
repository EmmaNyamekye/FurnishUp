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

router.get('/logout', (req, res, next) => { 
    req.logout((err) => { 
        if (err) { 
            return next(err); 
        } 
    }); 
    req.session.save((err) => { 
        if (err) { 
            return next(err); 
        } 
        res.redirect('/'); 
    }); 
}); 

module.exports = router;
