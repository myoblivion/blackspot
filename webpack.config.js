const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: ["babel-polyfill", "./src/index.js"],
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "build.js",
    },
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
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader",
                ],
                test: /.(css|sass|scss)$/,
            },
            {
                type: "images",
                test: /\.(gif|svg|jpg|png)$/,
                use: {
                    loader: "file-loader"
                  },
            },
            
        ],
    },
    devServer: {
        historyApiFallback: true,
    },
    plugins: [
        new htmlWebpackPlugin ({
            template: "./public/index.html",
            filename: "./index.html",
        }),
    ],
};