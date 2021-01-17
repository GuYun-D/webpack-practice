/**
 * loader: 下载，使用（配置loader）
 * plugin: 下载，引入，使用
 */

const {resolve} = require('path')

// 引入插件
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './src/index.js',

    output: {
        filename: 'built.js',
        path: resolve(__dirname, 'build')
    },

    module: {
        rules: [
            
        ]
    },

    plugins: [
        // 插件配置
        // html-webpack-plugin
        // 功能：默认创建一个空的HTML文件，自动引入打包输出的资源,输出是没有结构的
        // 
        new HtmlWebpackPlugin({
            // 复制src文件，让其有结构
            template: './src/index.html'
        })
    ],

    mode: 'development'
}