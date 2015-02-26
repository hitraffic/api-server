var models  = require('../models');
var express = require('express');
var router  = express.Router();
var Sequelize = require('sequelize');
var incident = require('../models/traffic_data');

//GET Area
router.get('/area/:area', function(req, res) {
  console.log(req.param);
  models.incident
    .findAll({
      where: {
        area: req.params.area.toUpperCase()}
        // area: areas[req.params.area]}
      })
    .then(function(incidents){
      res.json(incidents);
    });
  });

//GET Types
router.get('/type/:type', function(req, res) {
  console.log(req.param("type"));
  var types = {
    "stalled": "STALLED/HAZARDOUS VEHICLE",
    "no-collision": "TRAFFIC INCIDENT - NO COLLISION",
    "nuisance-violation": "TRAFFIC NUISANCE OR PARKING VIOLATION",
    "collision": "MOTOR VEHICLE COLLISION",
    "hazardous": "HAZARDOUS DRIVER"
  };
  models.incident
    .findAll({
      where: {
        type: types[req.params.type]}
    })
    .then(function(incidents) {
      res.json(incidents);
    });
});

//inside the route
//GET/incidents
//calculate the date for 2 years ago(js create date from years ago)
//going to be a date object
//after you get, convert to unix timestamp
//http://repl.it/cAl



router.get('/incidents', function(req, res) {
 
  models.incident
    .findAll ({
      limit: 1000, order: 'date DESC'
      // where: {
        // incident: req.params.incidents}, limit: 10
        // date.setFullYear(date.getFullYear()-2);
    })
    .then(function(incidents) {
      res.json(incidents);
    });
});

// get all incidents that occured in the last 2 hours
// Returns all incidents ordered by date/time descending that occurred in the last 2 hours.
router.get('/incidents/latest', function(req, res) {
  
  // console.log(incident.date);
  models.incident
    .findAll ({
      where: {
        incident: req.params.incidents}
        
    })
    .then(function(incidents) {
      // res.json(incidents);
    });
});



module.exports = router;