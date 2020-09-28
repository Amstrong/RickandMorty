const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require("webpack");

module.exports = {
  entry: {
    app: path.resolve(__dirname, "src/index.js"),
    // entry: ["react-hot-loader/patch", "./src/index.js"],
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "js/[name].js",
    publicPath: "http://localhost:5000/",
    // publicPath:"http://localhost:5000/",
    chunkFilename: "js/[id].[chunkhash].js",
  },
  devServer: {
    contentBase: path.resolve(__dirname, "dist"),
    open: true,
    port: 9000,
    hot: true,
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
      {
        test: /\.(png|jpg|gif)$/i,
        use: {
          loader: "file-loader",
          options: {
            outputPath: "assets/",
          },
        },
      },
    ],
  },
  resolve: {
    extensions: ["*",".js", ".jsx"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "index.html"),
      
    }),
    new MiniCssExtractPlugin({
      filename: "css/[name].css",
      chunkFilename:"css/[id].css"
    }),
    new webpack.DllReferencePlugin({
      manifest: require("./modules-manifest.json"),
      context: path.resolve(__dirname,"src")
    }),
  ],
};
