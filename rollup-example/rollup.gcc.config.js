import resolve from 'rollup-plugin-node-resolve';
import compiler from '@ampproject/rollup-plugin-closure-compiler';

export default {
  input: 'src/main-es.js',
  output: {
    file: 'dist/bundle-es-gcc.js',
    format: 'iife',
    name: 'mybundle',
  },
  plugins: [
    resolve(),
    compiler({
      compilation_level: "ADVANCED_OPTIMIZATIONS",
      language_out: "ECMASCRIPT_2015",
    }),
  ]
};
