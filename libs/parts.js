const webpack = require('webpack');
const path = require('path');
const glob = require('glob');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const NpmInstallPlugin = require('npm-install-webpack-plugin');
const PurifyCSSPlugin = require('purifycss-webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');

// copy
exports.copy = function (patterns, options) {
    return {
        plugins: [
            new CopyWebpackPlugin(patterns, options)
        ]
    };
};


// check if external
exports.isExternal = function (module) {
    // var userRequest = module.userRequest;
    //
    // if (typeof userRequest !== 'string') {
    //     return false;
    // }

    return module.context && module.context.indexOf('node_modules') !== -1;
};


exports.indexTemplate = function (options) {
    return {
        plugins: [
            new HtmlWebpackPlugin({
                template: require('html-webpack-template'),
                title: options.title,
                appMountId: options.appMountId,
                chunks: options.chunks,
                inject: false,
                mobile: true,
                filename: options.filename,
                chunksSortMode: 'dependency'
            })
        ]
    };
};

/**
 * Transpiling JavaScript files using Babel
 *
 * @param include
 * @returns {{module: {rules: [*]}}}
 */
exports.loadJSX = function (include) {
    return {
        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    exclude: /(node_modules|bower_components)/,
                    loader: 'babel-loader',
                    // query: {
                    //     presets: ["es2015", "react"]
                    // },
                    include: include
                }
            ]
        }
    };
};

/*json的loader*/
exports.loadJson = function (include) {
    return {
        module: {
            rules: [
                {
                    test: /\.json$/,
                    use:'json-loader',
                    include:include
                }
            ]
        }
    };
};

/**
 * Find problematic patterns or code that doesn’t adhere to certain style guidelines
 *
 * @param include
 * @returns {{module: {preLoaders: [*]}}}
 */
exports.lintJSX = function (include) {
    return {
        module: {
            rules: [
                {
                    enforce: "pre", // To be safe, set "pre" to check source files, not modified by other loaders
                    test: /\.(js|jsx)$/,
                    loader: 'eslint-loader',
                    include: include
                }
            ]
        }
    };
};

/**
 * Expose React to the web browser to enable the Chrome React devtools
 *
 * @returns {{module: {loaders: [*]}}}
 */
exports.enableReactPerformanceTools = function () {
    return {
        module: {
            rules: [
                {
                    test: require.resolve('react'),
                    loader: 'expose-loader?React'
                }
            ]
        }
    };
};

exports.devServer = function (options) {
    const ret = {
        devServer: {
            // Enable history API fallback so HTML5 History API based
            // routing works. This is a good default that will come
            // in handy in more complicated setups.
            historyApiFallback: true,

            // Unlike the cli flag, this doesn't set
            // HotModuleReplacementPlugin!
            hot: true,
            inline: true,

            // Display only errors to reduce the amount of output.
            stats: 'errors-only',

            // Parse host and port from env to allow customization.
            //
            // If you use Vagrant or Cloud9, set
            // host: options.host || '0.0.0.0';
            //
            // 0.0.0.0 is available to all network devices
            // unlike default `localhost`.
            host: options.host, // Defaults to `localhost`
            port: options.port // Defaults to 8080
        },
        plugins: [
            // Enable multi-pass compilation for enhanced performance
            // in larger projects. Good default.
            new webpack.HotModuleReplacementPlugin({
                //multiStep: true
            })
        ]
    };

    return ret;
};

/**
 * This plugin uses PurifyCSS to remove unused selectors from your CSS.
 * You should use it with the extract-text-webpack-plugin.
 *
 * @param path
 * @returns {{plugins: [*]}}
 */
exports.purifyCSS = function (path) {
    // var logFn = console.error;
    // logFn.call(null, path);

    return {
        plugins: [
            new PurifyCSSPlugin({
                paths: glob.sync(path + '/**/*.jsx'),
                purifyOptions: {
                    info: true,
                    minify: true
                }
            })
        ]
    }
};

