var webpack = require('webpack');
var TerserPlugin = require('terser-webpack-plugin');
const CircularDependencyPlugin = require('circular-dependency-plugin')

var pkg = require('../mivisin.package.json');
var year = new Date().getFullYear();
var banner = '\
\n\
 SIP version ' + pkg.version + '\n\
\n\n\n';

module.exports = function (env) {
  var mode = env.buildType === 'min' ? 'production' : 'none';
  var mainDir = __dirname + '/../';

  var entry = {};
  entry['mivisinsip' + (env.buildType === 'min' ? '.min' : '')] = mainDir + '/src/mivisinsip.ts';

  return {
    mode: mode,
    entry: entry,
    output: {
      path: mainDir + '/dist',
      filename: '[name].js',
      library: 'SIP',
      libraryTarget: 'umd',
      globalObject: 'this'
    },
    node: false,
    module: {
      rules: [
        {
          test: /\.ts$/,
          loader: "ts-loader",
          options: {
            compilerOptions: {
              "declaration": false,
              "declarationMap": false,
              "outDir": mainDir + "/dist"
            }
          }
        }
      ]
    },
    resolve: {
      extensions: ['.ts', '.d.ts', '.js'],
      extensionAlias: {
        '.js': ['.ts', '.js'],
        '.mjs': ['.mts', '.mjs']
      }
    },
    optimization: {
      minimizer: [
        new TerserPlugin({
          terserOptions: {
            output: {
              ascii_only: true
            }
          }
        })
      ]
    },
    plugins: [
      new CircularDependencyPlugin({
        // exclude detection of files based on a RegExp
        exclude: /a\.js|node_modules/,
        // add errors to webpack instead of warnings
        failOnError: true,
        // set the current working directory for displaying module paths
        cwd: process.cwd(),
      }),
      new webpack.BannerPlugin({
        banner: banner
      })
    ]
  };
}
