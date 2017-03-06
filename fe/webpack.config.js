const path = require('path')
const webpack = require('webpack');

module.exports = {
    entry: './fe/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'fe', 'built')
    },
    devtool: 'source-map',
    module:{
        loaders:[
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader?presets[]=es2015',
            }
        ]
    },
    plugins: [
    	new webpack.HotModuleReplacementPlugin(),
	],
    devServer:{
        publicPath: '/built/',
        contentBase: [__dirname, path.join(__dirname, 'public')],
        historyApiFallback: true,
        compress: true,
        port: 8080,
    }
}