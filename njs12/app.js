const express = require('express')
const bodyParser = require('body-parser')
const mongoClient = require('mongodb').MongoClient
var ObjectId = require('mongodb').ObjectID

const app = express()
const formParser = bodyParser.urlencoded({extended: false})

app.set('view engine', 'pug')
app.set('views', 'views')

var db
var url = "mongodb://localhost:27017/"

// connect to mongo server
mongoClient.connect(url, { useNewUrlParser: true }, function (err, client) {
  if(err) throw err
  db = client.db("storydb")
  console.log("connected to 'storydb'")
})

// show index/stories
app.get('/', function(req, res) {
  db.collection("stories").find({}).toArray(function(err, result) {
    if(err) throw err
    res.render('index.pug', {stories: result})
  })
})

// server form to create story
app.get('/create', function(req, res) {
  res.render('create.pug')
})

// create story
app.post('/create', formParser, function(req, res) {
  db.collection("stories").insertOne(req.body, function(err, result) {
    res.redirect('/')
  })
})

// read story
app.get('/story/:id', function(req, res) {
  db.collection("stories").findOne({_id: new ObjectId(req.params.id)}, function(err, result) {
    if(err) throw err
    res.render('story.pug', {story: result})
  })
})

// serve story to update
app.get('/update/:id', function(req, res) {
  db.collection("stories").findOne({_id: new ObjectId(req.params.id)}, function(err, result) {
    if(err) throw err
    res.render('update.pug', {story: result})
  })
})

// update story
app.post('/update/:id', formParser, function(req, res) {
  db.collection("stories").updateOne({_id: new ObjectId(req.params.id)}, {$set: {stitle: req.body.stitle, scontent: req.body.scontent}}, function(err, result) {
    if(err) throw err
      res.redirect('/')
  })
})

// delete story
app.get('/delete/:id', function(req, res) {
  db.collection("stories").deleteOne({_id: new ObjectId(req.params.id)}, function(err, obj) {
    if(err) throw err
    res.redirect('/')
  })
})

app.listen(4000, function() {
  console.log('Server is up and running...')
})
