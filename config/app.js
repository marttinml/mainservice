var express = require("express"),
    app = express(),
    http = require("http"),
    server = http.createServer(app),
    mongoose = require('mongoose');


app.configure(function () {
    app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.use(app.router);
});

// call to routes - - - - - - - - - - - - - - - - - - - - - - - - 
routes = require('./routes/users')(app);




//// DB connection - - - - - - - - - - - - - - - - - - - - - - - - 
//mongoose.connect('mongodb://localhost/ccles', function (err, res) {
//    //mongoose.connect('mongodb://ccles:Ccles13@ds051980.mongolab.com:51980/ccles', function(err, res) {
//    if (err) {
//        console.log('ERROR: connecting to Database... ' + err);
//    } else {
//        console.log('Connected to Database');
//    }
//});


var port = process.env.PORT || 5000;
server.listen(port, function () {
    console.log(" - - - - - - - - - - - - - - - - - - - - - - - ");
    console.log(" |     API REST - http://localhost:" + port + "      | ");
    console.log(" - - - - - - - - - - - - - - - - - - - - - - - ");
});