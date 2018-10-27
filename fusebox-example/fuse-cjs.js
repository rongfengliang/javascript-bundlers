const { FuseBox, QuantumPlugin } = require("fuse-box");

const fuse = FuseBox.init({
  homeDir: "src",
  target: "browser@es6",
  output: "dist/$name",
  plugins: [
    QuantumPlugin({
      uglify: true,
      treeshake: true,
      bakeApiIntoBundle: "bundle-cjs.js",
    }),
  ]
});

fuse
  .bundle("bundle-cjs.js")
  .instructions(" > main-cjs.js");

fuse.run();
