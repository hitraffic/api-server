var express = require('express');
var app = express();
<<<<<<< HEAD
var request = ('request');
var router = require('./app/routes/traffic_data');


=======
var models = require('./app/models/index');
>>>>>>> master

// app.get('/', function (req, res) {
//   res.send('Hello World!');
// });

<<<<<<< HEAD

app.get('/', function (req, res) {

  res.send('Hello World');
});
=======
app.use('/api', require('./app/routes/traffic_data'));
>>>>>>> master

var server = app.listen(3000, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);

  
});

