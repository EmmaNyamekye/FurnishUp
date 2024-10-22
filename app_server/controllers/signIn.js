/* GET signIn page */
const signIn = function(req, res){
    res.render('signIn', { title: 'FurnishUp - signIn page' });
    };
module.exports = {
    signIn
};

