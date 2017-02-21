const path = require('path')

module.exports = {
    entry: './fe/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'fe', 'built')
    },
    module:{
        loaders:[
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader?presets[]=es2015',
            }
        ]
    }
}