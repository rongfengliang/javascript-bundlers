const path = require('path');
const ClosurePlugin = require('closure-webpack-plugin');
const gcc = new ClosurePlugin({
  mode: 'STANDARD',
  platform: 'java',
  childCompilations: true,
}, {
  // compiler flags here
  //
  // for debuging help, try these:
  //
  // formatting: 'PRETTY_PRINT'
  // debug: true
})

const config = {
  entry: './src/main.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    gcc,
  ]
};

module.exports = config;
