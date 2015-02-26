"use strict";



module.exports = function (sequelize, Sequelize) {

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
  return incident;
};
