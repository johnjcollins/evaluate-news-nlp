var path = require('path');
const express = require('express');
const mockAPIResponse = require('./mockAPI.js');
const bodyParser = require('body-parser');
const cors = require('cors');
const aylien = require('aylien_textapi');
const dotenv = require('dotenv');

dotenv.config();

const textapi = new aylien({
  application_id: process.env.API_ID,
  application_key: process.env.API_KEY
});

const json = {
  title: 'test json response',
  message: 'this is a message',
  time: 'now'
};

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

app.use(express.static('dist'));

console.log(JSON.stringify(mockAPIResponse));

app.get('/', function(req, res) {
  res.sendFile('dist/index.html');
});

// designates what port the app will listen to for incoming requests
app.listen(8081, function() {
  console.log('Example app listening on port 8081!');
});

app.get('/test', function(req, res) {
  res.send(mockAPIResponse);
});

app.get('/aylien', function(req, res) {
  const queryUrl = req.query['url'];
  console.log(queryUrl);
  textapi.sentiment(
    {
      url: queryUrl
    },
    function(error, response) {
      if (error === null) {
        res.send(response);
        console.log(response);
      } else {
        console.log(error);
      }
    }
  );
});
