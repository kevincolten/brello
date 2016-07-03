var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var itemSchema = new Schema({	'name' : String,	'quantity' : Number,	'tags' : [{	 	type: Schema.Types.ObjectId,	 	ref: 'Tag'	}],  'list': {	 	type: Schema.Types.ObjectId,	 	ref: 'List'	}});

module.exports = mongoose.model('Item', itemSchema);
