import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import compiler from '@ampproject/rollup-plugin-closure-compiler';

export default {
  input: 'src/main-req.js',
  output: {
    file: 'dist/bundle-req-gcc.js',
    format: 'iife',
    name: 'mybundle',
  },
  plugins: [
    commonjs(),
    resolve(),
    compiler({
      compilation_level: "ADVANCED_OPTIMIZATIONS",
      language_out: "ECMASCRIPT_2015",
    }),
  ]
};
