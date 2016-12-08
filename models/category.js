var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Page = require('./page');

var schema = new Schema({
    name: {type: String, required: true},
    description: {type: String, required: true},
    master: {type: Schema.Types.ObjectId, ref: 'Category', default: undefined},
    status: {type: String, default: 'A'},

    created_dt: {type: String, default: Date.now},
    created_by: {type: Schema.Types.ObjectId, ref: 'User'},
    modified_dt: {type: String, default: undefined},
    modified_by: {type: Schema.Types.ObjectId, ref: 'User', default: undefined}
},);

schema.post('remove', function (category) {
    Page.find({category: category._id}, function (err, page) {
        page.category = undefined;
        page.save();
    });
});

module.exports = mongoose.model('Category', schema);