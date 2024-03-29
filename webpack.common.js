const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');
const CompressionWebpackPlugin = require('compression-webpack-plugin');

module.exports = {
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/',
    },
    resolve: {
        extensions: ['.js', '.ts', '.tsx'],
        alias: {
            '@actions': path.resolve(__dirname, 'src/actions'),
            '@apps': path.resolve(__dirname, 'src/apps'),
            config: path.resolve(__dirname, 'src/config'),
            '@components': path.resolve(__dirname, 'src/components'),
            '@constants': path.resolve(__dirname, 'src/constants'),
            '@containers': path.resolve(__dirname, 'src/containers'),
            '@contexts': path.resolve(__dirname, 'src/contexts'),
            '@helpers': path.resolve(__dirname, 'src/helpers'),
            '@hooks': path.resolve(__dirname, 'src/hooks'),
            '@layouts': path.resolve(__dirname, 'src/layouts'),
            '@libs': path.resolve(__dirname, 'src/libs'),
            '@locale': path.resolve(__dirname, 'src/locale'),
            '@modules': path.resolve(__dirname, 'src/modules'),
            '@pages': path.resolve(__dirname, 'src/pages'),
            '@reducers': path.resolve(__dirname, 'src/reducers'),
            '@sagas': path.resolve(__dirname, 'src/sagas'),
            '@selectors': path.resolve(__dirname, 'src/selectors'),
            '@services': path.resolve(__dirname, 'src/services'),
            '@utils': path.resolve(__dirname, 'src/utils'),
            // 'Config':
        },
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: ['babel-loader'],
                exclude: /node_modules/,
            },
            {
                test: /\.html/,
                use: ['html-loader'],
            },
            {
                test: /\.(less|css)$/,
                use: [
                    {
                        loader: 'style-loader',
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                localIdentName: '[local]',
                            },
                        },
                    },
                    {
                        loader: 'less-loader', // compiles Less to CSS
                        options: {
                            lessOptions: {
                                // If you are using less-loader@5 please spread the lessOptions to options directly
                                modifyVars: {
                                    'primary-color': 'black',
                                    'text-color': 'fade(black, 85%)',
                                    'normal-color': 'rgba(0,0,0,0.2)',
                                    'link-color': '#1890ff',
                                    'input-placeholder-color':
                                        'fade(@primary-color, 30%)',
                                    'disabled-color': 'white',
                                    'disabled-bg': '@normal-color',
                                    'border-color-base': '@normal-color',
                                    'select-clear-background': 'transparent',
                                    'outline-fade': '10%',
                                    'table-border-color': 'rgba(0,0,0,0.05)',
                                    'border-color-split': 'rgba(0,0,0,0.05)',
                                    'picker-basic-cell-hover-with-range-color':
                                        'lighten(@primary-color, 35%)',
                                    'picker-border-color': 'rgba(0,0,0,0.05)',
                                    'picker-date-hover-range-border-color':
                                        'lighten(@primary-color, 20%)',
                                    '@calendar-border-color':
                                        'rgba(0,0,0,0.05)',
                                },
                                javascriptEnabled: true,
                            },
                        },
                    },
                ],
            },
            {
                test: /\.txt$/i,
                use: 'raw-loader',
            },
            {
                test: /\.json$/,
                loader: 'json-loader',
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                    {
                        loader: 'file-loader',
                    },
                ],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'public', 'index.html'),
        }),
        new Dotenv(),
        new LodashModuleReplacementPlugin(),
        new CompressionWebpackPlugin(),
        // new CopyWebpackPlugin({ patterns: [{ from: 'public' }] }),
    ],
    optimization: {
        splitChunks: {
            cacheGroups: {
                commons: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    chunks: 'all',
                },
            },
        },
        noEmitOnErrors: true, // NoEmitOnErrorsPlugin
        concatenateModules: true, //ModuleConcatenationPlugin
        minimize: true, // UglifyJSPlugin
    },
};
