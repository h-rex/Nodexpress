const http = require('http')

const server = http.createServer(function (req, res) {
  res.writeHead(200, {"Content-Type": "text/html"});
  res.write("You are in <h1  style='color: blue;'>server environment</h1>");
  res.end("\nthanks!");
});


server.listen(8080, 'localhost', function () {
  console.log("Server is running...");
});
