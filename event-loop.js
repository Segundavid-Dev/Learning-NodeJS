const fs = require("fs");

// Runs second
setTimeout(() => console.log("Timer 1 finished"), 0);

setImmediate(() => console.log("Immediate 1 finished"));

fs.readFile("./test-file.txt", () => {
  console.log("I/O finished");
});

// This code runs first
console.log("Hello from the top level code");
