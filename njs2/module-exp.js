const http = require('http')
const url = require('url')
const os = require('os')
const fs = require('fs')

/*
  url.parse()

  os.type()
  os.platform()
  os.arch()
  os.release()
  os.uptime()
  os.totalmem()
  os.freemem()
  os.cups()
  os.netwrokInterfaces()
  os.EOL

  fs.ulink()
  fs.unlinkSync()
  fs.open()
  fs.rename()
  fs.readFile()
  fs.writeFile()
  fs.stat()
  fs.appendFile()
  
  util.isArray()
  util.format()
  util.isDate()
  util.isRegExp()
  ...
*/

const server = http.createServer(function (req, res) {
  res.writeHead(200, {'content-type': 'text/html'});
  
  // const data = 
  // `
  //   <form action="module-exp.js" method="get">
  //     <input type="text" name="hobby1" />
  //     <input type="text" name="hobby2" />
  //     <input type="text" name="hobby3" />
  //     <input type="submit" value="Send hobbies" />
  //   </form>
  // `;

  // fs.writeFile('./myform.html', data, function (err) {
  //   if(err) throw err;
  //   console.log("data have been written.");
  // });


  fs.readFile('./myform.html', function (err, content) {
    if(err) throw err;

    res.write(content);
    console.log(typeof content);
    res.end();
  });
  
  

});

server.listen(8000, 'localhost', function () {
  console.log("Server is up and running at port 8000...");
});