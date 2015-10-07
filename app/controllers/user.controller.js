/*jslint node:true*/
var User      = require('mongoose').model('User'),
    response  = {},
    start     = 0,
    end       = 0;

var _this = {
    
    
  getUser: function(number,fn){

     User.findOne(
         {
             number:number
         },
         function(err, user) {
            if(!err) {
                console.log('Called: ·························· getUser()');

                fn(user);
            } else {
                console.log('ERROR: ' + err);
                fn(user);
            }
    });
      
  },
    getId: function(number,fn){

     User.findOne({number:number}, {"_id":true}, function(err, user) {
        if(!err) {
            console.log('Called: ·························· getId()');
            fn(user._id);
        } else {
            console.log('ERROR: ' + err);
            fn(user);
        }
    });
      
  },
    validateNumber: function(number,fn){
       User.findOne(
           {
               number:number
           }, 
            {
               "_id":true
           }, 
            function(err, user) {
                if(!err) {
                    console.log('Called: ·························· validateNumber()');
                    
                    if(user) fn(true);
                    else fn(false);
                    
                } else {
                    console.log('ERROR: ' + err);
                    fn(user);
                }
            }
       );
    
},
    validateUser:function(number, password, fn){
         User.findOne(
           {
               number:number,
               password:password
           }, 
            {
               "_id":true
           }, 
            function(err, user) {
                if(!err) {
                    console.log('Called: ·························· validateNumber()');
                    
                    if(user) fn(true);
                    else fn(false);
                    
                } else {
                    console.log('ERROR: ' + err);
                    fn(user);
                }
            }
       );
    },
    
};




exports.signup = function (req, res) {
    var d   = new Date();
    start   = d.getMilliseconds();
    and   = 0;

    console.log('\nuser.controller > signup()');
    console.log('············································································'+d);
    console.log('   D A T A B A S E');
    console.log('Schema:  user.save()');
    console.log('>>> Data Request');
    console.log(req.body);

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
            response.success = true;
            response.data = user;
        } else {
            response.success = false;
            response.message = err;
        }

        console.log('\n<<< Data Response');
        console.log(user);
        d   = new Date()
        end = d.getMilliseconds();
        console.log('············································································ Time: '+(end-start)+' ms');
        
        res.send(response);
    });
    
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


exports.updateEmail = function(req, res){
    
    User.update(
        { number: req.body.number },
        {$set:
            {
                email : req.body.email
            }
        },
        function(err, tank){
            
            if(!err){
                
               _this.getUser(req.body.number,function(user){
                   res.status(200).jsonp(user);
               });
                
                console.log('Called: ·························· updateEmail()');
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



exports.updateLastconnection = function(req, res){
    
    User.update(
        { number: req.body.number },
        { $set :{
                lastconnection: req.body.lastconnection
            }
        },
        
        function(err, tank){
            
            if(!err){
                
               _this.getUser(req.body.number,function(user){
                   res.status(200).jsonp(user);
               });
                
                console.log('Called: ·························· updateLastconnection()');
            }else{
                res.status(200).jsonp(err);
            }
        
        }
    );

};



exports.updateOnline = function(req, res){
    
    User.update(
        { number: req.body.number },
        { $set :{
                online: req.body.online
            }
        },
        
        function(err, tank){
            
            if(!err){
                
               _this.getUser(req.body.number,function(user){
                   res.status(200).jsonp(user);
               });
                
                console.log('Called: ·························· updateOnline()');
            }else{
                res.status(200).jsonp(err);
            }
        
        }
    );

};


exports.updateNumber = function(req, res){
    
    _this.getId(req.body.number,function(id){
    
        User.update(
            { _id: id },
            {$set:
                {
                    number : req.body.numberNew
                }
            },
            function(err, tank){

                if(!err){

                   _this.getUser(req.body.numberNew,function(user){
                       res.status(200).jsonp(user);
                   });

                    console.log('Called: ·························· updateNumber()');
                }else{
                    res.status(200).jsonp(err);
                }

            }
        );
    
    });
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


exports.login = function(req, res){
    _this.validateNumber(req.body.number,function(value){
        if(value){
            _this.validateUser(req.number, req.password,function(value){
                if(value){
                    
                    _this.getUser(req.body.numberNew,function(user){
                       res.status(200).jsonp(user);
                   });
                    
                }else{
                    obj = {
                        error : true,
                        title : 'Contraseña Incorrecta',
                        message : 'La contraseña'
                    };
                    res.status(200).jsonp(user);
                }
            });
        }
    });
};




exports.test = function(req, res) {
    res.status(200).jsonp({obj:'Webos'});
  };
