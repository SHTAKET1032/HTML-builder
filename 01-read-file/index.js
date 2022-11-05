const path = require("path");
let pathObj = path.parse(__filename);

const fs = require("fs");


let readableStream = fs.createReadStream(`${pathObj.dir}/text.txt`, "utf8");

readableStream.on("data", function(chunk) {
  console.log(chunk);
});