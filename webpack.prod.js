const webpack = require('webpack');
const {merge} = require('webpack-merge');
const common = require('./webpack.common');
const config = require('./config.prod.json');

module.exports = merge(common, {
    mode: 'production',
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production'),
        }),
        // ['transform-remove-console', { exclude: ['error', 'warn'] }],
    ],
    externals: {
        'Config': JSON.stringify(config)
    }
});
