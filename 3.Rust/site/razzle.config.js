var path = require('path');

module.exports = {
  modify: config => {
    config.module.rules.map(obj => { obj.exclude && obj.exclude.push(/\.wasm$/); return obj; });
    config.module.rules.push({
      test: /\.wasm$/,
      include: path.resolve(__dirname, "src"), 
      loaders: ['wasm-loader'],
    });
    return config;
  },
};
