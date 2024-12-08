// app_server/controllers/signIn.js

/* GET signIn page */
const signIn = function(req, res){
    const description = `Do you want to get rid of old but still usable furniture or unwanted kitchenware?<br>
                         <strong>FurnishUp</strong> is the place for you!<br><br>
                         Are you in need of good used furniture or kitchenware?<br>
                         <strong>FurnishUp</strong> is the place for you!`;

    res.render('signIn', { title: 'Welcome Back to FurnishUp!', description: description });
    };
module.exports = {
    signIn
};

