const path = require('path');

// 导入
const HtmlPlugin = require('html-webpack-plugin');
// 实例化
const htmlPlugin = new HtmlPlugin({
    template: './src/index.html',
    filename: './index.html'
})

module.exports = {
    mode: "development",
    entry: path.join(__dirname, './src/index.js'),
    output: {
        path: path.join(__dirname, './dist'),
        filename: 'bundle.js',
        // publicPath: '',
    },
    devServer: {
        // 需要添加才能访问
        static: {
            directory: __dirname,
        },
        // compress: true,
        port: 8080,
        open: true,
    },
    plugins: [htmlPlugin],
}