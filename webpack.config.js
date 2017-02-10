const path = require('path');

module.exports = {
    entry: path.resolve(__dirname + '/src'),

    output: {
        path: path.resolve(__dirname + '/dist'),
        filename: 'bundle.js',
        publicPath: '/static/'
    },

    module: {
        loaders: [
            {
                test: /\.html$/,
                loader: 'raw-loader'
            },
            {
                test: /\.js$/,
                exclude: /node_modules|bower_components/,
                loader: 'babel-loader'
            },

            {
                test: /\.s?css$/,
                loader: 'style-loader!css-loader!sass-loader'
            },
            {
                test   : /\.woff/,
                loader : require.resolve("url-loader") + '?prefix=font/&limit=10000&mimetype=application/font-woff&name=assets/[hash].[ext]'
            },
            {
                test   : /\.ttf/,
                loader : require.resolve("file-loader") + '?prefix=font/&name=assets/[hash].[ext]'
            },
            {
                test   : /\.eot/,
                loader : require.resolve("file-loader") + '?prefix=font/&name=assets/[hash].[ext]'
            },
            {
                test   : /\.svg/,
                loader : require.resolve("file-loader") + '?prefix=font/&name=assets/[hash].[ext]'
            }
        ]
    },

    devServer: {
        port: 8888,
        contentBase: path.resolve(__dirname + '/src')
    }
};