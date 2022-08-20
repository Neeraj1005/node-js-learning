const http = require("http");

const PORT = 3000;

// Create a local server to receive data from
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(
      JSON.stringify({
        data: "Hello Earth!",
      })
    );
  }

  if (req.url === "/about") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(
      JSON.stringify({
        data: "About Page",
      })
    );
  } else {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(
      JSON.stringify({
        data: "Page Not Found",
      })
    );
  }
});

console.log(`server is running at http://localhost:${PORT}`);
server.listen(PORT);
