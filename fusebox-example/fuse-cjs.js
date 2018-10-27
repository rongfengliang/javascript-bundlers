const { FuseBox, QuantumPlugin } = require("fuse-box");

const fuse = FuseBox.init({
  homeDir: "src",
  target: "browser@es6",
  output: "dist/$name",
  plugins: [
    QuantumPlugin({
      uglify: true,
      treeshake: true,
      bakeApiIntoBundle: "cjs.js",
    }),
  ]
});

fuse
  .bundle("cjs.js")
  .instructions(" > cjs.js");

fuse.run();
