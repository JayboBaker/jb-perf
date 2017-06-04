const webpack = require('webpack')
const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const CompressionPlugin = require('compression-webpack-plugin')

const isDev = process.env.NODE_ENV === 'development'

const config = {
  context: path.join(__dirname),
  entry: {
    app: path.join(__dirname, 'src/index.js')
  },

  output: {
    filename: isDev ? '[name].bundle.js' : '[name]-[chunkhash:6].bundle.min.js',
    path: path.join(__dirname, 'dist')
  },

  resolve: {
    modules: ['node_modules'],
    extensions: ['.scss', '.js', '.json']
  },

  devtool: isDev ? 'cheap-module-eval-source-map' : 'cheap-source-map',

  devServer: {
    contentBase: path.join(__dirname, '/src'),
    watchContentBase: true // Allows autoreload on any file changes in contentBase
  },

  module: {
    rules: [
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract({
          use: ['css-loader', 'postcss-loader', 'sass-loader']
        }),
        include: path.join(__dirname, 'src/'),
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({
          use: ['postcss-loader', 'css-loader']
        }),
        include: path.join(__dirname, 'src/'),
        exclude: /node_modules/
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  },

  plugins: [
    new ExtractTextPlugin({
      filename: isDev ? 'index.min.css' : 'styles-[chunkhash:6].min.css'
    }),
    new HtmlWebPackPlugin({
      title: 'jb-perf',
      template: './src/index.html'
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    })
  ]
}

if (!isDev) {
  config.plugins.push(
    new webpack.optimize.UglifyJsPlugin({
      mangle: true,
      sourceMap: true,
      comments: false,
      compress: {
        warnings: false,
        screw_ie8: true,
        drop_console: true,
        drop_debugger: true
      },
      output: {
        comments: false
      }
    }),
    new CompressionPlugin()
  )
}

module.exports = config
