const url = require('url')
const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const urlencoderParser = bodyParser.urlencoded({extended: false})

app.use(express.static('public'))

app.set('view engine', 'pug')
app.set('views', path.join(__dirname, 'views'))

app.get('/', function (req, res) {
  res.render('index.pug', {titleText: "Persons"})
})

app.delete('/person', urlencoderParser, function (req, res) {
  console.log(req.body);
  res.send({msg: 'it\'s that simple'})
})

app.listen(3000)