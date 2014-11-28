module.exports = function(app) {

  var User = require('../models/user.js');



  findAllUsers = function(req, res) {
  	User.find(function(err, users) {
  		if(!err) {
  			res.send(users);
        console.log('Called: //  - - - - -  findAllUsers()');
  		} else {
  			console.log('ERROR: ' + err);
  		}
  	});
  };



  findByIdUser = function(req, res) {
    User.findById(req.params.id, function(err, user) {
      if(!err) {
        res.send(user);
        console.log('Called: //  - - - - -  findAllUsers()');
      } else {
        console.log('ERROR: ' + err);
      }
    });
  };

  _findByNumber = function(number,fn){

     User.findOne({number:number}, function(err, user) {
      if(!err) {
        console.log('Called: //  - - - - -  _findByNumber()');
        fn(err,user);
      } else {
        console.log('ERROR: ' + err);
      }
    });
  };

  _findByNumbers = function(numbers,fn){

     User.find({ number:{ $in: numbers } }, function(err, users) {
      if(!err) {
        console.log('Called: //  - - - - -  _findByNumbers()');
        fn(err,users);
      } else {
        console.log('ERROR: ' + err);
      }
    });
  };



  addUser = function(req, res) {

    var user = new User({
      number:     req.body.number,
      name:       req.body.name,
      contacts:   req.body.contacts
    });

    user.save(function(err) {
      if(!err) {
        console.log('Called: //  - - - - -  addUser()');
      } else {
        console.log('ERROR: ' + err);
      }
    });

    res.send(user);
  };




  getSesion = function(req, res){
    
    _findByNumber(req.params.number,function(err,user){

      var sesion = {};
          sesion.user = user;

          if(sesion.user){
            
           var numbers = sesion.user.contacts;

           if(numbers){

              _findByNumbers(numbers,function(err,users){
                sesion.contacts = users;
                res.send(sesion);
              });

           }else{
            res.send(sesion);
           }
        }else{
          res.send("No se encontro usuario Registdo con el numero: "+req.params.number); 
        }
      
    });

    

    //res.send(sesion);
  };
/*


{
  "number":"5567087001",
  "name":"Martín",
  "contacts":[]
}

*/

  app.get('/users', findAllUsers);
  app.get('/user/:id', findByIdUser);
  app.post('/user', addUser);
  app.get('/getsesion/:number', getSesion);

}