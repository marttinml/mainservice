var express  = require("express"),
    app      = express(),
    http     = require("http"),
    server   = http.createServer(app),
    mongoose = require('mongoose');
    io = require('socket.io').listen(server);
   

app.configure(function () {
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
});

// call to routes - - - - - - - - - - - - - - - - - - - - - - - - 
routes = require('./routes/users')(app);


// socket.io - - - - - - - - - - - - - - - - - - - - - - - - - - 
io.sockets.on('connection',function(socket){
  socket.on('test',function(data){
  
      newData = "socket: "+data;
      io.sockets.emit('new message',{data:newData});
      console.log("socket: "+data);
  });
});


// DB connection - - - - - - - - - - - - - - - - - - - - - - - - 
mongoose.connect('mongodb://localhost/ccles', function(err, res) {
  if(err) {
    console.log('ERROR: connecting to Database... ' + err);
  } else {
    console.log('Connected to Database');
  }
});



server.listen(5000, function() {
      console.log(" - - - - - - - - - - - - - - - - - - - - - - - ");
      console.log(" |     API REST - http://localhost:5000      | ");
      console.log(" - - - - - - - - - - - - - - - - - - - - - - - ");
});
