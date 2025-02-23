const path = require('path')
const baseConfig = require('./webpack.base.js')
const {merge} = require('webpack-merge')
const serverConfig = {
    entry: './src/server',
    output: {
        filename: "server.js",
        path: path.resolve(__dirname, './dist'),
    },
}
module.exports = merge(baseConfig, serverConfig)