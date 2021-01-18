const {resolve} = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { options } = require('less')

module.exports = {
    entry: './src/index.js',

    output: {
        filename: 'built.js',
        path: resolve(__dirname, 'build')
    },

    module: {
        rules: [
            {
                test: /\.less$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'less-loader'
                ]
            },

            {
                // 处理图片资源
                test: /\.(png|gif|jpg)$/,

                // 如果只使用一个loader，直接写loader
                // 需要下载两个包
                // url-loader要依赖file-loader, 处理样式文件中的图片
                loader: 'url-loader',
                
                /**
                 * 配置options
                 * 1.limit: 图片大小小于8kb, 就会被base64处理
                 * 优点：减少请求数量，减轻服务器压力
                 * 缺点；图片体积会更大，文件请求速度变慢
                 * 
                 * 问题： 配合html-loader时（5可能修复了），url-loader默认使用es6模块化解析，html-loader使用的是commentJS
                 * 解析时会出现问题：图片地址变成[object module]
                 * 解决：关闭url-loader的es6模块化，使用commentJS
                 * 
                 * 给图片重命名
                 * [hash：10]：取图片的hash值签时位
                 * [ext]:取原图片的扩展名
                 * 名字太长，体积可能会大
                 */
                options: {
                    limit: 8 * 1024,
                    esMoudle: false,
                    name: '[hash:10].[ext]'
                }

                /**
                 * 打包完成之后，在build文件中只输出了两张图片，因为vue图片被编码了
                 * 这个loader默认处理不了HTML文件中的img图片，要相处理HTML中的图片，再写一个loader
                 */
            },

            {
                test: /\.html$/,

                // html-loader: 处理HTML文件中的img图片（负责引入img，从而被url-loader处理）
                loader: 'html-loader'
            }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ],

    mode: 'development'
}