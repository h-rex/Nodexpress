const express = require('express')
const bodyParser = require('body-parser')
const mongoClient = require('mongodb').MongoClient
var ObjectId = require('mongodb').ObjectID

const app = express()
const formParser = bodyParser.urlencoded({extended: false})

app.set('view engine', 'pug')
app.set('views', 'views')

var db
var dbUrl = "mongodb://localhost:27017/"

// DB connection
mongoClient.connect(dbUrl, { useNewUrlParser: true }, function (err, client) {
  if(err) throw err
  db = client.db("storydb")
  console.log("connected to 'storydb'")
})

// list
app.get('/', function(req, res) {
  db.collection("stories").find({}).toArray(function(err, result) {
    if(err) throw err
    res.render('index.pug', {stories: result})
  })
})

// create view
app.get('/create', function(req, res) {
  res.render('create.pug')
})

// create
app.post('/create', formParser, function(req, res) {
  db.collection("stories").insertOne(req.body, function(err, result) {
    res.send({redirectTo: '/'})
  })
})

// read
app.get('/story/:id', function(req, res) {
  db.collection("stories").findOne({_id: new ObjectId(req.params.id)}, function(err, result) {
    if(err) throw err
    res.render('story.pug', {story: result})
  })
})

// update view
app.get('/update/:id', function(req, res) {
  db.collection("stories").findOne({_id: new ObjectId(req.params.id)}, function(err, result) {
    if(err) throw err
    res.render('update.pug', {story: result})
  })
})

// update
app.put('/update', formParser, function(req, res) {
  db.collection("stories").updateOne({_id: new ObjectId(req.body._id)}, {$set: {stitle: req.body.stitle, scontent: req.body.scontent}}, function(err, result) {
    if(err) throw err
      res.send({redirectTo: '/'})
  })
})

// delete
app.delete('/delete', formParser, function(req, res) {
  db.collection("stories").deleteOne({_id: new ObjectId(req.body.id)}, function(err, obj) {
    if(err) throw err
    res.send({redirectTo: '/'})
  })
})

app.listen(4000, function() {
  console.log('Server is up and running...')
})
