const Webpack = require('webpack');
const Path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const extractCSS = new ExtractTextPlugin('[name].css');

const PATHS = {
  src: Path.resolve(__dirname, 'src'),
  dist: Path.resolve(__dirname, 'build')
}

module.exports = (env, argv) => {

  const isProd = argv.p

  return {
    context: PATHS.src,
    entry: {
      main: './index.tsx',
      vendor: [
        'react',
        'react-dom'
      ]
    },
    output: {
      path: PATHS.dist,
      publicPath: '/',
      filename: '[name].bundle.js'
    },
    devtool: isProd ? undefined : 'cheap-module-eval-source-map',
    target: 'web',
    resolve: {
      extensions: ['.js', 'jsx', '.ts', '.tsx'],
      // Fix webpack's default behavior to not load packages with jsnext:main module
      // https://github.com/Microsoft/TypeScript/issues/11677
      mainFields: ['browser', 'main']
    },
    module: {
      loaders: [
        // .ts, .tsx
        {
          test: /\.tsx?$/,
          use: isProd
            ? 'awesome-typescript-loader?module=es6'
            : [
              'react-hot-loader/webpack',
              'awesome-typescript-loader'
            ]
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader']
        },
        {
          test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
          loader: 'file-loader',
          options: {
            name: './fonts/[name].[hash].[ext]'
          }
        },
        // static assets
        { test: /\.html$/, use: 'html-loader' },
        { test: /\.png$/, use: 'url-loader?limit=10000' },
        { test: /\.jpg$/, use: 'file-loader' },
      ],
    },
    plugins: [
      new Webpack.DefinePlugin({
        'process.env.NODE_ENV': isProd === true ? JSON.stringify('production') : JSON.stringify('staging')
      }),
      new Webpack.HotModuleReplacementPlugin(),
      new Webpack.NamedModulesPlugin(),
      extractCSS,
      new HtmlWebpackPlugin(
        {
          inject: true,
          template: './index.html'
        }
      )
    ],
    devServer: {
      contentBase: PATHS.src,
      compress: true,
      hot: true,
      open: true,
      stats: {
        warnings: false
      },
    },
    node: {
      // workaround for webpack-dev-server issue
      // https://github.com/webpack/webpack-dev-server/issues/60#issuecomment-103411179
      console: true,
      fs: 'empty',
      net: 'empty',
      tls: 'empty',    
    }
  };
}