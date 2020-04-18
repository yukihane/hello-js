const path = require("path");

module.exports = {
  target: "electron-renderer",
  entry: "./ts/index.tsx",
  cache: true,
  mode: "development",
  devtool: "source-map",
  output: {
    path: path.join(__dirname, "dist"),
    filename: "index.js",
  },
  module: {
    rules: [
      {
        // 正規表現で指定する
        // 拡張子 .ts または .tsx の場合
        test: /\.tsx?$/,
        // ローダーの指定
        // TypeScript をコンパイルする
        use: "ts-loader",
      },
      {
        // 拡張子 .ts または .tsx の場合
        test: /\.tsx?$/,
        // 事前処理
        enforce: "pre",
        // TypeScript をコードチェックする
        loader: "tslint-loader",
        // 定義ファイル
        options: {
          configFile: "./tslint.json",
          // airbnb というJavaScriptスタイルガイドに従うには下記が必要
          typeCheck: true,
        },
      },
    ],
  },
  // 処理対象のファイルを記載する
  resolve: {
    extensions: [
      ".ts",
      ".tsx",
      ".js", // node_modulesのライブラリ読み込みに必要
    ],
  },
};
