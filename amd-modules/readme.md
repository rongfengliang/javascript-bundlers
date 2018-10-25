# Loading AMD Modules with RequireJS

RequireJS is an AMD loader that allows you to load AMD modules. This kind of
setup is usually for development. Bundling can be done either using a tool like
Webpack or `r.js`.

```
├── arith.js
├── index.html
├── main.js <-- the main module
├── readme.md
├── require.2.3.6.js <-- runtime, usually loaded through a CDN
└── values.js
```
