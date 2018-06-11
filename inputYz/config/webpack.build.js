const path = require("path");

const webpack = require("webpack");
const config = require("./config");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const merge = require("webpack-merge");
const baseWebpack = require("./webpack.base.js");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = merge(baseWebpack, {
    devtool: config.build.devtool,
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: "common.js",
            filename: "js/common.js"
        }),
        new UglifyJsPlugin({
            uglifyOptions: {
                include: /\/src/,
                compress: {
                    warnings: false
                },
                sourceMap: config.build.uglifyJsSourceMap,
                parallel: true
            }
        })
    ]
});