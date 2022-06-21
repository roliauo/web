const webpack = require('webpack'); 
const path = require('path');
//const CopyWebpackPlugin = require('copy-webpack-plugin'); 
const TerserPlugin = require('terser-webpack-plugin'); 
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); 
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const config = {
    mode: 'development',
    devServer: {
        static: {
            directory: path.join(__dirname, 'build_dev'),
          },
        compress: true,
        port: 8000,
        historyApiFallback: {
            rewrites: [
              { from: /^\/$/, to: '/app_redux.html' },
              { from: /^\/shop/, to: '/shop.html' },
              //{ from: /./, to: '/views/404.html' },
            ],
          },

    },
    devtool: 'eval-source-map', 
    entry: { 
        //login: './src/login/index.tsx', 
        //app: './src/app/index.tsx', 
        app_redux: './src/app_redux/index.tsx',
        shop: './src/shop/index.tsx',
    }, 
    output: { 
        path: path.resolve(__dirname, './build_dev'), 
        filename: 'js/[name]/bundle.js', 
        //publicPath: '/',
    }, 
    resolve: { 
        alias: { 
            '@app': path.resolve(__dirname, './src/app'), 
            '@common': path.resolve(__dirname, './src/common_modules'), 
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
                        }, 
                    }, 
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
            filename: 'css/[name]/styles.css', 
        }), 
        new webpack.DefinePlugin({ 
            'process.env': { 
                NODE_ENV: JSON.stringify(process.env.NODE_ENV), 
            }, 
        }), 
    ], 
};

module.exports = [config]; 