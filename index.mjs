// Starting again from beginning

// Reading from a file
import { readFile, readFileSync } from "node:fs";
import { writeFile } from "node:fs";
import { createServer } from "node:http";
import { url } from "node:inspector";
import { url } from "node:inspector/promises";

import slugify from "slugify";

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

// const server = createServer((req, res) => {
//   res.writeHead(200, {
//     "Content-Type": "application/json",
//   });
//   if (req.url === "/name") {
//     res.end(JSON.stringify({ name: "Segun David Olasunkanmi" }));
//   } else {
//     res.end(json);
//   }
// });

// server.listen(8000, "127.0.0.1", () => {
//   console.log("listening to server actions");
// });

// SERVER
const tempOverview = readFileSync(
  `${__dirname}/dev-data/template-overview.html`,
  "utf-8"
);
const tempCard = readFileSync(
  `${__dirname}/dev-data/template-card.html`,
  "utf-8"
);
const tempProduct = readFileSync(
  `${__dirname}/dev-data/template-product.html`,
  "utf-8"
);

const data = readFileSync(`${__dirname}/dev-data/data.json`, "utf-8");
const dataObj = JSON.parse(data);

const server = createServer((req, res) => {
  const pathName = req.url;

  // overview page
  if (pathName === "/" || pathName === "/overview") {
    res.writeHead(200, {
      "content-type": "text/html",
    });
    res.end(tempOverview);
  }

  // product page
  else if (pathName === "/product") {
    res.end("This is the PRODUCT");
  } else if (pathName === "/api") {
    res.writeHead(200, {
      "content-type": "application/json",
    });
    res.end(data);
  }
});
