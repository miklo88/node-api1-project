// implement your API here. building your API. node index.js to initiate api.
// const http = require("http");
const express = require("express");

const port = 5000;

const server = express();
// const server = http.createServer((req, res) => {
//   res.satusCode = 200;
//   res.setHeader("Content-Type", "text/plain");
//   res.end("Hello World, from NodeJS");
// });
// everything form line 9 to 12 is below now. more dry.
server.get("/", (req, res) => {
  res.send("Hello world from express!");
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
