/*jslint node:true*/
var User = require('mongoose').model('User');


var _this = {
    
    
  getUser: function(number,fn){

     User.findOne({number:number}, function(err, user) {
        if(!err) {
            console.log('Called: //  - - - - -  _findByNumber()');
            
            fn(user);
        } else {
            console.log('ERROR: ' + err);
            fn(user);
        }
    });
      
  }
    
};

exports.signup = function (req, res) {
    
    var user = new User({
        number:     req.body.number,
        email:      req.body.email,
        name:       '',
        lastname:   '',
        img:        '',
        password:   '',
        contacts:   []
    });

    user.save(function (err) {
        if (!err) {
            console.log('Called: //  - - - - -  addUser()');
        } else {
            console.log('ERROR: ' + err);
        }
    });

    res.send(user);
};


exports.users = function(req, res) {
  	User.find(function(err, users) {
  		if(!err) {
  			res.send(users);
        console.log('Called: //  - - - - -  findAllUsers()');
  		} else {
  			console.log('ERROR: ' + err);
  		}
  	});
  };



exports.updateName = function(req, res){
    
    User.update(
       { _id: req.body.id },
       {
           name : req.body.name
       }
    );
    
   _this.getUser(req.body.number,function(user){
       res.send(user);
   });
    
};