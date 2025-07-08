// Starting again from beginning

// Reading from a file
import { readFile, readFileSync } from "node:fs";
import { writeFile } from "node:fs";
import { createServer } from "node:http";

readFile("./txt/test.txt", "utf-8", (err, data) => {
  console.log(data);
});

const json = readFileSync("./dev-data/data.json", "utf-8");

console.log("I am reading a file");

const writeText = "lorem lorem lorem";
writeFile("./txt/test.md", writeText, "utf-8", (err) => {
  if (err) {
    console.log("Wrong file path");
  }
});

const server = createServer((req, res) => {
  res.writeHead(200, {
    "Content-Type": "application/json",
  });
  if (req.url === "/name") {
    res.end(JSON.stringify({ name: "Segun David Olasunkanmi" }));
  } else {
    res.end(json);
  }
});

server.listen(8000, "127.0.0.1", () => {
  console.log("listening to server actions");
});
