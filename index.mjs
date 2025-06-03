// // // Reading from a file

// // Excercise
// // -> Read from a file
// // -> Write to a file
// // -> Async I/O
// // -> Synchronous I/O

// import fs from "fs";
// import { readFile } from "node:fs";
import { writeFile } from "node:fs";
import { readFile } from "node:fs";
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
  if (pathName === "/" || pathName === "/overview") {
    res.end("This is the overview route");
  } else if (pathName === "/product") {
    res.end("This is the products page");
  } else if (pathName === "/api") {
    // enter the route and read the file in here
    readFile(`./dev-data/data.json`, "utf-8", (err, data) => {
      const productData = JSON.parse(data);
      res.writeHead(200, {
        "content-type": "application/json",
      });
      console.log(productData);
    });
    res.end("api");
  } else {
    res.end("Page not Found");
  }
});

server.listen(8000, "127.0.0.1", () => {
  console.log("Listening to server...");
});
