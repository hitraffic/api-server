var models = require('../models');
var express = require('express');
var router = express.Router();
var Sequelize = require('sequelize');

router.get('/', function(req, res) {
  models.Data.findAll({
    include: [models.Task]
  }).then(function(data) {
    res.render('index', {
      location: 'Express',
      data: Data
    });
  });
});

module.exports = router;