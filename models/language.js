var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Page = require('./page');

var schema = new Schema({
    name: {type: String, required: true},
    created_dt: {type: String, default: Date.now},
    created_by: {type: Schema.Types.ObjectId, ref: 'User'},
    modified_dt: {type: String, default: undefined},
    modified_by: {type: Schema.Types.ObjectId, ref: 'User', default: undefined}
});

schema.post('remove', function (lang) {
    Page.findById(lang._id, function (err, pageById) {
        pageById.lang = undefined;
        pageById.save();
    });
});

module.exports = mongoose.model('Language', schema);