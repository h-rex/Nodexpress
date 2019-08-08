const mongoClient = require('mongodb').MongoClient

const url = "mongodb://localhost:27017/"

mongoClient.connect(url, function (err, db) {
  if(err) throw err
  const dbObj = db.db("mydb")

  // collection
  dbObj.createCollection("users", function (err, result) {
    if(err) throw err
    
    /*
    // single document insertion

    var user1 = {username: "Mike", address: "Seven Street"}
    dbObj.collection("users").insertOne(user1, function (err, result) {
      if(err) throw err
      console.log("1 document inserted")
      db.close()
    })
    */


 /*     
  //Multiple documents insertion
  
  var users = [
    {username: "Mike", address: "Seven Street"},
    {username: "John", address: "Second Street"},
    {username: "Mohit", address: "Park Street"},
    {username: "Joy", address: "Blue Street"},
    {username: "Mona", address: "Lonawala"},
    {username: "Amol", address: "Chennai"},
    {username: "Bhuvi", address: "Gandhi Nagar"},
  ]

  dbObj.collection("users").insertMany(users, function (err, result) {
    if(err) throw err
    console.log("Inserted documents # " + result.insertedCount)
    db.close()
  })
 */

/* 
// insertion with _id
var users = [
  {_id: 7, username: "Mike", address: "Seven Street"},
  {_id: 8, username: "John", address: "Second Street"},
  {_id: 9, username: "Mohit", address: "Park Street"},
  {_id: 10, username: "Joy", address: "Blue Street"},
  {_id: 11, username: "Mona", address: "Lonawala"},
  {_id: 12, username: "Amol", address: "Chennai"},
]

dbObj.collection("users").insertMany(users, function (err, result) {
  if(err) throw err
  console.log(result)
  db.close()
})
*/

/*
// find/query -- finding one result having username 'Mona'
dbObj.collection("users").findOne({username: "Mona"}, function (err, result) {
  if(err) throw err
  console.log(result)
  db.close()
})
*/


/*
// find/query -- finding results having username 'Mona'
dbObj.collection("users").find({username: "Mona"}).toArray(function (err, result) {
  if(err) throw err
  console.log(result)
  db.close()
})
*/

/*
// query -- regexp
dbObj.collection("users").find({address: /t$/}).toArray(function (err, result) {
  if(err) throw err
  console.log(result)
  db.close()
})
*/

/*
// sorting  == asc-- 1; des -- -1
dbObj.collection("users").find({address: /t$/}).sort({"username": -1}).toArray(function (err, result) {
  if(err) throw err
  console.log(result)
  db.close()
})
*/

/*
// delete one -- document
dbObj.collection('users').deleteOne({"username": "Joy"}, function (err, obj) {
  if(err) throw err
  console.log('Deleted')
  db.close()
})
*/

/*
// delete many -- documents
dbObj.collection('users').deleteMany({"username": "Mona"}, function (err, obj) {
  if(err) throw err
  console.log("Deleted doucments # " + obj.result.n)
  db.close()
})
*/

/*
// update -- document [ updateOne, updateMany]
dbObj.collection("users").updateMany({"address": "India"}, {$set: {"address": "Paris"}}, function (err, res) {
  if(err) throw err
  console.log(res.result.nModified)
  db.close()
})
*/

/*
// limiting no of records
dbObj.collection("users").find({}).limit(2).toArray(function (err, res) {
  console.log(res)
  db.close()
})
*/

/*
// limiting & skipping no of records
dbObj.collection("users").find({}).limit(2).skip(3).toArray(function (err, res) {
  console.log(res)
  db.close()
})
*/

/*
// delete collection

dbObj.collection("users").drop(function (err, isDeleted) {
  if(err) throw err
  if(isDeleted) console.log('collection is deleted');
  db.close()
})
*/

/*
dbObj.collection("users").findOne({}, function (err, res) {
  console.log(res)
  db.close()
})
*/

  console.log('thank you')
  // db.close()

  })
    
})