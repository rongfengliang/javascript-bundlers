import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import {terser} from "rollup-plugin-terser";

export default {
  input: 'src/cjs.js',
  output: {
    file: 'dist/cjs.js',
    format: 'iife',
    name: 'mybundle',
  },
  plugins: [
    commonjs(),
    resolve(),
    terser(),
  ]
};
