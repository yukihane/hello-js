const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/contentScript.ts",
  devtool: "inline-source-map",
  plugins: [new CopyWebpackPlugin([{ from: "public" }])],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  output: {
    filename: "contentScript.js",
    path: path.resolve(__dirname, "build"),
  },
};
