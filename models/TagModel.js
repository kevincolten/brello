var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var tagSchema = new Schema({

module.exports = mongoose.model('Tag', tagSchema);