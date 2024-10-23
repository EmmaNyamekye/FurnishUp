/* GET profile page */
const profile = function(req, res){
    res.render('profile', { title: 'FurnishUp' });
    };

const profileTitle = function(req, res){
    res.render('profile', { titlePage: 'FurnishUp - Profile page' });
    };

module.exports = {
    profile,
    profileTitle
};
