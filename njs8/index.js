const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const session = require('express-session')
const multer = require('multer')

const upload = multer({dest: 'uploads/'})

const app = express()
app.use(cookieParser())
app.use(session({secret: 'hey! it is secret'}))


app.get('/session', function (req, res) {
  if(req.session.noOfPageView) {
    res.send('Page Views: #' + req.session.noOfPageView++)
  } else {
    req.session.noOfPageView = 1
    res.send('Welcome!')
  }
})

app.get('/id', function (req, res) {
  res.send(req.cookies)
})

app.get('/', function (req, res) {
  res.sendFile('index.html', {root: path.join(__dirname, 'public')})
})

app.get('/cookies', function (req, res) {
  res.send(req.cookies);
})


app.post('/photoUpload', upload.single('pic'), function (req, res) {
  console.log(req.body);
  console.log(req.file);
  res.send('single file uploaded successfully');
})

app.post('/photoUploadAlbum', upload.array('pics', 4), function (req, res) {
  console.log(req.body);
  console.log(req.files);
  res.send('multiple files uploaded successfully')
})

app.listen(3000)
