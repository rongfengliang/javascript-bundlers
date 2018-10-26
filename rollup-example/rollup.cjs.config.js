import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import {terser} from "rollup-plugin-terser";

export default {
  input: 'src/main-cjs.js',
  output: {
    file: 'dist/bundle-cjs.js',
    format: 'iife',
    name: 'mybundle',
  },
  plugins: [
    resolve(),
    commonjs(),
    terser(),
  ]
};
