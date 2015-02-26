var express = require('express');
var app = express();
var models = require('./app/models/index');

app.use('/api', require('./app/routes/traffic_data'));


var server = app.listen(3000, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);

  
});

