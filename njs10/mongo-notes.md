# MongoDB
- It works on concept of 'collection' and 'document'.

## MongoDB 
- It is container for collections.

## Collection
- It is a group of MongoDB documents.

## Document
- It is a group of key-value pairs.

---
## To open Mongo shell
- On Linux `$ mongo`
- On Windows `c:\somepath\sth> mongo` 
## Quit Mongo shell
- `$ quit()`
## Use(create) database name
- `$ use learningdb`
## List all databases
- `$ show dbs`
## Check current/selected DB
- `$ db`
## Delete current database
- `$ db.dropDatabase()`
## Copy database
  - `$ db.copyDatabase("olddb","newdb")`
## Create collection
- `$ db.createCollection("products")`
## Show collection(s)
- `$ show collections`
## Rename Collection
- `$ db.products.renameCollection("Products")`
## Drop(delete) collection
- `$ db.Products.drop()`
- Or `$ db.getCollection("Products").drop()`
## Insert Document(s)
- `$ db.Products.insert({"product-name": "Colget", "desc": "Toothpaste"})`
## To query/find document(s)
- `$ db.Products.find()`
- `$ db.Products.find({"product-name": "Audi"})`
## To update document
- `$ db.Products.update({"product-name": "Colget"}, {$set: {"desc": "Tooth cleaner"}})`
## To delete all documents having specific field
- `$ db.Products.remove({"product-name", "Colget"})`

## To delete first matching document having specific field
- `$ db.Products.remove({"product-name":"Colget"},1)` 

## delete all the documents
- `$ db.Products.remove()`
## To show the limited no of document(s) output
- `$ db.Products.find().limit(2)`
## To skip certain no of documents
- `$ db.Products.find().skip(3)`
## To sort documents output
- Asc - `$ db.Products.sort("product-name": 1)`
- Dsc - `$ db.Products.sort("product-name": -1)`
## Counting documents
- `$ db.Products.count()`
- `$ db.Products.find({"product-name": "Audi"}).count()`




