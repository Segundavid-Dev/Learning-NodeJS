// Demo-example: Read a large file and send it to the client

const fs = require("fs");
const server = require("http").createServer;

server.on("request", (req, res) => {
  //   fs.readFile("./test-file.txt", (err, data) => {
  //     if (err) console.log(err);
  //     res.end(data);
  //   });
  //   // SOLUTION 2: streams
  //   const readable = fs.createReadStream("./test-file.txt");
  //   readable.on("data", (chunk) => {
  //     res.write(chunk);
  //   });
  //   readable.on("end", () => {
  //     res.end();
  //   });
  // SOLUTION 3
  const readable = fs.createReadStream("test-file.txt");
  readable.pipe(res);

  //   readableSource.pipe(writeableDestination)
});

server.listen(8000, "127.0.0.1", () => {
  console.log("server running...");
});
