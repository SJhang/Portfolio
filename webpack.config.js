var path = require("path");

module.exports = {
  context: __dirname,
  entry: "./lib/main.jsx",
  output: {
    path: path.join(__dirname, 'build'),
    filename: "bundle.js",
    devtoolModuleFilenameTemplate: '[resourcePath]',
    devtoolFallbackModuleFilenameTemplate: '[resourcePath]?[hash]'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015']
        }
      }
    ]
  },
  devtool: 'source-map',
  resolve: {
    extensions: ["", ".js", ".jsx" ],
    alias: {
      clipboard: 'dist/clipboard'
    }
  }
};
