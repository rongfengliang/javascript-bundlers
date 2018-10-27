import resolve from 'rollup-plugin-node-resolve';
import {terser} from "rollup-plugin-terser";

export default {
  input: 'src/es.js',
  output: {
    file: 'dist/es.js',
    format: 'iife',
  },
  plugins: [
    resolve(),
    terser(),
  ]
};
