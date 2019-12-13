// creating our server in a separate component from index.js
const express = require("express");

// creates server
const server = express();

// handle requests to the root of the api, the / route
server.get("/", (req, res) => {
  res.send("Hello from Express Server!");
});

// watch for connections on your port of choice. stay away from 3000.
server.listen(8000, () => {
  console.log("Server running on http://localhost:8000");
});
