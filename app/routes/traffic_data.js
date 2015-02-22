var models = require('../models');
var express = require('express');
var router = express.Router();
var Sequelize = require('sequelize');
var mockData = require('../models/mock_data.js');
var incident = require('../models/traffic_data');
//EJL-Incident
router.get('/', function(req, res) {
  models.incident
    .findAll({where: {date: }})
});

module.exports = router;