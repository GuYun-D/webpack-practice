var {resolve} = require('path'); //  引入node一个名为path的核心模块

module.exports = {
    mode: 'development', //  设置模式为开发模式
    entry: './src/index.js', //  入口文件，即被打包的文件，加载项目时会首先加载该文件    
    output: {
        path: resolve(__dirname, './build'), 
        //  path后面必须是绝对路径，调用模块resolve方法生成dist文件夹，用来存放打包后的文件；
        //  __dirname代指webpack.config.js当前所在项目路径
        filename: 'built.js' //  输出文件，即打包后生成的文件，该文件名可自定义
    }
};