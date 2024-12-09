// filename = app.js

// Core Modules and Dependencies
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var fs = require('fs');
var http = require('http');
var https = require('https');

// Database and Routes
require('./app_api/models/db');
var indexRouter = require('./app_server/routes/index');
const apiRouter = require('./app_api/routes/index');

// Initialize Express App
var app = express();

// View Engine Setup
app.set('views', path.join(__dirname, 'app_server', 'views'));
app.set('view engine', 'pug');

// Middleware Setup
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Define Express API Routes
app.use('/', indexRouter);      // Home Route
app.use('/api', apiRouter);     // API Route

// **Serve Angular Only for `/about` Route**
app.use('/about', express.static(path.join(__dirname, 'angular-dist')));

// **Serve Angular's index.html for `/about` Route**
app.get('/about/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'angular-dist', 'index.html'));
});

// **Catch 404 Errors**
app.use(function (req, res, next) {
  next(createError(404));
});

// **Error Handler**
app.use(function (err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500);
  res.render('error');
});

// Load SSL Certificates for HTTPS
let privateKey, certificate;

// Detect if Running on Render (Production) or Local Environment
try {
  if (fs.existsSync('/etc/secrets/key.pem') && fs.existsSync('/etc/secrets/cert.pem')) {
    // Render Deployment (Secret Files)
    privateKey = fs.readFileSync('/etc/secrets/key.pem', 'utf8');
    certificate = fs.readFileSync('/etc/secrets/cert.pem', 'utf8');
    console.log("Loaded SSL certificates from Render secrets.");
  } else {
    // Local Development
    privateKey = fs.readFileSync('./sslcert/key.pem', 'utf8');
    certificate = fs.readFileSync('./sslcert/cert.pem', 'utf8');
    console.log("Loaded SSL certificates from local directory.");
  }
} catch (error) {
  console.error("Failed to load SSL certificates:", error);
  process.exit(1);
}

// Set SSL Credentials
const credentials = { key: privateKey, cert: certificate };

// Create Servers
const httpServer = http.createServer(app);
const httpsServer = https.createServer(credentials, app);

// Start Servers
httpServer.listen(8000, () => console.log("HTTP Server running on port 8000"));
httpsServer.listen(443, () => console.log("HTTPS Server running on port 443"));

module.exports = app;

/*
app.use('/api', function(req, res, next) { 
  res.header('Access-Control-Allow-Origin', 
  'http://localhost:4200'); 
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept'); 
  next(); 
}); 
*/