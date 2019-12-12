// implement your API here. building your API. node index.js to initiate api.
const express = require("express");
const users = require("./data/seeds/users");
const port = 5000;

const server = express();

// any requests for the http using the get method.
// creating a route to the client side from the backend!
server.get("/", (req, res) => {
  res.send("Lets get some LOTR characters!");
});

server.get("/hobbits", (req, res) => {
  res.send("Welcome to Hobbiton");
}); // READING DATA

server.post("/hobbits", (req, res) => {
  res.status(201).json({ url: "/hobbits", operation: "POST" });
}); // CREATE DATA

server.put("/hobbits", (req, res) => {
  res.status(200).json({ url: "/hobbits", operation: "PUT" });
}); // UPDATE DATA

server.delete("/hobbits", (req, res) => {
  res.sendStatus(204);
}); // DELETE DATA

server.get("/hobbits", (req, res) => {
  const hobbits = [
    {
      id: 1,
      name: "Samwise Gamgee"
    },
    {
      id: 2,
      name: "Frodo Baggins"
    }
  ];
  res.status(200).json(hobbits);
});

server.get("/users", (req, res) => {
  res.status(404).json(users);
});

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
