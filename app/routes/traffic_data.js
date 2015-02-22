var models  = require('../models');
var express = require('express');
var router  = express.Router();
var mockData = require('../models/mock_data.js');
var Incidents = require('../models/traffic_data');

router.get('/', function(req, res) {
  models.incident.findAll({
  }).then(function(incidents) {
    for(var i = 0; i < incidents.length; i++) {
      res.render(incidents[i].date);
    }
  });
});

module.exports = router;