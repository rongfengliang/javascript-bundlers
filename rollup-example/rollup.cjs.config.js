import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import compiler from '@ampproject/rollup-plugin-closure-compiler';

export default {
  input: 'src/main-cjs.js',
  output: {
    file: 'dist/bundle.js',
    format: 'iife',
    name: 'myapp'
  },
  plugins: [
    resolve(),
    commonjs(),
    compiler({
      compilation_level: "ADVANCED_OPTIMIZATIONS",
      language_out: "ECMASCRIPT_2015",
    }),
  ]
};
