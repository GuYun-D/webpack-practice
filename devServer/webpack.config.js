const {resolve} = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'built.js',
        path: resolve(__dirname, 'build')
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },

            {
                // 打包其他资源
                // 除了html，css， js
                exclude: /\.(css|html|js)/, 

                loader: 'file-loader'
            }
        ]
    },

    plugins: [
        new htmlWebpackPlugin({
            template: './src/index.html'
        })
    ],

    mode: 'development',

    /**
     * 开发服务器devServer：用来自动化（自动编译，自动打开浏览器，自动刷新浏览器等）
     * 特点：只会在内存中编译打包，不会有任何输出
     * contentBase: 运行目录，项目构建后的路径
     * compress: 启动gzip压缩
     * post：端口号
     * open: 自动打开浏览器
     * 启动：npx webpack-dev-server
     */
    devServer:{
        contentBase: resolve(__dirname, 'build'),
        compress: true,
        port: 3000,
        open: true
    }
}