const webpack = require('webpack');
const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  // webpack: (config, _options) => {
  //   config.plugins.push(new webpack.IgnorePlugin(/editor/));
  //   return config;
  // }
  // assetPrefix: isProd ? `/${name}/` : '',
}