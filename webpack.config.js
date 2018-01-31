const path = require('path')
const webpack = require('webpack')
const WebpackNotifierPlugin = require('webpack-notifier')

module.exports = {
  entry: './resources/assets/js/main.js',
  output: {
    path: path.resolve(__dirname, 'public/dist'),
    filename: 'app.js',
    publicPath: 'dist'
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: ['node_modules'],
    alias: {
      '@component': path.resolve(__dirname, './resources/assets/js/components')
    }
  },
  devtool: 'inline-source-map',
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        loaders: ['babel-loader'],
        exclude: /node_modules/
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
