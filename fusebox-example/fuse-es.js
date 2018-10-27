const { FuseBox, QuantumPlugin } = require("fuse-box");

const fuse = FuseBox.init({
  homeDir: "src",
  target: "browser@es6",
  output: "dist/$name",
  plugins: [
    QuantumPlugin({
      uglify: true,
      treeshake: true,
      bakeApiIntoBundle: "bundle-es.js",
    }),
  ]
});

fuse
  .bundle("bundle-es.js")
  .instructions(" > main-es.js");

fuse.run();
