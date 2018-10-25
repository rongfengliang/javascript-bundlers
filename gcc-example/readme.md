# Google Closure Compiler Example

A simple example showing how to use the GCC to bundle ES6 code to ES5 and ES6.

## Usage

- Make sure to have the latest Node 8 and Java 8 installed.
- Install gzip with `brew install gzip`
- Run `make` to bundle to dist and dist-gzip

## Project Structure

```
├── Makefile <-- contains build commands
├── conf     <-- contains GCC configuration flags
│   ├── es5.conf
│   └── es6.conf
├── dist    <-- contains the es6 and es6 bundles
│   ├── bundle-es5.js
│   └── bundle-es6.js
├── dist-gzip
│   ├── bundle-es5.js.gz
│   └── bundle-es6.js.gz
├── gcc    <-- contains the GCC binary
│   ├── COPYING
│   ├── README.md
│   ├── closure-compiler-v20181008.jar
│   └── help.txt
├── index.es6.html     <-- loads the es6 bundle from dist
├── index.html         <-- loads the es6 bundle from dist
├── package.json
├── readme.md
└── src    <-- contains the es6 source code
    ├── arith.js
    ├── main.js
    └── values.js
```
