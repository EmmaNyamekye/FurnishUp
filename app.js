// filename = app.js

// Core Modules and Dependencies
const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

// Database and Routes
require('./app_api/models/db');
const indexRouter = require('./app_server/routes/index');
const apiRouter = require('./app_api/routes/index');

// Initialize Express App
const app = express();

// View Engine Setup
app.set('views', path.join(__dirname, 'app_server', 'views'));
app.set('view engine', 'pug');

// Middleware Setup
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Define Routes
app.use('/', indexRouter);
app.use('/api', apiRouter);

// Catch 404 Errors
app.use((req, res, next) => {
  next(createError(404));
});

// Error Handler
app.use((err, req, res, next) => {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500);
  res.render('error');
});

// SSL Certificate Setup
const https = require('https');

// Check for Environment Variables or Local Files
let privateKey, certificate;

if (process.env.SSL_KEY && process.env.SSL_CERT) {
  // Use Environment Variables (Production)
  privateKey = Buffer.from(process.env.SSL_KEY, 'base64').toString('utf8');
  certificate = Buffer.from(process.env.SSL_CERT, 'base64').toString('utf8');
} else {
  // Use Local Files (Development)
  const fs = require('fs');
  privateKey = fs.readFileSync('./sslcert/key.pem', 'utf8');
  certificate = fs.readFileSync('./sslcert/cert.pem', 'utf8');
}

// Set SSL Credentials
const credentials = { key: privateKey, cert: certificate };

// Create Servers
const http = require('http');
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