'use strict';

const path = require('path');

const DIST_DIR = path.resolve(__dirname + '/dist');
const APP_DIR = path.resolve(__dirname + '/app');

const HtmlPlugin = require('html-webpack-plugin');
const webpack = require('webpack'); 

module.exports = function (env) {
    return {
        devServer: {
            inline: true
          , contentBase: DIST_DIR
          , port: 5151 
        },
        module: {
            loaders: [
                {
                    test: /\.jsx?$/,
                    loader: 'babel-loader',
                    exclude: /node_modules/,
                    query: {
                        presets: ['es2015']
                    }
                }
            ],
        },
        plugins: [
            new HtmlPlugin({ title: 'CustomTitle', 
                                template: APP_DIR + '/index.html', 
                                inject: 'body' })
        ],
        entry: APP_DIR + '/index.js',
        output: {
            path: `${__dirname}/dist`,
            filename: 'bundle.js'
        }
    }
};

