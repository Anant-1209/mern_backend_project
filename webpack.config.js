const path = require('path');

module.exports = {
  entry: './index.js', // Update this path if your entry point is different
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  mode: 'development', // Change to 'production' for production builds
  resolve: {
    fallback: {
      "path": require.resolve("path-browserify"),
      "fs": require.resolve("browserify-fs")
    }
  }
};