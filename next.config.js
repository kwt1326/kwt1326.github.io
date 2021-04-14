const webpack = require('webpack');

module.exports = {
  future: {
    webpack5: true,
  },
  // webpack: (config, _options) => {
  //   config.plugins.push(new webpack.IgnorePlugin(/editor/));
  //   return config;
  // }
}