const fs = require('fs');
const bfy = require('browserify');

bfy({
  entries: ['src/cjs-source.js'],
  plugin: ['tinyify'],
})
.bundle()
.pipe(fs.createWriteStream('dist/cjs-source.js'));
