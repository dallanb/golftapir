const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common');
const config = require('./config.dev.json')

module.exports = merge(common, {
    mode: 'development',
    devtool: 'eval',
    devServer: {
        contentBase: path.resolve(__dirname, 'dist'),
        port: 3000,
        public: 'local.techtapir.com:3000',
        historyApiFallback: true,
        https: true,
    },
    externals: {
        'Config': JSON.stringify(config)
    }
});
