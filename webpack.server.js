const path = require('path');
const nodeExternals= require('webpack-node-externals');


module.exports = {
  target: 'node',
  mode: 'development',
  entry: './app.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },
  externals: [nodeExternals()],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  }
  
}




