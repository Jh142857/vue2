const path = require('path');

// 导入
const HtmlPlugin = require('html-webpack-plugin');
// 实例化
const htmlPlugin = new HtmlPlugin({
    template: './src/index.html',
    filename: './index.html'
})

const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    mode: "development",
    devtool: "nosources-source-map",
    entry: path.join(__dirname, './src/index.js'),
    output: {
        path: path.join(__dirname, './dist'),
        filename: 'js/bundle.js',
        // publicPath: '',
        // clean: true,
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
    plugins: [htmlPlugin,
        new CleanWebpackPlugin(),
    ],
    module: {
        rules: [
            { test: /\.css$/, use: ['style-loader', 'css-loader'] },
            { test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader'] },
            { test: /\.jpg|png|gif$/, use: 'url-loader?limit=800&outputPath=images' },
            { test: /\.js$/, use: 'babel-loader', exclude: /node_modules/ }
        ]
    }
}