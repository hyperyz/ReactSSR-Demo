const path = require('path')
const baseConfig = require('./webpack.base.js')
const { CleanWebpackPlugin  } = require('clean-webpack-plugin')
const { merge } = require('webpack-merge')
const clientConfig = {
    devtool: 'source-map',
    entry: './src/client',
    output: {
        filename: "js/bundle.[hash:5].js",
        path: path.resolve(__dirname, './public'),
    },
    plugins: [
        new CleanWebpackPlugin ()
    ]
}
module.exports = merge(baseConfig, clientConfig)