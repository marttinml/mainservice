/*jslint node:true*/
var express = require("express"),
    bodyParser = require('body-parser'),
    methodOverride = require('method-override'),
    app     = express();

module.exports = function(){

//    app.configure(function () {
//        app.use(express.bodyParser());
//        app.use(express.methodOverride());
//        app.use(app.router);
//    });
    
    app.use(bodyParser.urlencoded({
        extended: true
    }));
    app.use(bodyParser.json());
    app.use(methodOverride());
    
    require('../app/routes/user.route')(app);

    return app;
};
