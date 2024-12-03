// app_server/controllers/main.js
const request = require('request');
const apiOptions = {
  server: 'http://localhost:3000', 
};

const _renderHomepage = function (req, res, responseBody) {
  res.render('index', {
    title: 'FurnishUp',
    products: responseBody,
  });
};

const index = function (req, res) {
  const path = '/api/products'; 
  const requestOptions = {
    url: `${apiOptions.server}${path}`,
    method: 'GET',
    json: {}, 
  };

  request(requestOptions, (err, response, body) => { 
    console.log(requestOptions);
    if (err) { 
      console.error('API call error:', err); 
      res.status(500).send(err);
    } else if (response.statusCode === 200) { 
      _renderHomepage(req, res, body);
    } else { 
      console.error('API call status:', response.statusCode); 
      res.status(response.statusCode).send('Error fetching products.');
    }
  });
};
module.exports = {
  index,
};
