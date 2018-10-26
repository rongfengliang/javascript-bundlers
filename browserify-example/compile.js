const fs = require('fs');
const bfy = require('browserify');

bfy({
  entries: ['src/main.js'],
  plugin: ['tinyify'],
})
.transform('babelify', {
  global: true,
  only: [/^(?:.*\/node_modules\/(?:ramda)\/|(?!.*\/node_modules\/)).*$/],
  presets: ['@babel/preset-env'],
})
.bundle()
.pipe(fs.createWriteStream('dist/bundle.js'));
