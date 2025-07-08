// In javascript, there are 2 ways to perform operations, the synchronous and asynchronous method

import { readFile, readFileSync, writeFile, writeFileSync } from "node:fs";
// Run a server in Node JS
import { createServer } from "node:http";

readFile("./txt/test.txt", "utf-8", (err, data) => {
  console.log(data);
});

// They use callback methods

// Write to a file synchronously
const new_data = readFileSync("./txt/test.txt", "utf-8");

console.log(new_data);

// Read and write to a file in nodeJs
writeFile(
  "./txt/test.txt",
  "Hello world I am currently learning node JS",
  "utf-8",
  (err) => {
    if (err) {
      console.log("Wrong file path");
    }
  }
);

// Write file synchronously
try {
  writeFileSync("./txt/test.txt", "Hehehehehehe", "utf-8");
} catch (err) {
  console.log(err);
}

const json = JSON.stringify({ message: "Hello from the server" });

// const server = createServer((req, res) => {
//   res.writeHead(200, {
//     "Content-Type": "application/json",
//   });
//   res.end(json);
// });

// req ->incoming request from the client
// res -> outgoing response sent by your server

// res.writeHead(statusCode, {
// headers information
// })

// res.end() -> to end the response and optionally send the final content to the client

// server.listen(8000, "127.0.0.1", () => {
//   console.log("Server is running");
// });

const names = ["Segun", "David"];
names.push();
