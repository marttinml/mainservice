var mongoose = require('mongoose'),
    Schema   = mongoose.Schema;

var chat = new Schema({
  number:     	{ type: String },
  conversations: [
  					[
  						number: 	{type: String},
  						lastConversation: {type:String}
  						conversation: 
  							[
	  							{
	  								text: 	{type:String},
	  								date: 	{type:Date},
	  								reply: 	{type:Boolean}
	  							}
  							]
					]
				] 
			]
});

module.exports = mongoose.model('chat', chat);