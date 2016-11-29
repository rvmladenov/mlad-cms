var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var appRoutes = require('./routes/app');

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
app.use(express.static(path.join(__dirname, './dist'))); // TODO: Will I need this

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PATCH, DELETE, OPTIONS');
    next();
});

app.use('/', appRoutes);

// BIG TODO: ---- need to implement some sort of a routing system so when one copies an URL, it could go there, not be redirected to the index


// catch 404 and forward to error handler
app.use(function (req, res, next) {
    return res.render('index');
});

module.exports = app;
