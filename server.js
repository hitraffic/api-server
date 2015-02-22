var express = require('express');
var app = express();
var request = ('request');
var Routes = require('./app/routes/traffic_data');



var models = require('./app/models/traffic_data');
require('./app/models/index');


app.get('/', function (req, res) {

  res.send('Hello World');
});

var server = app.listen(3000, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);

  console.log(Routes);

});

