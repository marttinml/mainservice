var mongoose = require('mongoose');

// DB connection - - - - - - - - - - - - - - - - - - - - - - - -

module.exports = function(){
    var db = mongoose.connect('mongodb://localhost/ccles', function (err, res) {
    //mongoose.connect('mongodb://ccles:Ccles13@ds051980.mongolab.com:51980/ccles', function(err, res) {
        if (err) {
            console.log('ERROR: connecting to Database... ' + err);
        } else {
            console.log('Connected to Database');
        }
    });
    require('../app/models/user.model');
    return db;
};