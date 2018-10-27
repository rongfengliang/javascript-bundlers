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
    cmdAndMeasure('Named ES', 'make named'),
    cmdAndMeasure('Direct CJS', 'make direct-cjs'),
    cmdAndMeasure('Require CJS', 'make req'),
    cmdAndMeasure('Direct ES', 'make direct-es'),
    cmdAndMeasure('Named ES + GCC', 'make named-gcc'),
    cmdAndMeasure('Direct ES + GCC', 'make direct-es-gcc'),
    cmdAndMeasure('Direct CJS + GCC', 'make direct-cjs-gcc'),
    cmdAndMeasure('Require CJS + GCC', 'make req-gcc'),
    ])
})
.then((r) => r.forEach(v => console.log(v.stdout)))
.then(() => run('make post'))
.then((r) => console.log(r.stdout))
.catch(e => console.log(e));
