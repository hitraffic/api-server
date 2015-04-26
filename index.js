require('dotenv').load();
var mongoose = require('mongoose');
var app = require('express')();
var morgan = require('morgan');
mongoose.connect(process.env['MONGO_URL']);

var Incident = require('./app/incidents');
var v1Routes = require('./app/routes/v1');

app.use('/v1', v1Routes);
app.use(morgan('combined'));

function startServer(port) {
  app.listen(port, function () {
    console.log(`Server listening on port ${port}`);
  });
}

module.exports = startServer;

if (require.main === module) {
  let port = process.env['PORT'] || 3000;
  startServer(port);
}
