// Challenge:
// Read Dog breed from text file
// Do an HTTp request for the url
// save the url to another text file

import { readFile } from "node:fs";
import { writeFile } from "node:fs";

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
      writeFile("./dogBreed.txt", imageUrl, "utf-8", (err) => {
        if (err) console.log("error in writing file");
      });

      // Save the image url to text file
    } catch (err) {
      console.log(err);
    }
  };
  fetchData();
});
