var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var FontAwesome = require('react-fontawesome');

var SoundPlayerComponents = require('react-soundplayer/components');
var SoundPlayerAddons = require('react-soundplayer/addons');

var PlayButton = SoundPlayerComponents.PlayButton;
var Progress = SoundPlayerComponents.Progress;

//icons are components too!
var SoundCloudLogoSVG = SoundPlayerComponents.Icons.SoundCloudLogoSVG

var SoundPlayerContainer = SoundPlayerAddons.SoundPlayerContainer;

var BUILD_DIR = path.resolve(__dirname, 'dist');
var APP_DIR = path.resolve(__dirname, 'src/client/app');
var STYLE_DIR = path.resolve(__dirname, 'src/client/styles');



var config = {
  entry: [
    APP_DIR + '/index.js',
    STYLE_DIR + '/main.less'
    ],
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js',
    sourceMapFilename: '[file].map'
  },
  devtool: 'eval',
  module: {
    loaders : [
      {
        test : /\.jsx?/,
        include : APP_DIR,
        exclude : /node_modules/,
        loaders : [
        'react-hot',
        'babel'
        ]
      },
      {
        test: /\.less$/,
        loader: ExtractTextPlugin.extract("style", "css?sourceMap!less?sourceMap"),
        include: STYLE_DIR
      },
      {
        test: /\.(woff|woff2|eot|ttf|svg)$/,
        loader: 'url?limit=100000&name=fonts/[name].[ext]',
        include: [
          APP_DIR,
          path.resolve(__dirname, 'node_modules/bootstrap/fonts')
        ]
      }
    ]

  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new ExtractTextPlugin("/styles/style.css", {allChuncks: false}),
    new HtmlWebpackPlugin({
      hash: true,
      filename: 'index.html',
      template: __dirname + '/index.html'
    })
  ]
};


module.exports = config;