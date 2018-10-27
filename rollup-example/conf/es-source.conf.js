import resolve from 'rollup-plugin-node-resolve';
import {terser} from "rollup-plugin-terser";

export default {
  input: 'src/es-source.js',
  output: {
    file: 'dist/es-source.js',
    format: 'iife',
    name: 'mybundle',
  },
  plugins: [
    resolve(),
    terser(),
  ]
};
