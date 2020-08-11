const ServiceWorkerWebpackPlugin = require('serviceworker-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const copyPlugin = require('copy-webpack-plugin');
const path = require('path');

module.exports = {
  entry: {
    main: './src/index.js',
    materialize: './src/materialize.js',
    teamDetail: './src/team-detail.js',
  },
  module: {
    rules: [
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts/',
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/template.html',
      chunks: ['main', 'materialize'],
    }),
    new HtmlWebpackPlugin({
      template: './src/team-detail.html',
      chunks: ['teamDetail', 'materialize'],
      filename: 'team-detail.html',
    }),
    new copyPlugin({
      patterns: [
        { from: 'src/manifest.json', to: 'manifest.json' },
        { from: 'src/img', to: 'img' },
        { from: 'src/pages', to: 'pages' },
        { from: 'src/nav.html', to: 'nav.html' },
      ],
    }),
    new ServiceWorkerWebpackPlugin({
      entry: path.join(__dirname, 'src/service-worker.js'),
    }),
  ],
};
