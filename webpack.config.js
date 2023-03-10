const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development", //production
  entry: {
    main: path.resolve(__dirname, "src/main.js"),
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[contenthash].js",
    assetModuleFilename: "[name][ext]",
    clean: true,
  },
  devtool: "inline-source-map",
  devServer: {
    open: true,
    hot: true,
  },

  // loaders
  module: {
    rules: [
      // css
      { test: /\.css$/, use: ["style-loader", "css-loader"] },

      // images
      { test: /\.(png|svg|jpg|jpeg|gif)$/i, type: "asset/resource" },

      // js for babel
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },

  // plugins
  plugins: [
    new HtmlWebpackPlugin({
      title: "Todo List",
      filename: "index.html",
      template: path.resolve(__dirname, "src/temp.html"),
    }),
  ],
};
