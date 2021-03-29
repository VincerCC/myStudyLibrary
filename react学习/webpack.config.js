const path=require('path')
const htmlPlugin=require('html-webpack-plugin')
const theHtmlPlugin=new htmlPlugin({
    template:path.join(__dirname,'./src/index.html'),
    filename:'index.html'
})
module.exports={
    mode:"development",
    plugins:[
        theHtmlPlugin
    ],
    module:{
        // 第三方模块插件配置规则
        rules:[
            {test:/\.js|jsx$/,use:'babel-loader',exclude:/node_modules/},
            {test:/\.css$/,use:[
                {
                    loader: 'style-loader',
                },
                {
                    loader: 'css-loader',
                    options: {
                        modules: {//开启模块化，并且自定义类名
                            localIdentName: '[local]'
                        }
                    }
                }]
            }
        ]
    },
    resolve:{
        extensions:['.js','.jsx','.json'],//表示这几个文件后缀名可以省略
        alias:{
            '@':path.join(__dirname,'./src')
        }
    }
}