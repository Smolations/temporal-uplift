const path = require('path');

const {
  cssRules,
  scssRules,
} = require('./webpack/rules');

const srcPath = path.resolve(__dirname, 'src');


const babelLoader = {
  loader: 'babel-loader',
  options: {
    cacheDirectory: true,
  },
};

/**
 * this config is meant to contain the node code needed to spin
 * up the electron app. it is the go-between for the webapp and
 * the native app.
 *
 * @see https://github.com/electron-userland/electron-forge/blob/a2de8ea5ec7d66725cd20ef8dabbd727843b52a3/packages/plugin/webpack/src/WebpackPlugin.ts
 */

module.exports = {
  // watchOptions: {
  //   aggregateTimeout: 200, // default: 200
  //   poll: 1000, // default: 1000
  // },
  stats: {
    errorDetails: true,
  },
  entry: './main.js',  // default
  resolve: {
    extensions: ['.js'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: babelLoader,
      },
      {
        test: /\.mdx?$/,
        use: [
          babelLoader,
          {
            loader: '@mdx-js/loader',
            /** @type {import('@mdx-js/loader').Options} */
            options: {}
          }
        ]
      },
      // treat normal css as normal css
      ...cssRules,
      ...scssRules,
      {
        test: /\.(png|jpe?g|gif|svg|eot|ttf|woff|woff2)$/i,
        // More information here https://webpack.js.org/guides/asset-modules/
        type: "asset",
      },
      {
        test: /\.ejs$/,
        loader: 'ejs-loader',
        options: {
          esModule: false,
        },
      },
      // {
      //   test: /\.html$/,
      //   use: [
      //     {
      //       loader: 'html-loader',
      //     },
      //   ],
      // },
    ],
  },
};
