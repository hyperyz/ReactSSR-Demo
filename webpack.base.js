const path = require('path')

module.exports = {
    mode: 'development',
    watch: true,
    target: 'node',
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src')
        },
        extensions: ['.js', '.jsx', ".css"]
    },
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