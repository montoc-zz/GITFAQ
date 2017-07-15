const path = require('path');
const webpack = require('webpack');
const webpackEntries = require('./webpack.entries');
module.exports = {
  devtool: 'cheap-source-map',
  entry: webpackEntries,
  output: {
    path: path.join(__dirname, 'dist/'),
    filename: '[name].js',
    publicPath: '/static/'
  },
  plugins: [
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
      }
    ]
  }
}