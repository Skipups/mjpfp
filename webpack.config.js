const path = require('path');

module.exports = {
  mode: 'development',
  devtool: 'source-map',
  entry: path.join(__dirname, './src/calendar.js'),
  output: {
    path: path.join(__dirname, './static'),
  },
  module: {
    rules: [
      {
        exclude: /node_modules/,
        use: 'babel-loader',
      },
    ],
  },
};
