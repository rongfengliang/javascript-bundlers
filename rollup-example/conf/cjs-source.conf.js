import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import {terser} from "rollup-plugin-terser";

export default {
  input: 'src/cjs-source.js',
  output: {
    file: 'dist/cjs-source.js',
    format: 'iife',
    name: 'mybundle',
  },
  plugins: [
    resolve(),
    commonjs(),
    terser(),
  ]
};
