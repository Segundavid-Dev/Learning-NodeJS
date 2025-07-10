const EventEmitter = require("events");
const http = require("http");

const myEmitter = new EventEmitter();

myEmitter.on("newSale", () => {
  console.log("Event emitted");
});

myEmitter.emit("newSale");

////////////////////////
const server = http.createServer();

server.on("request", (req, res) => {
  console.log("Request received!");
  res.end("Request received!");
});

server.listen(8000, "127.0.0.1", () => {
  console.log("Waiting for requests");
});
