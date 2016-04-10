var feathers = require('feathers');
var rest = require('feathers-rest');
var hooks = require('feathers-hooks');
var bodyParser = require('body-parser');
var errorHandler = require('feathers-errors/handler');
var plugin = require('../lib/index');

// Initialize the application
var app = feathers()
  .configure(rest())
  .configure(hooks())
  // Needed for parsing bodies (login)
  .use(bodyParser.json())
  .use(bodyParser.urlencoded({ extended: true }))
  // Initialize your feathers plugin
  .use('/plugin', plugin())
  .use(errorHandler());

app.listen(3030);

console.log('Feathers app started on 127.0.0.1:3030');
