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
    mode: 'development',
    devServer: {
        static: {
            directory: path.join(__dirname, 'build_dev'),
          },
        compress: true,
        port: 8000,
        historyApiFallback: { //entry pages
            rewrites: [
                //{ from: /^(\/(login)?)?$/, to: '/login.html' },
                { from: /^\/$/, to: '/index.html' },
                { from: /^\/apps$/, to: '/app_redux.html' },
                { from: /^\/shop/, to: '/shop.html' },
                // { from: /^\/apps$/, to: '/apps.html' },
                //{ from: /./, to: '/views/404.html' },
            ],
          },

    },
    devtool: 'eval-source-map', 
    entry: getEntry(),
    // entry: { 
    //     index: './src/index.tsx',
    //     //login: './src/login/index.tsx', 
    //     //app: './src/app/index.tsx', 
    //     app_redux: './src/app_redux/index.tsx',
    //     shop: './src/shop/index.tsx',
    // }, 
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
                            //url: false,
                        }, 
                    }, 
                ], 
            }, 
            // { 
            //     test: /\.(png|jpg|gif|woff|woff2|eot|ttf|svg|cur)$/, 
            //     use: { 
            //         loader: 'url-loader', 
            //         options: { 
            //             limit: 8192, 
            //             name: 'media/index/[name].[ext]', 
            //         }, 
            //     }, 
            // },
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
                test: /\.(png|jpg|jpeg|gif)$/i,
                use: { 
                    loader: 'file-loader', 
                    options: {
                        name: '[path][name].[ext]'
                   }
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
        //template: `src/${name}/index.html`,
        //template: `doc/template.html`,
        template: `src/index.html`,
        filename: `${name}.html`, 
        title: name[0].toUpperCase().concat(name.slice(1)),
        chunks:['js',`${name}`], //import js
        
    }));
 });

 module.exports = [config]; 