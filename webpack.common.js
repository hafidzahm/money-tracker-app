const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const loader = require('sass-loader');
const { postcss } = require('autoprefixer');

module.exports = {
    entry: {
        app: path.resolve(__dirname, 'src/js/index.js')
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    module:{
        rules: [
            {
                test: /\.(s[ac]ss)$/i,
                use: [
                    {
                        loader: 'style-loader',
                    },
                    {
                        loader: 'css-loader',
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                plugins: () => [require('autoprefixer')],
                            },
                        },
                    },
                    {
                        loader: 'sass-loader'
                    }
                ],
            },
        ],
    },
    pllugins: [
        new HtmlWebpackPlugin({
            title: 'Dashboard',
            filename: 'index.html',
            template: path.resolve(__dirname, 'src/views/index.html')
        }),

        new CleanWebpackPlugin()
    ],
};
