var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var autoprefixer = require('autoprefixer-core');
var cssnext = require('cssnext');     // package for future css syntax plugins
var csswring = require('csswring');   // minify css files

module.exports = {
    devtool: 'eval'//'eval-source-maps'
  , entry: {
      main: './src/app'
    , vendor: ['react']
    }
  , output: {
      path: path.join(__dirname, 'build')
    , publicPath: '/build/'
    , filename: '[name].bundle.js'
    }
  , resolve: {
      extensions: ['', '.js', '.jsx']
    }
  , module: {
      loaders: [
        {
          test: /\.jsx?$/
        , loaders: ['react-hot', 'babel']
        , include: path.join(__dirname, 'src')
        }
      , {
          test:   /\.css$/
        , loader: "style-loader!css-loader!postcss-loader"
        }
      // , { // pros: exports css to separate file, cons: no hot module replacement
      //     test: /\.css$/,
      //     loader: ExtractTextPlugin.extract("style-loader", "css-loader!postcss-loader")
      //   }
      ]
    }
  , plugins: [
      new webpack.HotModuleReplacementPlugin()
    , new webpack.NoErrorsPlugin()
    , new webpack.optimize.CommonsChunkPlugin(
        /* chunkName= */"vendor",
        /* filename= */"vendor.bundle.js")
    //, new ExtractTextPlugin("[name].css")
    ]
  , postcss: [autoprefixer(), cssnext(), csswring()]
  };
