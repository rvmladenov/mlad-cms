var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var fileUpload = require('express-fileupload');

var appRoutes = require('./routes/app');
var userRoutes = require('./routes/user');
var pagesRoutes = require('./routes/pages');
var fileUploadRoutes = require('./routes/file-upload');

var app = express();
mongoose.connect('mongodb://rvm:13579@ds139567.mlab.com:39567/mlad-cms');

// view engine setup
app.set('views', path.join(__dirname, './dist'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

//TODO uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'client/dist', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'dist'))); // Needed so it can use index.html when express starts 

/** Used for uploading files from "multipart forms" */
app.use(fileUpload());

// TODO: Works as expected withouth this line - remove it if not using it
// app.use(express.static(path.join(__dirname, './dist')));

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PATCH, DELETE, OPTIONS');
    next();
});

// TODO: think of using "/api/" in front of all routes
app.use('/', appRoutes);
app.use('/user', userRoutes);
app.use('/pages', pagesRoutes);
app.use('/file-upload', fileUploadRoutes);


// BIG TODO: ---- need to implement some sort of a routing system so when one copies an URL, it could go there, not be redirected to the index


// catch 404 and forward to error handler
app.use(function (req, res, next) {
    return res.render('index');
});

module.exports = app;
