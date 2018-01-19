const path = require('path')
const webpack = require('webpack')
const WebpackNotifierPlugin = require('webpack-notifier')

module.exports = {
  entry: './resources/assets/js/example2.jsx',
  output: {
    path: path.resolve(__dirname, 'public/dist'),
    filename: 'app.js'
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: ['node_modules']
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: path.resolve(__dirname, 'node_modules'),
        loader: 'babel-loader'
      }
    ]
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
      test: /\.js$/,
      options: {
        babel: {
          presets: ['react'],
          plugins: ['transform-runtime']
        }
      }
    }),
    new WebpackNotifierPlugin({ alwaysNotify: true })
  ]
}
