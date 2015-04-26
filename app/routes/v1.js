var router = require('express').Router();
var Incident = require('../incidents');

router.get('/incidents/latest', (req, res) => {
  Incident.find().sort('-date').limit(100).exec((err, incidents) => {
    if (err) {
      throw err;
    }

    res.json(incidents);
  });
});

module.exports = router;
