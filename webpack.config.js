const path = require('path');

module.exports = {
  entry : './js/app.js',
  output : {
    path : path.join(__dirname, 'public'),
    filename : 'bundle.js'
  },
  devtool: 'source-map',
  module : {
    loaders : [
      {
        test : /\.js$/,
        exclude : /node_modules/,
        loader : 'babel-loader'
      }
    ]
  }

};
