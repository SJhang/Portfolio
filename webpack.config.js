const path = require("path");

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
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        }
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader', options: { sourceMap: true }},
          { loader: 'sass-loader',
            options: {
              sourceMap: true,
              includePaths: [path.resolve(__dirname, 'assets')]
            }
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: [".js", ".jsx", "*" ],
    alias: { clipboard: 'clipboard/lib/clipboard' }
  },
  devtool: 'source-map'
};
