const fs = require("fs");

const path = require("path");
let pathObj = path.parse(__filename); 
const output = fs.createWriteStream(`${pathObj.dir}/text.txt`);

const {stdout, stdin} = process;



stdout.write("\nPlease, enter the text:\n");

stdin.on("data", function(chunk) {
  output.write(chunk);
  if (chunk.toString().trim() === "exit" || chunk.toString().trim() === "SI") {
    stdout.write("Gooluck!\n");
    process.exit();
  }
  stdout.write("\nPlease continue typing...\n");
});

process.on('SIGINT', function() {
  console.log("\nGooluck!");
  process.exit();
})




