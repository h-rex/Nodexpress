const express = require('express')
const app = express();
const url = require('url')
const bodyParser = require('body-parser')

const parseEncoder = bodyParser.urlencoded({extended: true})

app.get('/', function (req, res) {
  // res.send("again...");
  res.sendFile('./index.html', {root: __dirname})
});

app.get('/about', function (req, res) {
  res.sendFile('./about.html', {root: __dirname})
})

app.get('/profile', function (req, res) {
  res.sendFile('./profile.html', {root: __dirname})
})

app.get('/login', function (req, res) {
  res.sendFile('./login.html', {root: __dirname})
})

app.get('/get-response', function (req, res) {
  res.send(url.parse(req.url, true))
})

app.post('/post-response', parseEncoder, function (req, res) {
  res.send(req.body);
});

app.listen(8000, 'localhost', function () {
  console.log('Server is up and running...')
})