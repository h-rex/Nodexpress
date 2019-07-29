const http = require('http')

const server = http.createServer(function (req, res) {
  res.writeHead(200, {"Content-Type": "text/html"});
  
  res.write(`
    <form action="another-server.js">
      <input type="text" name="fullname" />
      <input type="text" name="lastname" />
      <input type="text" name="other" />
      <input type="submit" value="Send" />
    </form>`
  );

  console.log(req.url);

  res.end("\nthanks!");
});


server.listen(8080, 'localhost', function () {
  console.log("Server is running...");
});
