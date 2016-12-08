var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');

var User = require('../models/user');
var Page = require('../models/page');

router.get('/', function (req, res, next) {
    Page.find()
        .populate('user', 'firstName')
        .exec(function (err, pages) {
            if (err) {
                return res.status(500).json({
                    title: 'An error occurred',
                    error: err
                });
            }
            res.status(200).json({
                message: 'Success',
                obj: pages
            });
        });
});

router.use('/', function (req, res, next) {
    jwt.verify(req.query.token, 'secret', function (err, decoded) {
        if (err) {
            return res.status(401).json({
                title: 'Not Authenticated',
                error: err
            });
        }
        next();
    })
});

router.post('/', function (req, res, next) {
    var decoded = jwt.decode(req.query.token);
    User.findById(decoded.user._id, function (err, user) {
        if (err) {
            return res.status(500).json({
                title: 'An error occurred',
                error: err
            });
        }

        var page = new Page({
            title: req.body.title,
            subtitle: req.body.subtitle,
            text: req.body.text,
            created_by: user.__id,
            created_dt: Date.now,
            category: req.body.category,
            language: req.body.language
        });

        page.save(function (err, result) {
            if (err) {
                return res.status(500).json({
                    title: 'An error occurred',
                    error: err
                });
            }
            user.pages.push(result);
            user.save();
            res.status(201).json({
                message: 'Saved message',
                obj: result
            });
        });
    });
});

router.patch('/:id', function (req, res, next) {
    var decoded = jwt.decode(req.query.token);
    Page.findById(req.params.id, function (err, page) {
        if (err) {
            return res.status(500).json({
                title: 'An error occurred',
                error: err
            });
        }
        if (!page) {
            return res.status(500).json({
                title: 'No Page Found!',
                error: {message: 'Page not found'}
            });
        }
        if (page.user != decoded.user._id) {
            return res.status(401).json({
                title: 'Not Authenticated',
                error: {message: 'Users do not match'}
            });
        }

        page.title = req.body.title;
        page.subtitle = req.body.subtitle;
        page.text = req.body.text,
        page.modified_by = user.__id;
        page.modified_dt = Date.now;
        page.category = req.body.category;
        page.language = req.body.language;

        page.save(function (err, result) {
            if (err) {
                return res.status(500).json({
                    title: 'An error occurred',
                    error: err
                });
            }
            res.status(200).json({
                message: 'Updated Page',
                obj: result
            });
        });
    });
});

router.delete('/:id', function (req, res, next) {
    var decoded = jwt.decode(req.query.token);
    Page.findById(req.params.id, function (err, page) {
        if (err) {
            return res.status(500).json({
                title: 'An error occurred',
                error: err
            });
        }
        if (!page) {
            return res.status(500).json({
                title: 'No Page Found!',
                error: {message: 'Page not found'}
            });
        }
        if (page.user != decoded.user._id) {
            return res.status(401).json({
                title: 'Not Authenticated',
                error: {message: 'Users do not match'}
            });
        }
        
        page.remove(function (err, result) {
            if (err) {
                return res.status(500).json({
                    title: 'An error occurred',
                    error: err
                });
            }
            
            res.status(200).json({
                message: 'Deleted page',
                obj: result
            });
        });
    });
});

module.exports = router;