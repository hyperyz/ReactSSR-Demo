const { watch } = require('fs')
const path = require('path')
const nodeExternals = require('webpack-node-externals')

module.exports = {
    mode: 'development',
    entry: './src/server',
    output: {
        filename: "server.js"
    },
    watch: true,
    target: 'node',
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src')
        },
        extensions: ['.js', '.jsx', ".css"]
    },
    externals: [nodeExternals()], // 不需要打包node_modules中的依赖
    module: {
        rules: [
            {
                test: /\.jsx?/,
                exclude: /node_modules/, // 不需要解析node_modules
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-react']
                        }
                    }
                ]
            }
        ]
    }
}