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
    cmdAndMeasure('Direct ES', 'make direct-es'),
    cmdAndMeasure('Direct CJS', 'make direct-cjs'),
    cmdAndMeasure('Require CJS', 'make req'),
    ])
})
// .then((r) => r.forEach(v => console.log(v.stdout)))
.then(() => run('make post'))
.then((r) => console.log(r.stdout))
.catch(e => console.log(e));
