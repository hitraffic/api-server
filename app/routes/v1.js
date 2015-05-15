var router = require('express').Router();
var Incident = require('../incidents');

var RESPONSE_LIMIT = 1000;

// Helper function for building a mongo query.
function buildQuery(params) {
  let query = {};
  let limit = 100;

  if (params.area) {
    query.area = params.area.toUpperCase();
  }
  if (params.type) {
    query.type = params.type.toUpperCase();
  }
  if (params.from) {
    let date = Date.parse(params.from);
    if (!isNaN(date)) {
      query.date = query.date || {};
      query.date.$gte = new Date(date);
    }
  }
  if (params.limit) {
    limit = Math.min(parseInt(params.limit), RESPONSE_LIMIT);
  }
  if (params.to) {
    let date = Date.parse(params.to);
    if (!isNaN(date)) {
      query.date = query.date || {};
      query.date.$lt = new Date(date);
    }
  }

  return [query, limit];
}

router.get('/areas', (req, res) => {
  Incident.find().distinct('area').exec((err, areas) => {
    if (err) {
      throw err;
    }

    // There's one area that's all whitespace :(
    let whitespaceRegex = /^\s+$/;
    res.json(areas.filter((area) => !whitespaceRegex.test(area)));
  });
});

router.get('/types', (req, res) => {
  Incident.find().distinct('type').exec((err, types) => {
    if (err) {
      throw err;
    }

    res.json(types);
  });
});

router.get('/incidents', (req, res) => {
  // Build params.
  let [query, limit] = buildQuery(req.query);

  Incident.find(query).select('-_id -__v -geocode_response').sort('-date').limit(limit).exec((err, incidents) => {
    if (err) {
      throw err;
    }

    res.json(incidents);
  });
});

module.exports = router;
