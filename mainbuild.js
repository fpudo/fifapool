var fs = require('fs');

fs.readdir('./build/static/js/', (err, files) => {
  const buildFile = files.reduce(x => x.length === 16 && x)
  fs.createReadStream(`./build/static/js/${buildFile}`)
    .pipe(fs.createWriteStream('C:\\Users\\felipe\\Documents\\workspace\\fifapool\\build\\static\\js\\main.build.js'))
  console.log(`${buildFile} was saved as main.build.js in IC code.`);
})
