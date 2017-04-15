var webpack = require('webpack');
var path = require('path');

module.exports = {

  entry: {
      app: './src/app.js'
  },
  output: {
      filename: 'public/build/bundle.js',
      sourceMapFilename: 'public/build/bundle.map'
  },
  devtool: '#source-map',
  module: {
    loaders: [
        {
          loaders: 'babel-loader',
          exclude: /(node_modules)/,
          query: {
            presets: ['react', 'es2015']
          }
        }
    ]
  }
}