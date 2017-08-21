var ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
    devtool: 'source-map',
    entry: './src/App.jsx',
    output: {
        filename: 'bundle.js'
    },
    devServer:{
        inline: true,
        historyApiFallback: true,
        contentBase: './public'
    },
    module: {
        loaders: [
            {
                test: /\.(js|jsx)$/,
                loader: 'babel-loader',
                exclude: /(node_modules)/,
                query: {
                    presets: ['es2015', 'react']
                }
            },
            {
               test: /\.scss$/,
               loader: ExtractTextPlugin.extract('css-loader!sass-loader')
            },
            {
                test: /\.css$/,
                loader: "style-loader!css-loader"
            },
            {
                test: /\.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
                loader: 'file-loader?name=../fonts/[name].[ext]'
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('main.css', {
            allChunks: true
        })
    ]
};
