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

module.exports = {
  watchOptions: {
    aggregateTimeout: 200, // default: 200
    poll: 1000, // default: 1000
  },
  stats: {
    errorDetails: true,
  },
  entry: './src/index.js',  // required for electron-forge; match package.json
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      components: path.join(srcPath, 'components'),
      hooks: path.join(srcPath, 'hooks'),
      views: path.join(srcPath, 'views'),
      sass: path.join(srcPath, 'sass'),
      state: path.join(srcPath, 'state'),
    },
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
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
          },
        ],
      },
    ],
  },
};
