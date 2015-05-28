var path = require('path');
var gulp = require("gulp");
var gutil = require("gulp-util");
var webpack = require("webpack");
var WebpackDevServer = require("webpack-dev-server");
var webpackConfig = require("./webpack.config.js");

// The development server
gulp.task("default", ["copy", "webpack-dev-server"]);


// Production build (currently creates main.bundle.js into build-folder)
gulp.task("build", ["copy", "webpack:build"]);

gulp.task('copy', function(){
  gulp.src('./src/index.html')
    .pipe(gulp.dest('build'));
});

gulp.task("webpack:build", function(callback) {
  // modify some webpack config options
  var buildConfig = Object.create(webpackConfig);

  buildConfig.plugins = buildConfig.plugins.concat(
      new webpack.DefinePlugin({
        "process.env": {
          // This has effect on the react lib size
          "NODE_ENV": JSON.stringify("production")
        }
      })
    , new webpack.optimize.DedupePlugin()
    , new webpack.optimize.UglifyJsPlugin()
  );

  // run webpack
  webpack(buildConfig, function(err, stats) {
    if(err) throw new gutil.PluginError("webpack:build", err);

    // // stats.json for http://webpack.github.io/analyse/
    // require("fs").writeFileSync(
    //   path.join(__dirname, "/build/", "stats.json"),
    //   JSON.stringify(stats.toJson()));

    // gutil.log("[webpack:build]", stats.toString({
    //   colors: true
    // }));
    callback();
  });
});



// configure & start dev-server
gulp.task("webpack-dev-server", function(callback) {
  // modify some webpack config options
  var devConfig = Object.create(webpackConfig);
  devConfig.devtool = "eval-source-map";// or "eval"
  devConfig.debug = true;

  // Start a webpack-dev-server
  var server = new WebpackDevServer(webpack(devConfig), {
      contentBase: './build/'
    , publicPath: devConfig.output.publicPath
    , quiet: true
    , historyApiFallback: true
    , stats: {
      colors: true
    }
  });

  server.use('/', function(req, res) {
    res.sendFile(path.join(__dirname,'src/index.html'));
  })

  server.listen(8080, "localhost", function(err) {
    if(err) throw new gutil.PluginError("webpack-dev-server", err);
    gutil.log("[webpack-dev-server]", "http://localhost:8080/webpack-dev-server/index.html");
  });
});