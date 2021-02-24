const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const OptimizePlugin = require("optimize-plugin");

module.exports = {
    mode: "development",
    output: {
        path: path.resolve(__dirname, "build"),
        filename: "bundle.js",
    },
    resolve: {
        modules: [path.join(__dirname, "src"), "node_modules"],
        alias: {
            react: path.join(__dirname, "node_modules", "react"),
        },
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader"
                    },
                ]
            },
        ]
    },
    plugins: [
        new OptimizePlugin(),
        new HtmlWebpackPlugin({ template: "./src/index.html" }),
    ],
};