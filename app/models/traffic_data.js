"use strict";

// console.log(mockData);

module.exports = function (sequelize, Sequelize) {

  var incident = sequelize.define('incident', {
    item: Sequelize.INTEGER,
    date: Sequelize.DATE,
    code: Sequelize.INTEGER,
    type: Sequelize.STRING,//TO DO
    address: Sequelize.STRING,
    location: Sequelize.STRING,//TO DO
    area: Sequelize.STRING,//TO DO
    lat: Sequelize.FLOAT,
    lng: Sequelize.FLOAT
  });
  return incident;
};

