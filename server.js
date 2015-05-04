var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json());         // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

// use static middleware
app.use('/', express.static('public'));

var port = process.env.PORT || 3000;
var server = app.listen(port, function() {
  console.log('Listening on ' + port + '...');
});
