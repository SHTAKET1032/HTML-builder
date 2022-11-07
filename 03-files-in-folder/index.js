const fs = require("fs"),
      path = require("path");

let pathToFolder = path.parse(__filename);
// console.log(`${pathToFolder.dir}/secret-folder`);

fs.readdir(`${pathToFolder.dir}/secret-folder`, (err, data) => {
  if(err) throw err;
  data.forEach(file => {
    const nameType = (path.basename(file, path.extname(file))+ " - "+path.extname(file).substring(1)+" - ");
    fs.stat(`${pathToFolder.dir}/secret-folder/${file}`, (err, stats) => {
      if(err) throw err;
      if(!stats.isDirectory()){
      console.log(`${nameType}${(stats.size)/1000}kb`)
      }
    })
  })
});


