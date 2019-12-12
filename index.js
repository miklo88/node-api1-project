// implement your API here. building your API. node index.js to initiate api.
const express = require("express");

const port = 5000;

const server = express();

server.get("/", (req, res) => {
  res.send("Lets get some LOTR characters!");
});
// creating a route to the client side from the backend!
server.listen(port, () => {
  console.log(`server listening on port ${port}`);
});

// // // // // // // // // // // // // // // // // // // // // // previous code - first iteration
// // implement your API here. building your API. node index.js to initiate api.
// const http = require("http");

// const hostname = "127.0.0.1";
// const port = 3000;

// const server = http.createServer((req, res) => {
//   res.satusCode = 200;
//   res.setHeader("Content-Type", "text/plain");
//   res.end("Hello World, from NodeJS");
// });

// server.listen(port, hostname, () => {
//   console.log(`server listening on http://${hostname}:${port}`);
// });
