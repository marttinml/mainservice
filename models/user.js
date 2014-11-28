var mongoose = require('mongoose'),
    Schema   = mongoose.Schema;

var user = new Schema({
  number:     { type: String },
  name:       { type: String },
  contacts:   [ String ]
});

module.exports = mongoose.model('User', user);