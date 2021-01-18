const { resolve } = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')

/**
 * mini-css-extract-plugin插件，提取css
 * mini-css：
 */
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    entry: './src/js/index.js',

    output: {
        filename: 'js/built.js',
        path: resolve(__dirname, 'build')
    },

    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    // 取代style-loader，作用: 提取js中的css成单独文件
                    MiniCssExtractPlugin.loader,
                    // 将css文件整合到js文件中
                    'css-loader'
                ]
            }
        ]
    },

    plugins: [
        new htmlWebpackPlugin({
            template: './src/index.html'
        }),

        // 配置输出路径
        new MiniCssExtractPlugin({
            // 对输出文件重命名
            filename: 'css/built.css'
        })
    ],

    mode: 'production'
}