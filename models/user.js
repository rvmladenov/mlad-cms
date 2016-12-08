var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var mongooseUniqueValidator = require('mongoose-unique-validator');

var schema = new Schema({
    username: {type: String, require: true},
    password: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    pages: [{type: Schema.Types.ObjectId, ref: 'Page'}],
    firstName: {type: String},
    lastName: {type: String},
    last_login: {type: Date, default: Date.now}
});

schema.plugin(mongooseUniqueValidator);

module.exports = mongoose.model('User', schema);