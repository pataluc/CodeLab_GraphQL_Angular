var webpack = require('webpack');
var path = require('path');
var nodeExternals = require('webpack-node-externals');

module.exports = {
    entry:  ['./src/server.js'],
    target: 'node',
    externals: [nodeExternals()],
    output: {
            path: path.join(__dirname, 'dist/'),
            filename: 'server.js'
    },
    devtool: 'source-map',
    module: {
    rules: [
        {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
            options: {
            presets: ['es2015']
            }
        }
        }
    ]
    }
}