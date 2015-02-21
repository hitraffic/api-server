"use strict";

var express = require('express');
var app = express();
var router  = express.Router();


var Sequelize = require('sequelize');
var sequelize = new Sequelize('area', 'location', 'address', 'code', 'type', 'date', 'latitude', 'longitude');
// console.log(mockData);

var Data = function (sequelize, Sequelize) {

  var incident = sequelize.define('incident', {
    item: Sequelize.INTEGER,
    date: Sequelize.DATE,
    code: Sequelize.INTEGER,
    type: Sequelize.STRING,
    address: Sequelize.STRING,
    location: Sequelize.STRING,
    area: Sequelize.STRING,
    lat: Sequelize.FLOAT,
    lng: Sequelize.FLOAT
  });
};


// var Data = function(sequelize, Sequelize) {
//   var Data = sequelize.define('traffic_data', {
//     date: Sequelize.DATE,
//     code: Sequelize.INTEGER,
//     type: Sequelize.STRING,
//     address: Sequelize.STRING,
//     location: Sequelize.STRING,
//     area: Sequelize.STRING,
//     latitude: {
//       type: Sequelize.FLOAT,
//       allowNull: true,
//       defaultValue: null,
//       validate: { min: -90, max: 90 }
//     },
//     longitude: {
//       type: Sequelize.FLOAT,
//       allowNull: true,
//       defaultValue: null,
//       validate: { min: -180, max: 180 }
//     },
//   }, {
//     validate: {
//       bothCoordsOrNone: function () {
//         if ((this.latitude === null) === (this.longitude === null)) {
//           throw new Error ('Require either both latitude and longitude or neither');
//         }
//       }
//     }
//   });

//   return Data;

  
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
  

  // };//END module.exports
// module.exports = Data;

//save data from mock_data.js file
//Configuration
// var User = sequelize.define('User', {
//   username: Sequelize.STRING,
//   password: Sequelize.STRING
// }, {
//   tableName: 'my_user_table',
//   timestamps: false
// });
//   //Creating and persisting instances
//   var user = User.build({
//     username: 'john-doe',
//     password: generatePasswordHash('so-great')
//   });

//     user
//     .save()
//     .complete(function(err) {
//       if(!!err) {
//         console.log('The instance has not been saved:', err);
//       } else {
//         console.log('We have a persisted instance now');
//       }
//     });

// User
//   .find({ where: { username: 'john-doe'} })
//   .complete(function(err, johnDoe) {
//     if(!!err) {
//       console.log('An error occured while searching for John:', err);
//     } else if (!johnDoe) {
//       console.log('No user with the username "john-doe" has been found.');
//     } else {
//       console.log('Hello ' + johnDoe.username + '!');
//       console.log('All attributes of john:', johnDoe.values);
//     }
//   });
//TO DO - send data from gist directly to whoever is trying to access data.

module.exports = function(sequelize, Sequelize) {
  var Incidents = sequelize.define('traffic_data', {
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
  return sequelize.sync().then(function() {
    return Incidents.create({
      area: "KANEOHE",
      location: "PALI TUNNELS D4 S",
      address: "600X PALI HWY",
      code: "633",
      type: "STALLED/HAZARDOUS VEHICLE",
      date: new Date(2015, 12, 12)
    }).then(function(data) {
      console.log(data.values);
    });
  });
};

