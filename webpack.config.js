//导入处理路径的模块
var path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = {
  mode: "development",
  entry: path.resolve(__dirname, "src/index.tsx"),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].bundle.js",
  },

  devServer: {
    contentBase: path.join(__dirname, "dist"),
    hot: true,
  },
  module: {
    rules: [
      // {
      //   test: /\.css$/,
      //   // use: ["style-loader", "css-loader"],
      //   use: [
      //     {
      //       loader: MiniCssExtractPlugin.loader,
      //     },
      //     "css-loader",
      //   ],
      // },
      {
        test: /\.(css|less)$/,
        exclude: /node_modules/,
        include: /src/,
        use: [
          { loader: 'style-loader' },
          {
            loader: "css-loader",
            options: {
      
       
              modules: true,
            },
          },
          {
            loader: "less-loader",
          
          },
        ],
      },
      {
        test: /\.(css|less)$/,
        exclude: /src/,

        use: [
          { loader: 'style-loader' },
          {
            loader: "css-loader",
          },
          {
            loader: "less-loader",
          
          },
        ],
      },
      {
        test: /\.js(x?)$/,
        loader: "babel-loader",
        exclude: path.resolve(__dirname, "node_modules"),
      },
      {
        test: /\.ts(x?)$/,
        use: ["babel-loader", "ts-loader"],
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js"],
    alias: {
      "@": path.join(__dirname, "./src"),
    },
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css",
    }),
    new HtmlWebpackPlugin({
      template: "src/index.html",
      filename: "index.html",
      chunks: ["main"],
      inject: true,
    }),
  ],
};
