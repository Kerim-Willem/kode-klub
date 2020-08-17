var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'src/public');
var APP_DIR = path.resolve(__dirname, 'src/pages');

var config = {
  entry: './pages/index.js',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
   module: {
        rules: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader?cacheDirectory=true',
            }
        }]
    }
};

module.exports = config
