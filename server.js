var express = require('express');

// Create our app
var app = express();

// Which folder to serve
app.use(express.static('public'));

// Start the server
app.listen(3000, function() {
  console.log('Express server is up on port 3000');
});
