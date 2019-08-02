const express = require('express')

const app = express()
app.set('view engine', 'pug')
app.set('views', './views')


app.get('/', function (req, res) {
  res.render('inheritance1.pug', {pageTitle: 'Cool Engine', customHeader: 'Header using Pug', isStatus: true})
})

app.listen(8000);




