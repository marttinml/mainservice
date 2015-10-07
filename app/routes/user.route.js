/*jslint node:true*/
module.exports = function (app) {
    var User = require('../controllers/user.controller');
    
    
    //sign
    app.route('/signup').post(User.signup);
    
    //update
    app.route('/updateName').post(User.updateName);
    app.route('/updateImg').post(User.updateImg);
    app.route('/updatePassword').post(User.updatePassword);
    app.route('/updateContactStatus').post(User.updateContactStatus);
    app.route('/updateContactFrequency').post(User.updateContactFrequency);
    
    //add
    app.route('/addContacts').post(User.addContacts);
    
   
//    //users
    app.route('/users').post(User.users);
    app.route('/test').get(User.test);
//    
//    //login
//    app.route('/login').post(User.login);
    
};




//updatePassword
//
//{
//    "number": "5567087001",
//    "password": "123"
//}

//updateContactFrequency
//
//{
//    "number": "5567087001",
//    "numberContact": "5500000004",
//    "frequency": 5
//}

//addContacts
//
//{
//    "number": "5567087001",
//    "contacts": [{
//        "number": "5500000003",
//        "frequency": "7",
//        "status": "blocked"
//    }, {
//        "number": "5500000004",
//        "frequency": "2",
//        "status": "active"
//    }]
//}