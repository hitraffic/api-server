require('babel/register');
require('dotenv').load();

var startServer = require('./app');

var port = process.env['PORT'] || 3000;
startServer(port);
