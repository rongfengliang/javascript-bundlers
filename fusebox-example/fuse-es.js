const { FuseBox, QuantumPlugin } = require("fuse-box");

const fuse = FuseBox.init({
  homeDir: "src",
  target: "browser@es6",
  output: "dist/$name",
  plugins: [
    QuantumPlugin({
      uglify: true,
      treeshake: true,
      bakeApiIntoBundle: "es.js",
    }),
  ]
});

fuse
  .bundle("es.js")
  .instructions(" > es.js");

fuse.run();
