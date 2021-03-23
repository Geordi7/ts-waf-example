const {resolve, join} = require('path');

module.exports = {
  mode: 'development',
  entry: {
    'app': './src/index.ts',
  },
  output: {
    filename: '[name].js',
    path: resolve(__dirname, 'web/app/'),
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  module: {
    rules: [
      { test: /\.tsx?$/, loader: 'ts-loader' },
      { test: /\.js$/, use: ["source-map-loader"], enforce: "pre" }
    ]
  },
  devServer: {
    contentBase: join(__dirname, 'web'),
    publicPath: '/app/',
    watchContentBase: true,
    open: true,
    // open: 'Google Chrome',
  },
  devtool: 'source-map'
}
