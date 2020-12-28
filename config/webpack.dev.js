const paths = require('./paths')

const webpack = require('webpack')
const { merge } = require('webpack-merge')
const common = require('./webpack.common.js')

module.exports = merge(common, {
  // Set the mode to development or production
  // Установка режима разработки или продакшна
  mode: 'development',

  // Control how source maps are generated
  // Управление созданием карт источников
  devtool: 'inline-source-map',

  // Spin up a server for quick development
  // Запуск сервера для разработки
  devServer: {
	proxy: { // proxy URLs to backend development server
      '/api': 'http://localhost:8082'
    },
    historyApiFallback: true,
    contentBase: paths.build,
    open: true,
    compress: true,
    hot: true,
	host: 'localhost',
    port: 9000,
	disableHostCheck: true
  },

  plugins: [
    // Only update what has changed on hot reload
    // Обновлять только при "горячей" перезагрузке
    new webpack.HotModuleReplacementPlugin(),
  ],
})
