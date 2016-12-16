var express = require('express');
var path = require('path');
var router = express.Router();

var fileUpload = require('express-fileupload');

router.post('/', function (req, res, next) {
    var sampleFile;
 
    if (!req.files) {
        res.send('No files were uploaded.');
        return;
    }
 
    sampleFile = req.files.sampleFile;
    let location = __dirname  + '/../src/uploads/' + sampleFile.name; 
    sampleFile.mv(location, function(err) {
        if (err) {
            return res.status(500).json({
                title: 'Can not upload file',
                error: err
            });
        }
        else {
            res.status(200).json({
                "location": '/uploads/' + sampleFile.name
            });
        }
    });
});

module.exports = router;
