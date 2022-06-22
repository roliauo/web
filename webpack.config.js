const webpack = require('webpack'); 
const path = require('path');
//const CopyWebpackPlugin = require('copy-webpack-plugin'); 
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin'); 
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); 
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

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
            '@app': path.resolve(__dirname, './src/app'), 
            //'@common': path.resolve(__dirname, './src/common_modules'), 
        }, 
        extensions: ['.ts', '.tsx', '.js', '.json'], 
    },
    /*node: { 
        fs: 'empty', 
    }, */
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
                        }, 
                    }
                    /*{ 
                        loader: 'postcss-loader', 
                        options: { 
                            ident: 'postcss', 
                            plugins: (loader) => ( 
                                [ 
                                    require('postcss-import')( 
                                        { 
                                            path: ['app/styles'], 
                                        } 
                                    ), 
                                    require('postcss-mixins')({}), 
                                    require('postcss-simple-vars')({ silent: true }), 
                                    require('postcss-nested')({}), 
                                ] 
                            ), 
                        }, 
                    }, */
                ], 
            }, 
            { 
                test: /\.(png|jpg|gif|woff|woff2|eot|ttf|svg|cur)$/, 
                use: { 
                    loader: 'url-loader', 
                    options: { 
                        limit: 8192, 
                        name: 'media/index/[name].[ext]', 
                    }, 
                }, 
            }, 
            /*{ 
                test: /\.txt$/i, 
                exclude: /node_modules/, 
                loader: 'raw-loader', 
            }, */
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
        /*new CopyWebpackPlugin([ 
            { 
                from: 'app/favicon.ico', 
                to: 'favicon.ico', 
            }, 
            { 
                from: 'doc/api', 
                to: 'api', 
            }, 
        ]), */
        new MiniCssExtractPlugin({ 
            filename: 'css/[name]/style.css', 
        }), 
        new webpack.DefinePlugin({ 
            'process.env': { 
                NODE_ENV: JSON.stringify(process.env.NODE_ENV), 
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
        chunks:['js',`${name}`], 
        minify: true
    }));
 });

module.exports = [config]; 