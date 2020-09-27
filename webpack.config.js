const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const config = {
  entry: ["react-hot-loader/patch", "./src/index.js"],
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: "babel-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.styl$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "stylus-loader"],
      },
      // {
      //   test: /\.(png|jpg|gif)$/i,
      //   use: [
      //     {
      //       loader: "url-loader",
      //       options: {
      //         mimetype: "image/png",
      //       },
      //     },
      //   ],
      // },
      {
        test: /\.(png|jpg|gif)$/i,
        use: {
          loader: "file-loader",
          options: {
            outputPath: "assets/"
          }
        }
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"],
    alias: {
      "react-dom": "@hot-loader/react-dom",
    },
  },
  devServer: {
    contentBase: "./dist",
  },
  plugins: [
    new HtmlWebpackPlugin({
      appMountId: "app",
      filename: "index.html",
      // title: "Rick & Morty",
      // template: "src/index.html"
    }),
    new MiniCssExtractPlugin(),
  ],
};

module.exports = config;
