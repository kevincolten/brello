var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var tagSchema = new Schema({	'name' : String,	'color' : String});

module.exports = mongoose.model('Tag', tagSchema);
