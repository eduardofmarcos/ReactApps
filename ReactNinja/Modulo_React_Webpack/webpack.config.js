"use strict";

const path = require("path");
const webpack = require("webpack");
const HtmlPlugin = require("webpack-html-plugin");

module.exports = {
  devtool: "source-map",
  entry: [
    "react-hot-loader/patch",
    "webpack-dev-server/client?http://localhost:3000",
    "webpack/hot/only-dev-server",
    path.join(__dirname, "src", "index"),
  ],
  output: {
    path: path.join(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: "",
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlPlugin({
      title: "GitHub App ok",
      template: path.join(__dirname, "src", "html", "template.html"),
    }),
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        include: /src/,
        loader: "babel",
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        include: /src/,
        loaders: ["style", "raw"],
      },
    ],
  },
};
