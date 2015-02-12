"use strict";

var Sequelize = require('sequelize');
var sequelize = new Sequelize('area', 'location', 'address', 'code', 'type', 'date', 'latitude', 'longitude');


module.exports = function(sequelize, Sequelize) {
  var Data = sequelize.define('traffic_data', {
    area: Sequelize.STRING,
    location: Sequelize.STRING,
    address: Sequelize.STRING,
    code: Sequelize.STRING,
    type: Sequelize.STRING,
    date: Sequelize.DATE,
    latitude: {
      type: Sequelize.FLOAT,
      allowNull: true,
      defaultValue: null,
      validate: { min: -90, max: 90 }
    },
    longitude: {
      type: Sequelize.FLOAT,
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
  // return Data;
  // return sequelize.sync().then(function() {
  //   return Data.create({
  //     area: "KANEOHE",
  //     location: "PALI TUNNELS D4 S",
  //     address: "600X PALI HWY",
  //     code: "633",
  //     type: "STALLED/HAZARDOUS VEHICLE",
  //     date: new Date(2015, 12, 12)
  //   }).then(function(data) {
  //     console.log(data.values);
  //   });
  // });
  $.get( "https://gist.github.com/mrbarbasa/3ac8a072339ed9d25666", function( data ) {
    console.log('data');
  });
};

