var mongoose = require('mongoose'),
    Schema   = mongoose.Schema;

var user = new Schema({
  number:     	    { type: String },
  name:       	    { type: String },
  email: 	        { type: String },
  img:              { type: String },
  password: 	    { type: String },
  online:          { type: Boolean },
  lastconnection: 	{ type: Date  },
  contacts:   	    [ Schema.Types.Mixed ]
});

mongoose.model('User', user);