const path = require('path');
const webpack = require('webpack');
const webpackEntries = require('./webpack.entries');
module.exports = {
  devtool: 'cheap-module-source-map',
  entry: webpackEntries,
  output: {
    path: path.join(__dirname, 'dist/'),
    filename: '[name].js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        screw_ie8: true
      },
      comments: false,
      sourceMap: false
    }),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.OccurenceOrderPlugin()
  ],
  module: {
    preLoaders: [
      { 
        test: /\.json$/, 
        loader: 'json'
      }
    ],
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel'],
        exclude: /node_modules/,
        include: __dirname
      },
      {
        test: /\.scss$/,
        loaders: ["style", "css", "sass"],
        include: __dirname,
        exclude: /node_modules/,
      }
    ]
  }
}