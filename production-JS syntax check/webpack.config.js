const { resolve } = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')

/**
 * 语法检查：eslint-loader, 还要依赖eslint
 */

// 设置node.js的环境变量
// process.env.NODE_ENV = "production";

module.exports = {
    entry: './src/index.js',

    output: {
        filename: 'js/built.js',
        path: resolve(__dirname, 'build')
    },

    module: {
        rules: [
            {
                // 语法检查,eslint-loader, 还要依赖eslint
                //     注意：只检查自己写的，第三方库不用检查
                // 设置检查规则
                //    ppackage.json中，eslintConfig中设置
                //          "eslintConfig": {
                //              "extent": "airbnb-base"
                //          }
                //    airbnb要下载的包：eslint-config-airbnb-base（不含有react），eslint，eslint-plugin-import
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'eslint-loader',
                options: {
                    // 设置自动修复eslint错误
                    // fix: true
                }

            }
        ]
    },

    plugins: [
        new htmlWebpackPlugin({
            template: './src/index.html'
        })
    ],

    mode: 'development'
}