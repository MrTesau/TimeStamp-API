
// Optional extra learning 
// FLORINS VID TO MAKE MY SOLUTION BETTER
// https://www.youtube.com/watch?v=iUgzevvlyi4&ab_channel=FlorinPop

// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({optionsSuccessStatus: 200}));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


// your first API endpoint... 
app.get("/api/hello", function (req, res) {
  res.json({greeting: 'hello API'});
});

// Begin creating api/timestamp/:date_string?

// req at /api/timestamp
// contains string at :date_string
// create and reply with valid date from string
// Reply with invalid JSON
app.get('/api/timestamp/:date_string?', function(req,res) {

const dateFromString =  req.params.date_string ? new Date(req.params.date_string) : new Date();
const unixDateCheck = new Date(parseInt(req.params.date_string));

if (dateFromString.toUTCString() !== "Invalid Date") {
res.json({
    unix: dateFromString.getTime(),
    utc: dateFromString.toUTCString()
  });
 } else if (unixDateCheck.toUTCString() !== "Invalid Date") {
     res.json({
     unix: unixDateCheck.getTime(),
     utc: unixDateCheck.toUTCString()
   })
 } else {
   res.json({
     error : "Invalid Date"
      });
 }
});



// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
