const fs = require('fs');
const bfy = require('browserify');

bfy({
  entries: ['src/main-req.js'],
  plugin: ['tinyify'],
})
.bundle()
.pipe(fs.createWriteStream('dist/bundle-req.js'));
