const http = require('http')
const url = require('url')
const fs = require('fs')

const server = http.createServer(function (req, res) {
  
  const pathname = url.parse(req.url, true).pathname;
  
  if(pathname == '/') {
    fs.readFile('./index.html', function (err, data) {
      res.writeHead(200, {'content-type': 'text/html'});
      res.end(data);
    })
  } else if(pathname == '/about') {
    fs.readFile('./about.html', function (err, data) {
      res.writeHead(200, {'content-type': 'text/html'});
      res.end(data);
    });
  } else if(pathname == '/profile') {
    fs.readFile('./profile.html', function (err, data) {
      res.writeHead(200, {'content-type': 'text/html'});
      res.end(data);
    });
  } else {
    res.end(`<h1>Error 404 - Page Not Found</h1> <br>
      <a href='http://localhost:8000/'>Go to home page</a>
    `);
  }
    
  
});

server.listen(8000, '127.0.0.1', function () {
  console.log('working...');
});