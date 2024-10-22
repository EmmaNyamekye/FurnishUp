/* GET home page */
const index = function(req, res){
    res.render('index', { title: 'FurnishUp' });
    };
module.exports = {
    index
};

