var path = require("path");

module.exports = {
  context: __dirname,
  entry: "main.jsx",
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
      },
      {
        test: /\.scss$/,
        loaders: ["style-loader", "css-loader", "sass-loader"]
      }
    ]
  },
  sassLoader: {
    includePaths: [path.resolve(__dirname, "./assets/sass/main")]
  },
  devtool: 'source-map',
  resolve: {
    extensions: ["", ".js", ".jsx" ],
    alias: { clipboard: 'clipboard/lib/clipboard' }
  },
  devServer: { inline: true }
};
