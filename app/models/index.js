"use strict";

var fs        = require("fs");
var path      = require("path");
var Sequelize = require("sequelize");
var basename  = path.basename(module.filename);
var env       = process.env.NODE_ENV || "development";
var config    = require('../../config/config.json')[env];
var sequelize = new Sequelize(config.database, config.username, config.password, config);
var db        = {};

var Data = require('./traffic_data.js');
var mockData = require('../data/mock_data.js');




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

// sequelize
//   .sync({ force: true })    // drops all tables everytime we run
//   .complete(function(err) {
//     if (!!err) {
//       console.log('An error occurred while creating the table:', err);
//     } else {
//       for(var i = 0; i < mockData.length; i++) {
//          db.incident
//         .create({
//           item: mockData[i].item,
//           date: mockData[i].date,
//           code: mockData[i].code,
//           type: mockData[i].type,
//           address: mockData[i].address,
//           location: mockData[i].location,
//           area: mockData[i].area,
//           latitude: mockData[i].latitude,
//           longitude: mockData[i].longitude
//         })
//         .complete(function(err, user) {
//           if (!!err) {
//             console.log('The instance has not been saved:', err);
//           } else {
//             console.log('We have a persisted instance now');
//           }
//         });
//       console.log('It worked!');
//     }
//       }
     
//   });

// db.Data
//   .sync({ force: true})
//   .success(function() {
//     console.log('Hello');
//     Data.bulkCreate(mockData).success(function() {
//       console.log("success");
//     });
//   });


db.sequelize = sequelize;
db.Sequelize = Sequelize;
module.exports = db;
