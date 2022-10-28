const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  devServer: {
    historyApiFallback: true,
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.js",
    publicPath: "/",
  },
  resolve: {
    fallback: {
      fs: false,
      tls: "empty",
      child_process: false,
      util: require.resolve("util/"),
      buffer: require.resolve("buffer"),
      assert: require.resolve("assert/"),
      http: require.resolve("stream-http"),
      path: require.resolve("path-browserify"),
      https: require.resolve("https-browserify"),
      os: require.resolve("os-browserify/browser"),
      stream: require.resolve("stream-browserify"),
      crypto: require.resolve("crypto-browserify"),
      "crypto-browserify": require.resolve("crypto-browserify"),
    },
    alias: {
      react: path.resolve("./node_modules/react"),
    },
  },
  context: __dirname,
  entry: ["babel-polyfill", "./src/index.js"],

  resolve: {
    extensions: [".js", ".jsx"],
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
          },
        ],
      },
      {
        use: ["style-loader", "css-loader", "sass-loader"],
        test: /.(css|sass|scss)$/,
      },
      {
        type: "asset",
        test: /\.(svg|jpg|png|mp4|webp)$/,
      },
    ],
  },
  plugins: [
    new htmlWebpackPlugin({
      template: "./public/index.html",
      filename: "./index.html",
    }),
  ],
};
