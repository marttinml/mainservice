/*jslint node:true*/
var User = require('mongoose').model('User');


var _this = {
    
    
  getUser: function(number,fn){

     User.findOne({number:number}, function(err, user) {
        if(!err) {
            console.log('Called: ·························· getUser()');
            
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
        online:     false,
        lastconnection: new Date(),
        contacts:   []
    });

    user.save(function (err) {
        if (!err) {
            console.log('Called: ·························· signup()');
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
        console.log('Called: ·························· users()');
  		} else {
  			console.log('ERROR: ' + err);
  		}
  	});
  };




exports.updateName = function(req, res){
    
    User.update(
        { number: req.body.number },
        {$set:
            {
                name : req.body.name
            }
        },
        function(err, tank){
            
            if(!err){
                
               _this.getUser(req.body.number,function(user){
                   res.status(200).jsonp(user);
               });
                
                console.log('Called: ·························· updateName()');
            }else{
                res.status(200).jsonp(err);
            }
            
        }
    );

};

exports.updateImg = function(req, res){
    
    User.update(
        { number: req.body.number },
        {$set:
            {
                img : req.body.img
            }
        },
        function(err, tank){
            
            if(!err){
                
               _this.getUser(req.body.number,function(user){
                   res.status(200).jsonp(user);
               });
                
                console.log('Called: ·························· updateImg()');
            }else{
                res.status(200).jsonp(err);
            }
            
        }
    );

};

exports.updatePassword = function(req, res){
    
    User.update(
        { number: req.body.number },
        {$set:
            {
                password : req.body.password
            }
        },
        function(err, tank){
            
            if(!err){
                
               _this.getUser(req.body.number,function(user){
                   res.status(200).jsonp(user);
               });
                
                console.log('Called: ·························· updatePassword()');
            }else{
                res.status(200).jsonp(err);
            }
            
        }
    );

};



exports.updateContactStatus = function(req, res){
    
    User.update(
        { number: req.body.number, "contacts.number": req.body.numberContact },
        { $set :{
                "contacts.$.status": req.body.status
            }
        },
        
        function(err, tank){
            
            if(!err){
                
               _this.getUser(req.body.number,function(user){
                   res.status(200).jsonp(user);
               });
                
                console.log('Called: ·························· updateContactStatus()');
            }else{
                res.status(200).jsonp(err);
            }
        
        }
    );

};



exports.updateContactFrequency = function(req, res){
    
    User.update(
        { number: req.body.number, "contacts.number": req.body.numberContact },
        { $set :{
                "contacts.$.frequency": req.body.frequency
            }
        },
        
        function(err, tank){
            
            if(!err){
                
               _this.getUser(req.body.number,function(user){
                   res.status(200).jsonp(user);
               });
                
                console.log('Called: ·························· updateContactFrequency()');
            }else{
                res.status(200).jsonp(err);
            }
        
        }
    );

};



exports.addContacts = function(req, res){
    
    User.update(
        { number: req.body.number },
        { $push :{
                contacts:{
                    $each: req.body.contacts
                }
            }
        },
        function(err, tank){
            
            if(!err){
                
               _this.getUser(req.body.number,function(user){
                   res.status(200).jsonp(user);
               });
                
                console.log('Called: ·························· addContacts()');
            }else{
                res.status(200).jsonp(err);
            }
        
        }
    );

};














//db.students.update(
//   { _id: 4, "grades.grade": 85 },
//   { $set: { "grades.$.std" : 6 } }
//)