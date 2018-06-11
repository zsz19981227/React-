const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const webpack = require("webpack");
const config = require("./config");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const OptimizeCSSPlugin = require("optimize-css-assets-webpack-plugin");
module.exports = {
    entry: config.base.entry,
    output: {
        path: config.base.outputPath,
        filename: "js/" + config.base.outputFileName,
        chunkFilename: "[id]-[name]-[hash].js"
    },
    module: {
        rules: [{
                test: /\.js|.jsx$/,
                use: [{
                    loader: "babel-loader",
                    options: config.babel
                }]
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader"
                })
            },
            {
                test: /\.less$/,
                use: [{
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader"
                    },
                    {
                        loader: "less-loader"
                    }
                ]
            },
            {
                test: /\.(jpg|png|gif|ttf|woff|eot|svg)$/,
                use: ["url-loader"]
            },
            {
                test: /\.html$/,
                use: ["html-loader"]
            }
        ]
    },
    resolve: {
        extensions: [".js", ".jsx", ".css"]
    },
    plugins: [
        new htmlWebpackPlugin({
            filename: "index.html",
            template: config.base.templatePath,
            minify: config.base.htmlMinify
        }),
        // new CopyWebpackPlugin([
        //     {
        //         from : path.resolve(__dirname,'../src/static'),
        //         to : config.base.outputPath+ "/static",
        //         ignore:[".*"]
        //     }
        // ]),
        new ExtractTextPlugin({
            filename: "css/[name].[contenthash].css",
            allChunks: true
        })
    ]
};