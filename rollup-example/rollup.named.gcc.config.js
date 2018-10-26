import resolve from 'rollup-plugin-node-resolve';
import compiler from '@ampproject/rollup-plugin-closure-compiler';

export default {
  input: 'src/main.js',
  output: {
    file: 'dist/bundle-named-gcc.js',
    format: 'iife',
  },
  plugins: [
    resolve(),
    compiler({
      compilation_level: "ADVANCED_OPTIMIZATIONS",
      language_out: "ECMASCRIPT_2015",
    }),
  ]
};
