/* eslint-disable */
const express = require('express');
const serveStatic = require('serve-static');
const path = require('path');


// create the express app
const app = express();
app.use("/", serveStatic ( path.join (__dirname, '/dist') ) );

const port = process.env.PORT || 8081;
app.listen(port);
// Log to feedback that this is actually running
console.log('Server started on port ' + port);

app.get('*', function (req, res) {
  res.sendFile(__dirname + '/dist/index.html')
});