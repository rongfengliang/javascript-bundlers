const fs = require('fs');
const bfy = require('browserify');

bfy({
  entries: ['src/main-cjs.js'],
  plugin: ['tinyify'],
})
.bundle()
.pipe(fs.createWriteStream('dist/bundle.js'));
