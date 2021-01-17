/**
 * webpack配置文件
 * 作用：指示webpack干活，当运行webpack指令时，会加载里面的配置
 */

// 所有的构建工具都是基于node的，模块化默认采用commentJS

// 引入path
const path = require('path')

module.exports = {
    // webpack配置

    // 入口文件
    entry: './src/index.js',

    // 输出地址
    output: {
        // 输出文件名
        filename: 'built.js',
        // 输出地址，使用绝对路径
        path: path.resolve(__dirname, 'build')
    },

    // loader的配置
    module: {
        rules: [
            // 详细的loader配置

            // 不同的文件需要配置不同的loader，如处理css与less就要分开
            {
                // 匹配那些文件
                test: /\.css$/,

                // 使用哪些loader
                //use数组的执行顺序： 从右向左，从下到上
                use: [

                    // 创建一个style标签，将js文件中的样式资源插入head标签中
                    'style-loader',

                    // 将css文件变成commentJS模块加载到js中，里面的内容是样式字符串
                    'css-loader'
                ]
            },

            {
                // 匹配那些文件
                test: /\.less$/,

                // 使用哪些loader
                //use数组的执行顺序： 从右向左，从下到上
                use: [
                    'style-loader',
                    'css-loader',
                    'less-loader',
                ]
            }     
        ]
    }, 

    // plugins配置
    // plugins: {
    //     //
    // },

    // mode 模式
    mode: 'development'
    // mode: 'production'
}