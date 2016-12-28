const path = require('path');

module.exports = {
  entry: {
    popup: "./src/popup.js",
    background: "./src/background.js",
    app: "./src/app.js"
  },
  output: {
    path: path.join(__dirname, "dist"),
    filename: "[name].js"
  }
}
