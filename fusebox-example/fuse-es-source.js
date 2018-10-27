const { FuseBox, QuantumPlugin } = require("fuse-box");

const fuse = FuseBox.init({
  homeDir: "src",
  target: "browser@es6",
  output: "dist/$name",
  plugins: [
    QuantumPlugin({
      uglify: true,
      treeshake: true,
      bakeApiIntoBundle: "es-source.js",
    }),
  ]
});

fuse
  .bundle("es-source.js")
  .instructions(" > es-source.js");

fuse.run();
