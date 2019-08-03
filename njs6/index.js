const url = require('url')
const fs = require('fs')
const path = require('path')
const bodyParser = require('body-parser')
const express = require('express')
const app = express()

const bodyParserEncoder = bodyParser.urlencoded({extended: false})

app.set('view engine', 'pug')
app.set('views', 'view-files')

app.get('/', function (req, res) {
  res.sendFile('myfile.html', {root: path.join(__dirname,'public')})
})

app.get('/form-data', function (req, res) {
  const person = url.parse(req.url, true).query
  const personJSON = JSON.stringify(person); 

  fs.writeFile('public/myData.json', personJSON, function (err) {
    if(err) throw err
    res.send("<h2>Form data have benn saved!");
  })
})

app.get('/post-form', function(req, res) {
  res.sendFile('myfilepost.html', {root: path.join(__dirname,'public')})
})

app.post('/form-data', bodyParserEncoder, function (req, res) {
  
  const personJSON = JSON.stringify(req.body); 

  fs.writeFile('public/myData.json', personJSON, function (err) {
    if(err) throw err
    res.send("<h2>Form data have benn saved!(POST)");
  })
})

app.get('/data', function (req, res) {
  fs.readFile('public/myData.json', 'utf-8', function(err, data) {
    if(err) throw err;

    res.send(JSON.parse(data).fullname);
  })
})

app.listen(4000)