/**
 * Minimize all JavaScript output of chunks
 *
 * @returns {{plugins: [*]}}
 */
exports.minify = function () {
    return {
        plugins: [
            new webpack.optimize.UglifyJsPlugin({
                // set true if using source maps for minimized code,
                // or want correct line numbers for uglifyjs warnings
                sourceMap: true,
                // set true if want to see uglifyjs warnings
                compress: {
                    warnings: false
                }
            })
        ]
    };
};

exports.setFreeVariable = function (key, value) {
    const env = {};
    env[key] = JSON.stringify(value);

    return {
        plugins: [
            new webpack.DefinePlugin(env)
        ]
    };
};

/**
 * Extract bundle
 *
 * @param options
 * @returns {{entry: {}, plugins: [*]}}
 */
exports.extractBundle = function (options) {
    // const entry = {};
    // entry[options.name] = options.entries;

    return {
        // Define an entry point needed for splitting.
        //entry: entry,
        plugins: [
            // Extract bundle and manifest files. Manifest is
            // needed for reliable caching.
            new webpack.optimize.CommonsChunkPlugin(options)
        ]
    };
};

exports.clean = function (path) {
    return {
        plugins: [
            new CleanWebpackPlugin([path], {
                root: process.cwd()
            })
        ]
    };
};

/**
 * Setup CSS
 *
 * @param paths
 * @returns {{module: {rules: [*]}, plugins: [*]}}
 */
exports.setupCSS = function (paths) {
    return {
        module: {
            rules: [
                {
                    test: /\.scss$/,
                    use: ExtractTextPlugin.extract({
                        fallback: 'style-loader',
                        use: [
                            // {
                            //     loader: 'css-to-string-loader'
                            // },
                            {
                                loader: "css-loader",
                                options: {
                                    importLoaders: 1,
                                    sourceMap: true
                                }
                            },
                            {
                                loader: "postcss-loader",
                                options: {
                                    sourceMap: true
                                }
                            },
                            {
                                loader: "resolve-url-loader",
                                options: {
                                    sourceMap: true
                                }
                            },
                            {
                                loader: "sass-loader",
                                options: {
                                    sourceMap: true,
                                    includePaths: paths
                                }
                            }
                        ]
                    })
                }
            ]
        },
        plugins: [
            // Output extracted CSS to a file
            new ExtractTextPlugin({
                filename: 'style/[name].[chunkhash].css'
            })
        ]
    };
};

/**
 * Setup fonts
 *
 * @param paths
 * @returns {{module: {rules: [*]}, plugins: [*]}}
 */
exports.setupFonts = function () {
    return {
        module: {
            rules: [
                {
                    test: /\.(eot|ttf|woff|woff2)$/,
                    loader: 'file-loader',
                    options: {
                        name: 'font/[name].[hash].[ext]'
                    }
                }
            ]
        }
    };
};

/**
 * Speed up development by automatically installing & saving dependencies with Webpack.
 *
 * @param options
 * @returns {{plugins: [*]}}
 */
exports.npmInstall = function (options) {
    options = options || {};
    return {
        plugins: [
            new NpmInstallPlugin(options)
        ]
    };
};

/**
 * map modules to (free) variables.
 * Every time I use the (free) variable xyz inside a module you (webpack) should set xyz to require("abc").
 * @returns {{plugins: [*]}}
 */
exports.providePlugin = function () {
    return {
        plugins: [
            new webpack.ProvidePlugin({
                jQuery: 'jquery',
                $: 'jquery',
                jquery: 'jquery'
            })
        ]
    };
};

// Image
exports.setupImage = function () {
    return {
        module: {
            rules: [
                {
                    test: /\.(gif|png|jpe?g|svg)$/i,
                    use: [
                        {
                            loader: 'file-loader',
                            options: {
                                name: 'img/[name].[hash].[ext]'
                            }
                        }
                        // {
                        //     loader:'image-webpack-loader'
                        // }
                    ]
                }
            ]
        }
    }
};