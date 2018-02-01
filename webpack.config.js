const path = require('path')
const webpack = require('webpack')

// Plugins
const WebpackNotifierPlugin = require('webpack-notifier')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  entry: ['./resources/assets/js/main.js', './resources/assets/sass/main.scss'],
  output: {
    path: path.resolve(__dirname, 'public/dist'),
    filename: '[name].js',
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
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [{
            loader: 'css-loader'
          }, {
            loader: 'sass-loader',
            options: {
              includePaths: [path.resolve('./node_modules/bootstrap/scss')]
            }
          }]
        })
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin({
      filename: '[name].css',
      allChunks: true
    }),
    new webpack.LoaderOptionsPlugin({
      test: /\.js$/,
      options: {
        babel: {
          presets: ['react'],
          plugins: ['transform-runtime']
        }
      }
    }),
    new WebpackNotifierPlugin({ alwaysNotify: true }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery',
      Popper: ['popper.js', 'default'],
      // In case you imported plugins individually, you must also require them here:
      Util: 'exports-loader?Util!bootstrap/js/dist/util',
      Dropdown: 'exports-loader?Dropdown!bootstrap/js/dist/dropdown'
    })
  ]
}
