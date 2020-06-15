const path = require('path');

module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/mpvue-calendar-diy/' : '/',
  configureWebpack: {
    context: path.resolve(__dirname, './'),
    entry: {
      app: './example/main.js'
    },
  },
  lintOnSave: process.env.NODE_ENV !== 'production'
};
