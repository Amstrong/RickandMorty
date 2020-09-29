const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require("webpack");

module.exports = {
  mode: 'development',
  entry: {
    app: [path.resolve(__dirname, "src/frontend/index.js"),'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=2000&reload=true'], 
    // entry: ["react-hot-loader/patch", "./src/index.js"],
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "assets/app.js",
    publicPath: "/",
    chunkFilename: "js/[id].[chunkhash].js",
  },
  devServer: {
    contentBase: path.resolve(__dirname, "dist"),
    open: true,
    port: 9000,
    hot: true,
    historyApiFallback: true,
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
      //   use: {
      //     loader: "file-loader",
      //     options: {
      //       outputPath: "assets/",
      //     },
      //   },
      // },
      {
        test:/\.(png|jpg|gif)$/i,
        use: [
          {
            "loader": "file-loader",
            options:{
              name: "assets/[hash].[ext]"
            }
          }
        ]
      }
    ],
  },
  resolve: {
    extensions: ["*", ".js", ".jsx"],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new MiniCssExtractPlugin({
      filename: "assets/app.css"
    }),
  ],
};
