const fs = require("fs"),
      path = require("path");

const pathToFolder = path.parse(__filename);
// console.log(pathToFolder.dir);

fs.mkdir(`${pathToFolder.dir}/files-copy`, { recursive: true }, err => {
  if(err) throw err;
});

fs.readdir(`${pathToFolder.dir}/files`, {withFileTypes: true}, (err, files) => {
  if(err) throw err;
  files.forEach(file => {
    fs.readFile(`${pathToFolder.dir}/files/${file.name}`, (err, data) => {
      if(err) throw err;
      // console.log(`${pathToFolder.dir}/files/${file.name}`);

      fs.writeFile(`${pathToFolder.dir}/files-copy/${file.name}`, `${data}`, (err) => {
        if(err) throw err;
        // console.log(`${pathToFolder.dir}/files-copy/${file.name}`);
      });
    });
  });
});
