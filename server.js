const express = require('express');
const path = require('path');
const app = express();
 
// Serve static files....
app.use(express.static(__dirname + '/www/'));

// Send all requests to index.html
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname + '/www/index.html'));
});



// Start the app by listening on the default
// Heroku port
app.listen(process.env.PORT || 4200, function() {
  console.log('Listening on port ' + this.address().port); //Listening on port 8888
});