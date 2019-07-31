const express = require('express')
const url = require('url')
const app = express();

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
  res.sendFile('./login.html', {root: __dirname});
})

app.listen(8080);