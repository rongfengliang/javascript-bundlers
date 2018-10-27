const { FuseBox, QuantumPlugin } = require("fuse-box");

const fuse = FuseBox.init({
  homeDir: "src",
  target: "browser@es6",
  output: "dist/$name",
  plugins: [
    QuantumPlugin({
      uglify: true,
      treeshake: true,
      bakeApiIntoBundle: "bundle-req.js",
    }),
  ]
});

fuse
  .bundle("bundle-req.js")
  .instructions(" > main-req.js");

fuse.run();
