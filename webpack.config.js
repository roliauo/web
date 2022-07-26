const webpack = require('webpack');
const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const commitHash = require('child_process').execSync('git rev-parse --short HEAD').toString().trim();
const commitDate = require('child_process').execSync('git log -1 --date=format:"%Y%m%d" --format="%ad"').toString().trim();

const getEntry = () => {
    const entry = {};
    const apps = ['app_redux', 'shop'];
    entry['index'] = './src/index.tsx';
    apps.forEach((name) => {
        entry[name] = `./src/${name}/index.tsx`
    })
    return entry;
}

const config = {
    mode: 'production',
    devtool: 'source-map',
    entry: getEntry(),
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'js/[name]/bundle.js',
    },
    resolve: {
        alias: {
            '@shop': path.resolve(__dirname, './src/shop'),
        },
        extensions: ['.ts', '.tsx', '.js', '.json'],
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                loader: 'ts-loader',
            },
            {
                test: /\.jsx$|\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: '../../',
                        },
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                            //url: false,
                        },
                    }
                ],
            },
            {
                test: /\.(woff|woff2|eot|ttf|svg|cur)$/,
                //// copy file without url (css-loader url: false)
                use: {
                    loader: 'file-loader',
                    options: {
                        name: 'css/font/[name].[ext]'
                   }
                },

            },
            {
                test: /\.(png|jpeg|jpg|gif)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '[path][name].[ext]'
                   }
                },

            },
        ],
    },
    optimization: {
        minimizer: [
            new TerserPlugin({
                // cache: true,
                extractComments: true,
                parallel: true,
            }),
            new OptimizeCSSAssetsPlugin({}),
        ],
    },
    plugins: [
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: 'src/shop/data',
                    to: 'data/shop',
                },
                {
                    from: 'src/shop/media',
                    to: 'media/shop',
                },
                {
                    from: 'src/favicon.ico',
                    to: 'favicon.ico',
                },
            ]
        }),
        new MiniCssExtractPlugin({
            filename: 'css/[name]/style.css',
        }),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify(process.env.NODE_ENV),
                APP_VERSION: JSON.stringify(`${commitDate}-${commitHash}`),
                BUILD_DATE: JSON.stringify(new Date().toLocaleString()),
            },
        }),
    ],
};

// generate html files
Object.keys(config.entry).forEach((name) => {
    config.plugins.push(new HtmlWebpackPlugin({
        // template: `src/${name}/index.html`,
        template: `src/index.html`,
        filename: `${name}.html`,
        title: '&#8475;', //name[0].toUpperCase().concat(name.slice(1)),
        chunks:['js',`${name}`],
        minify: true
    }));
 });

module.exports = [config];