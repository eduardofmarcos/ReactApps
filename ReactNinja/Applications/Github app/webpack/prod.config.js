'use strict'

const common = require('./common')

const path = require('path')
const webpack = require('webpack')
const HtmlPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const crp = new ExtractTextPlugin('crp.css')
const styles = new ExtractTextPlugin('[name]-[hash].js.css')

module.exports = {
  entry: common.entry,
  output: common.output,

  plugins: [
    crp,
    styles,

    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),

    new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false }
    }),

    new webpack.optimize.DedupePlugin(),

    new webpack.optimize.OccurrenceOrderPlugin(),

    new HtmlPlugin(common.htmlPluginConfig('template.html'))
  ],
  module: {
    preLoaders: [common.standardPreLoader],

    loaders: [
      common.jsLoaders,
      Object.assign(
        {},
        common.cssLoader,
        {},
        {
          loaders: undefined,
          loader: crp.extract.apply(ExtractTextPlugin, common.cssLoader.loaders)
        }
      )
    ]
  },

  resolve: common.resolve
}
