"use strict";

var fs        = require("fs");
var path      = require("path");
var Sequelize = require("sequelize");
var basename  = path.basename(module.filename);
var env       = process.env.NODE_ENV || "development";
var config    = require('../../config/config.json')[env];
console.log(config);
var sequelize = new Sequelize(config.database, config.username, config.password, config);
var db        = {};

sequelize
  .authenticate()
  .complete(function(err) {
    if (!!err) {
      console.log('Unable to connect to the database:', err);
    } else {
      console.log('Connection has been established successfully.');
    }
  });

// //fix this 
fs
  .readdirSync(__dirname)
  .filter(function(file) {
    return (file.indexOf(".") !== 0) && (file !== basename);
  })
  .forEach(function(file) {
    var model = sequelize["import"](path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach(function(modelName) {
  if ("associate" in db[modelName]) {
    db[modelName].associate(db);
  }
});

// //Tester ONLY
// sequelize.sync().then(function() {
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


db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
