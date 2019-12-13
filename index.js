// updated and implement your API here. building your API. node index.js to initiate api.
const express = require("express");
const users = require("./data/seeds/users");
const port = 5000;

const server = express();

// any requests for the http using the get method.
// creating a route to the client side from the backend!
server.get("/api/users", (req, res) => {
  res
    .status(500)
    // .send("Lets get some LOTR characters!")
    .json({ error: "The users information could not be retrieved." });
});

server.get("/api/users/:id", (req, res) => {
  res
    .status(400)
    // .send("Welcome to Hobbit users!")
    .json({ message: "The user with the specified ID does not exist." });
}); // READING DATA

server.post("/api/users", (req, res) => {
  res
    .status(400)
    .json({ errorMessage: "Please provide name and bio for the user." });
}); // CREATE DATA

server.put("/api/users/:id", (req, res) => {
  res.status(200).json({ url: "/api/users/:id", operation: "PUT" });
}); // UPDATE DATA

server.delete("/api/users/:id", (req, res) => {
  res
    .status(404)
    // .send("deleted hobbits")
    .json({ message: "The user with the specified ID does not exist." });
}); // DELETE DATA

server.get("/users", (req, res) => {
  res.status(404).json(users);
});

server.listen(port, () => {
  console.log(`server listening on port ${port}`);
});
