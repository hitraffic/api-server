var models = require('../models');
var express = require('express');
var router = express.Router();
var Sequelize = require('sequelize');
var mockData = require('../models/mock_data.js');

//EJL-Incident
router.get('/', function(req, res) {
  models.incident.findAll({
    where: {create: type},
    include: [models.incident]
  }).then(function(data) {
    res.json (
        data.map(function(data) {
          return data.values;
        })
      );
    });
  });

module.exports = router;