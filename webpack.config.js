const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

let mode = 'development';
if (process.env.NODE_ENV?.trim() === 'production') {
  mode = 'production';
}

module.exports = {
  mode,
  entry: {
    jquery: path.resolve(__dirname, 'src', 'assets', 'libs', 'jquery.min.1.7.js'),
    'turn-js': {
      dependOn: 'jquery',
      import: path.resolve(__dirname, 'src', 'assets', 'libs', 'turn.min.js'),
    },
    main: {
      dependOn: 'turn-js',
      import: path.resolve(__dirname, 'src', 'main.js'),
    },
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    assetModuleFilename: 'assets/[hash][ext][query]',
  },
  devtool: 'source-map',
  devServer: {
    static: './dist',
    open: true,
    compress: true,
    port: 9000,
  },
  module: {
    rules: [
      {
        test: /\.(s[ac]|c)ss$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: { publicPath: '' },
          },
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: 'asset',
      },
      {
        test: /\.html$/i,
        loader: 'html-loader',
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve('src', 'index.html'),
    }),
  ],
  resolve: {
    extensions: ['.js'],
  },
};
