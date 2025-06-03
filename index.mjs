// // // Reading from a file

// // Excercise
// // -> Read from a file
// // -> Write to a file
// // -> Async I/O
// // -> Synchronous I/O

// import fs from "fs";
// import { readFile } from "node:fs";
import { writeFile } from "node:fs";
import { createServer } from "node:http";
import { URL } from "node:url";

////// FILES
// const readText = fs.readFileSync("./txt/test.txt", "utf-8");

// console.log(readText);

// // write to file synchronously
// const data = "Hi my name is David Olasunkanmi Segun";
// fs.writeFileSync("./txt/test.txt", data, "utf-8");

// // reading and writing files asynchronously in javascript
// // this is the best way of working with I/O operations in node js

// readFile("./txt/test.txt", "utf-8", (err, data) => {
//   if (err) console.log("Error reading file!");
//   console.log(data);
// });

// writeFile(
//   "./txt/test.txt",
//   "Hello world, I am learning node JS",
//   "utf-8",
//   (err) => {
//     if (err) console.log("error writing to file!");
//   }
// );

////// SERVER
// Sending back a plain text response if a response comes in
const server = createServer((req, res) => {
  const pathName = req.url;
  if (pathName === "/" || pathName === "overview") {
    // send soething to the client
    res.end("This is the OVERVIEW");
  } else if (pathName === "product") {
    res.end("This is the PRODUCT");
  } else {
    res.end("Page not found!");
  }
  res.end("Hello from the server🚀");
});

server.listen(8000, "127.0.0.1", () => {
  console.log("Listening to server...");
});
