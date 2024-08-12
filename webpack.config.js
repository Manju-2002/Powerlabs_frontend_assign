const webpack = require('webpack');

module.exports = {
  // other config options...
  plugins: [
    new webpack.ProvidePlugin({
      process: 'process/browser',
    }),
  ],
};
