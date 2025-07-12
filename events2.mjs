// Challenge:
// Read Dog breed from text file
// Do an HTTp request for the url
// save the url to another text file

import { readFile } from "node:fs";
import { writeFile } from "node:fs";

// simulate the cjs module system for my mjs module

readFile("./dog.txt", "utf-8", (err, data) => {
  if (err) console.log("wrong file path");
  const fetchData = async () => {
    try {
      const req = await fetch(
        `https://dog.ceo/api/breed/${data}/images/random`
      );
      // status code
      console.log("Status code", req.status);
      const res = await req.json();
      // log image url
      const imageUrl = res.message;

      // // use the writeFilePro promisified function here
      // writeFile("./dogBreed.txt", imageUrl, "utf-8", (err) => {
      //   if (err) console.log("error in writing file");
      // });

      return writeFilePro(`./dog.txt`, imageUrl).then(() => {
        console.log("Dog image resolved successfully");
      });

      // Save the image url to text file
    } catch (err) {
      console.log(err);
    }
  };
  fetchData();
});

// Promises instead of callback function
const readFilePro = (file) => {
  return new Promise((resolve, reject) => {
    readFile(file, "utf-8", (err, data) => {
      // resolve and reject comes in play here
      if (err) reject("Could not find the file");
      resolve(data); // whatever value we pass into the resolve function is what will be available later on
    });
  });
};

// use this promisify function in the
const writeFilePro = (file, text) => {
  return new Promise((resolve, reject) => {
    writeFile(file, text, "utf-8", (err) => {
      if (err) reject("could not write to file");
      resolve("success");
    });
  });
};
