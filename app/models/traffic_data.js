#!/usr/bin/env node

var debug = require('debug')('express-example');
var app = require('../app');
var models = require("../models");

app.set('port', process.env.PORT || 3000);

models.sequelize.sync().then(function () {
  var server = app.listen(app.get('port'), function() {
    debug('Express server listening on port ' + server.address().port);
  });
});

//sequelize
var sequelize = require('./traffic_data.js');

var Sequelize = require ('sequelize')
  , sequelize = new Sequelize('area', 'location', 'address', 'code', 'type', 'date');

var Data = sequelize.define('traffic_data', {
  area: Sequelize.STRING,
  location: Sequelize.STRING,
  address: Sequelize.STRING,
  code: Sequelize.STRING,
  type: Sequelize.STRING,
  date: Sequelize.DATE,
  latitude: {
    type: Sequelize.INTEGER,
    allowNull: true,
    defaultValue: null,
    validate: { min: -90, max: 90 }
  },
  longitude: {
    type: Sequelize.INTEGER,
    allowNull: true,
    defaultValue: null,
    validate: { min: -180, max: 180 }
  },
}, {
  validate: {
    bothCoordsOrNone: function () {
      if ((this.latitude === null) === (this.longitude === null)) {
        throw new Error ('Require either both latitude and longitude or neither');
      }
    }
  }
});



// //Tester ONLY
// return sequelize.sync().then(function() {
//   return Data.create({
//     area: "KANEOHE",
//     location: "PALI TUNNELS D4 S",
//     address: "600X PALI HWY",
//     code: "633",
//     type: "STALLED/HAZARDOUS VEHICLE",
//     date: new Date(2015, 12, 12)
//   }).then(function(sdepold) {
//     console.log(sdepold.values);
//   });
// });

// module.exports = model;

//RUN ON TERMINAL ONLY
// pg_ctl -D /usr/local/var/postgres -l /usr/local/var/postgres/server.log start