// app_server/controllers/signUp.js

/* GET signUp page */
const signUp = function(req, res){
    const description = `Do you want to get rid of old but still usable furniture or unwanted kitchenware?<br>
                         <strong>FurnishUp</strong> is the place for you!<br><br>
                         Are you in need of good used furniture or kitchenware?<br>
                         <strong>FurnishUp</strong> is the place for you!`;

    res.render('signUp', { title: 'Sign Up to FurnishUp Today!', description: description });
    };
module.exports = {
    signUp
};

