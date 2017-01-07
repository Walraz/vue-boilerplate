const webpack = require("webpack");
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const autoprefixer = require('autoprefixer');
const NODE_ENV = process.env.NODE_ENV;

const plugins = [];
let debug = false;

plugins.push(new webpack.DefinePlugin({
  'process.env': {
    'NODE_ENV': process.env.NODE_ENV
  }
}));

plugins.push(new HtmlWebpackPlugin({
  template: './app/index.html',
  minify: (NODE_ENV === 'production') ? {} : false,
  inject: false,
}));

plugins.push(new HtmlWebpackPlugin({
  filename: 'login/index.html',
  template: './app/pages/login/index.html',
  minify: (NODE_ENV === 'production') ? {} : false,
  inject: false,
}));

plugins.push(new HtmlWebpackPlugin({
  filename: '404/index.html',
  template: './app/pages/404/index.html',
  minify: (NODE_ENV === 'production') ? {} : false,
  inject: false,
}));

if (NODE_ENV === 'development') {
  plugins.push(new BrowserSyncPlugin({
    host: 'localhost',
    port: 8080,
    ghostMode: false,
    proxy: 'http://localhost:3000/',
  }))
  debug = true;
}

if (NODE_ENV === 'production') {
  plugins.push(new webpack.optimize.UglifyJsPlugin());
}

module.exports = {
  entry: {
    'main.js': './app/main.js',
    'login/script.js': './app/pages/login/script.js'
  },
  output: {
    path: './dist',
    filename: '[name]',
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel',
    }, {
      test: /\.vue$/,
      loader: 'vue',
    }, {
      test: /\.html$/,
      loader: 'html',
    }, {
      test: /\.scss$/,
      loader: 'style!css!postcss!sass',
    }, {
      test: /\.css$/,
      loader: 'style!css!postcss',
    }, ]
  },
  plugins,
  devtool: 'eval-cheap-module-source-map',
  debug,
  postcss: [autoprefixer],
  vue: {
    postcss: [autoprefixer]
  },
  resolve: {
    alias: {
      vue: 'vue/dist/vue.js'
    }
  }
};