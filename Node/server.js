const fs = require("fs");
const http = require("http");
const url = require("url");

//ctrl+c//to start the server!.............

const data = fs.readFileSync(`${__dirname}/txt/productApi.json`, "utf-8");

const server = http.createServer((req, res) => {
  const pathName = req.url;
  if (pathName === "/" || pathName === "/overview") {
    res.end("hello from thee overview!");
  } else if (pathName === "/product") {
    res.end("hello from thee product!");
  } else if (pathName === "/api") {
    res.writeHead(200, {
      "Content-type": "aplication.js",
    });
    res.end(data);
  } else {
    res.writeHead(404, {
      "Content-type": "text/html",
      "my-own-header": "hello-world",
    });
    res.end("<h1>page not found!</h1>");
  }
});

server.listen(8000, "127.0.0.1", () => {
  console.log("Listening to requests on port 8000");
});

//Routing
