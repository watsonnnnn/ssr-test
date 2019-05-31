const webpack = require('webpack')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.base.config.js')
const VueSSRClientPlugin = require('vue-server-renderer/client-plugin')
const path = require('path');

module.exports = merge(baseConfig, {
  mode: 'development',
  entry: path.join(__dirname, '../entry-client.js'),
  optimization:{
    runtimeChunk: {
      name: 'manifest'
    },
  },
  plugins: [
    new VueSSRClientPlugin()
  ]
})