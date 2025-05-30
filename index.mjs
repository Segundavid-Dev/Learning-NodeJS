// Reading from a file

import fs from "fs";
// Es module file system import

const myValue = fs.readFileSync("./txt/input.txt", "utf-8");
console.log(myValue);

// writing to a file
const text =
  "Hello, my name is Segun David and i am frontend engineer with increasing knowledge in the backend field";

// This dosen't return anything any value except for the new file
fs.writeFileSync("./txt/created.txt", text);
console.log("writing to file is successful");
