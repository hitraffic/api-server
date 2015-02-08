var express = require('express');
var app = express();
var Sequelize = require('sequelize');
var sequelize = new Sequelize('database_name', 'username', 'password', {
  disalect: "mysql",
  port: 5432,
});

sequelize
  .authenticate()
  .complete(function(err) {
    if (!!err) {
      console.log('Unable to connect to the database:', err)
    } else {
      console.log('Connection has been established successfully.')
    }
  });

app.get('/', function (req, res) {
  res.send('Hello World!')
})

var server = app.listen(3000, function () {

  var host = server.address().address
  var port = server.address().port

  console.log('Example app listening at http://%s:%s', host, port)

});
// var debug = require('debug')('express-example');
// var app = require('../app');
// var models = require("../models");

// app.set('port', process.env.PORT || 3000);

// models.sequelize.sync().then(function () {
//   var server = app.listen(app.get('port'), function() {
//     debug('Express server listening on port ' + server.address().port);
//   });
// });