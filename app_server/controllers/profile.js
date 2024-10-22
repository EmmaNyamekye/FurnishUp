/* GET profile page */
const profile = function(req, res){
    res.render('profile', { title: 'FurnishUp - Profile page' });
    };
module.exports = {
    profile
};

