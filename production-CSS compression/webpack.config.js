const { resolve } = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')

const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin')

process.env.NODE_ENV = "production"


/**
 * css代码压缩：optimize-css-assets-webpack-plugin插件
 */


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
        }),

        new OptimizeCssAssetsWebpackPlugin()
    ],

    mode: 'development'
}