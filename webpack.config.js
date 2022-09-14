const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");


module.exports = {
    mode: "development",
    devtool: "inline-source-map",
    entry: "./src/index.ts",
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js',
        chunkFilename: '[name].chunk.js'
    },
    resolve: {
      // Add `.ts` and `.tsx` as a resolvable extension.
      extensions: [".ts", ".tsx", ".js"]
    },
    module: {
      rules: [
        // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
        { test: /\.tsx?$/, loader: "ts-loader" }
      ]
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                commons: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    chunks: 'all',
                    filename: '[name].bundle.js'
                }
            }
        }
    },
    plugins: [
        new CleanWebpackPlugin({
            root: path.resolve(__dirname, "../")
        }),
        // new webpack.DefinePlugin({
        //     CANVAS_RENDERER: JSON.stringify(true),
        //     WEBGL_RENDERER: JSON.stringify(true)
        // }),
        new HtmlWebpackPlugin({
            template: "./index.html"
        })
    ]
  };