var webpack = require('webpack');

module.exports = {
  entry: ['./src/App.jsx'],
  output: {
    path: './lib/app/public',
    filename: 'app.js'
  },
  module: {
    loaders: [
      { test: /\.html$/, loader: "file?name=[name].[ext]"} ,
      { test: /\.css$/, loader: 'style!css' },
      { test: /\.js$/, loader: "babel-loader?stage=0", exclude: '/node_modules/' },
      { test: /\.jsx$/, loaders: ['jsx-loader', "babel-loader?stage=0"] }
    ]
  },
  plugins: []
};