const path = require("path");

module.exports = {
  entry: path.resolve(__dirname, "./js/minesweeper.js"),
  output: {
    filename: "build/application.js"
  },
  devtool: "sourcemap"
};
