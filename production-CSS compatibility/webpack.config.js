const { resolve } = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')



/**
 * css 兼容性处理postcss ----> postcss-loader
 *              postcss-preset-env: 帮助postcss识别某些环境，加载指定的配置，能够让兼容性精确到某一浏览器的版本
 *                                  帮助postcss找到package.json中的browserslist里面的配置，通过配置加载指定的css兼容性样式
 */
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
// 设置node.js的环境变量
process.env.NODE_ENV = "production"
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
                    MiniCssExtractPlugin.loader,
                    'css-loader',

                    /**
                     * css 兼容性处理postcss ----> postcss-loader
                     *              postcss-preset-env: 帮助postcss识别某些环境，加载指定的配置，能够让兼容性精确到某一浏览器的版本
                     */

                    // 使用loader默认配置
                    // 'post-loader'

                    // 修改loader默认配置
                    {
                        loader: 'postcss-loader',
                        options: {

                            
                            postcssOptions: {
                                ident: 'postcss',

                                //使用postcss插件
                                plugins: [
                                    // postcss的插件
                                    require('postcss-preset-env')()
                                ]

                            }
                        }
                    }
                ]
            }
        ]
    },

    plugins: [
        new htmlWebpackPlugin({
            template: './src/index.html'
        }),

        new MiniCssExtractPlugin({
            filename: 'css/built.css'
        })
    ],

    mode: 'development'
}