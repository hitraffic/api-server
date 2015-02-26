var models  = require('../models');
var express = require('express');
var router  = express.Router();
var Sequelize = require('sequelize');
var incident = require('../models/traffic_data');

router.get('/', function(req, res) {
  // query for date by year
  models.incident
    for(var i = 0; i < incident.length; i++) {
      sequelize.query("SELECT type FROM incident WHERE area = 'incident[i].area'", {type: sequelize.QueryTypes.SELECT})
        .then(function(incidentByArea) {
          console.log('incidents by area: ', incidentByArea);
          res.json({'incidents by area: ': inidentByArea});
        })
    }
});

module.exports = router;