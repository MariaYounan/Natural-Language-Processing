"use strict"


let value;
let output = {};
const dotenv = require('dotenv');
dotenv.config();

const path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());


app.use(express.static('dist'))

var aylien = require("aylien_textapi");

// set aylien API credentias
var textapi = new aylien({
    application_id: process.env.API_ID,
    application_key: process.env.API_KEY
});

console.log(__dirname)

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})

// designates what port the app will listen to for incoming requests
app.listen(3001, function () {
    console.log('Example app listening on port 3001!')
})

app.post('/post',function(req,res){  
  value = req.body.input;
  textapi.sentiment({
    'text': value
  }, function(error, response) {
    if (error === null) {
      output.polarity = response.polarity;
      output.subjectivity = response.subjectivity;
      output.text = response.text;
      output.polarity_confidence = response.polarity_confidence;
      output.subjectivity_confidence = response.subjectivity_confidence;
      res.send(output);
    }
  });  
});

module.exports = app