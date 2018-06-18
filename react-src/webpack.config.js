const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require('path');

module.exports = {
  entry: './index.jsx',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, '../public'),
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: "style-loader"
          }, 
          {
            loader: "css-loader"
          }, 
          {
            loader: "sass-loader"
          }
        ]
      },
      {
        test: /\.(jpg|png|gif|svg|pdf|ico)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: './images/[hash:8].[ext]'
            },
          },
          // {
          //   loader: 'image-webpack-loader',
          //   options: {
          //     bypassOnDebug: false,
          //     pngquant: {
          //       quality: '50',
          //       speed: 10
          //     },
          //   },
          // },
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./index.html",
      filename: "./index.html"
    })
  ],
  devServer: {
    contentBase: path.resolve(__dirname, '../public'),
    publicPath: '/'
  }
};