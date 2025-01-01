const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './index.js', // Update this path if your entry point is different
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  mode: 'development', // Change to 'production' for production builds
  module: {
    rules: [
      {
        test: /\.html$/,
        use: 'html-loader'
      }
    ]
  },
  resolve: {
    fallback: {
      "path": require.resolve("path-browserify"),
      "fs": require.resolve("browserify-fs"),
      "buffer": require.resolve("buffer/"),
      "stream": require.resolve("stream-browserify"),
      "util": require.resolve("util/"),
      "url": require.resolve("url/"),
      "assert": require.resolve("assert/"),
      "process": require.resolve("process/browser"),
      "crypto": require.resolve("crypto-browserify"),
      "http": require.resolve("stream-http"),
      "querystring": require.resolve("querystring-es3"),
      "os": require.resolve("os-browserify/browser"),
      "net": false,
      "tls": false,
      "zlib": require.resolve("browserify-zlib"),
      "vm": require.resolve("vm-browserify"),
      "child_process": false,
      "mock-aws-s3": false,
      "aws-sdk": false,
      "nock": false,
      "async_hooks": false
    }
  },
  plugins: [
    new webpack.IgnorePlugin({
      resourceRegExp: /^node-gyp$/,
      contextRegExp: /@mapbox\/node-pre-gyp/
    }),
    new webpack.IgnorePlugin({
      resourceRegExp: /^npm$/,
      contextRegExp: /@mapbox\/node-pre-gyp/
    })
  ]
};