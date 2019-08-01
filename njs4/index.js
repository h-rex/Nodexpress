const express = require('express')
const url = require('url')
const bodyParser = require('body-parser')
const myapp = express()

const parseEncoder = bodyParser.urlencoded({extended: false});


myapp.get('/', 
//middleware function
function (req, res, next) {
  console.log('middleware...')
  next()
}, 
//hander function
function (req, res) {
  res.sendFile('static/index.html', { root: __dirname});
})

myapp.get('/contact-response', function (req, res) {
  res.send(url.parse(req.url, true))
})

myapp.get('/post-form', function (req, res) {
  res.sendFile('static/post-request.html', {root: __dirname})
})

myapp.post('/contact-response', parseEncoder, function (req, res) {
  res.send(req.body);
})

myapp.listen(8080)