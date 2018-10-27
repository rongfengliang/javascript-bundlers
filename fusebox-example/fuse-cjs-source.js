const { FuseBox, QuantumPlugin } = require("fuse-box");

const fuse = FuseBox.init({
  homeDir: "src",
  target: "browser@es6",
  output: "dist/$name",
  plugins: [
    QuantumPlugin({
      uglify: true,
      treeshake: true,
      bakeApiIntoBundle: "cjs-source.js",
    }),
  ]
});

fuse
  .bundle("cjs-source.js")
  .instructions(" > cjs-source.js");

fuse.run();
