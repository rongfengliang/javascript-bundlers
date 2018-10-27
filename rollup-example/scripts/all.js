const util = require('util');
const path = require('path');
const fs = require('fs');
const writeFile = util.promisify(fs.writeFile);
const readFile = util.promisify(fs.readFile);
const run = util.promisify(require('child_process').exec);

const cmdAndMeasure = (n, cmd) => {
  console.time(n);
  return run(cmd)
  .then((r) => {
    console.timeEnd(n);
    return r;
  });
}

run('make pre')
.then(() => {
  return Promise.all([
    cmdAndMeasure('ES', 'make es'),
    cmdAndMeasure('CJS', 'make cjs'),
    cmdAndMeasure('ES Source', 'make es-source'),
    cmdAndMeasure('CJS Source', 'make cjs-source'),
    cmdAndMeasure('ES + GCC', 'make es-gcc'),
    cmdAndMeasure('CJS + GCC', 'make cjs-gcc'),
    cmdAndMeasure('ES Source + GCC', 'make es-source-gcc'),
    cmdAndMeasure('CJS Source + GCC', 'make cjs-source-gcc'),
    ])
})
.then((r) => r.forEach(v => console.log(v.stdout)))
.then(() => run('make post'))
.then((r) => console.log(r.stdout))
.catch(e => console.log(e));
