var sequelize = require('./traffic_data.js');
var Sequelize = require('sequelize');

var sequelize = new Sequelize('database', 'username', 'password');
var Project = sequelize.define('Project', {
  title:       Sequelize.STRING,
  description: Sequelize.TEXT
});
var Task = sequelize.define('Task', {
  title:       Sequelize.STRING,
  description: Sequelize.TEXT,
  deadline:    Sequelize.DATE
});
Project.hasMany(Task);


// var sequelize = require('./traffic_data.js');

// var Sequelize = require ('sequelize')
//   , sequelize = new Sequelize('area', 'location', 'address', 'code', 'type', 'date');

// var Data = sequelize.define('traffic_data', {
//   area: Sequelize.STRING,
//   location: Sequelize.STRING,
//   address: Sequelize.STRING,
//   code: Sequelize.STRING,
//   type: Sequelize.STRING,
//   date: Sequelize.DATE
// });

// //Tester ONLY
return sequelize.sync().then(function() {
  return Data.create({
    area: "KANEOHE",
    location: "PALI TUNNELS D4 S",
    address: "600X PALI HWY",
    code: "633",
    type: "STALLED/HAZARDOUS VEHICLE",
    date: new Date(2015, 12, 12)
  }).then(function(sdepold) {
    console.log(sdepold.values);
  });
});

// module.exports = model;