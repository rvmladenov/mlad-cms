var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var User = require('./user');

var schema = new Schema({
    title: {type: String, required: true},
    subtitle: {type: String},
    text: {type: String, required: true},
    status: {type: String, default: 'A'},

    language: {type: Schema.Types.ObjectId, ref: 'Language', default: undefined},
    category: {type: Schema.Types.ObjectId, ref: 'Category', default: undefined},

    created_dt: {type: String, default: Date.now},
    created_by: {type: Schema.Types.ObjectId, ref: 'User' },
    modified_dt: {type: String, default: undefined },
    modified_by: {type: Schema.Types.ObjectId, ref: 'User', default: undefined }
});

schema.post('remove', function (page) {
    User.findById(page.user, function (err, user) {
        user.pages.pull(page);
        user.save();
    });
});

module.exports = mongoose.model('Page', schema);