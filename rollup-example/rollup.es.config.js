import resolve from 'rollup-plugin-node-resolve';
import {terser} from "rollup-plugin-terser";

export default {
  input: 'src/main-es.js',
  output: {
    file: 'dist/bundle-es.js',
    format: 'iife',
    name: 'mybundle',
  },
  plugins: [
    resolve(),
    terser(),
  ]
};
