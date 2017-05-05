const path = require("path");
const webpack = require("webpack");

const nodeEnv = process.env.NODE_ENV || 'development';
const isProduction = nodeEnv === 'production';
const ExtractTextPlugin = require("extract-text-webpack-plugin");

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
      },
      {
        test: /\.scss$/,
        exclude:/node_modules/,
        include: path.resolve(__dirname, './style'),
        loader: ExtractTextPlugin.extract(
          'style-loader?sourceMap!css-loader?sourceMap!scss-loader?sourceMap'
        )
      }
    ]
  },
  devtool: 'source-map',
  resolve: {
    extensions: ["", ".js", ".jsx" ],
    alias: { clipboard: 'clipboard/lib/clipboard' }
  },
  plugins:[
    new ExtractTextPlugin('style/main.scss')
  ],
  sassLoader: {
    includePaths: ['style/sass']
  },
  devServer: { inline: true }
};
