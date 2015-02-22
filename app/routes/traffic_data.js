var models  = require('../models');
var express = require('express');
var router  = express.Router();
var mockData = require('../models/mock_data.js');
var Incidents = require('../models/traffic_data');

router.get('/', function(req, res) {
  // query for date by year
  models.incident
    .findAll({where: {date: }})
});

module.exports = router;