var mongoose = require('mongoose'),
    Schema   = mongoose.Schema;

var user = new Schema({
  number:     	{ type: String },
  name:       	{ type: String },
  lastname: 	{ type: String },
  img:          { type: String },
  password: 	{ type: String }, 
  contacts:   	[ Schema.Types.Mixed ]
});

module.exports = mongoose.model('User', user);