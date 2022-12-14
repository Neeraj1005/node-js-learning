const http = require("http");

const PORT = 3000;

// Create a local server to receive data from
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("page/home.html");
    res.end();
  }

  if (req.url === "/about") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<h1>About Page</h1>");
    res.end();
  } else {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.write("<h1>Page Not Found</h1>");
    res.end();
  }
});

console.log(`server is running at http://localhost:${PORT}`);
server.listen(PORT);
