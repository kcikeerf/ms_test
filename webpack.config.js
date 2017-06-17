const path = require('path');
const merge = require('webpack-merge');
const parts = require('./libs/parts');
const moment = require('moment');

// current date
var currentDate = moment().format("YYYYMMDDHH");

// cdn public path
var cdnPublicPath = 'http://cdn.k12ke.com/zx-wx/00016110/' + currentDate + '/';


const TARGET = process.env.npm_lifecycle_event;

// find out which loader is causing this deprecation warning
//process.traceDeprecation = true;

// Source
const PATH_SRC = path.join(__dirname, 'src');
const PATH_SRC_PAGES = path.join(PATH_SRC, 'pages');

// Destination
const PATH_BUILD = path.join(__dirname, 'build/');
const PATH_PUBLIC = '/build/';

const PATH_BUILD_PROD = path.join(__dirname, 'build/', currentDate);
const PATH_PUBLIC_PROD = cdnPublicPath;
const PATH_CLEAN_RPOD = path.join(__dirname, 'build');


const PATH_COMMON_ASSETS = {
    build: path.join(__dirname, 'build/', currentDate),
    style_sass: path.join(__dirname, 'src/sass')
};

const PAGES_INPUT_PATH = {
    school_view: path.join(PATH_SRC_PAGES, 'school-view', 'index.jsx'),
    report_mq_question:path.join(PATH_SRC_PAGES,'report-mq','report-question','index.jsx'),
    report_mq_view:path.join(PATH_SRC_PAGES,'report-mq','report-view','index.jsx')
};

const PAGES_OUTPUT_PATH = {
    school_view: 'report-view/report-view',
    report_mq_question:'report-mq/report-question',
    report_mq_view:'report-mq/report-view'
};

process.env.BABEL_ENV = TARGET;

const common = merge(
    {
        context: PATH_SRC_PAGES,
        // Entry accepts a path or an object of entries.
        // We'll be using the latter form given it's
        // convenient with more complex configurations.
        entry: {
            'js/view/report-view':PAGES_INPUT_PATH.school_view,
            'js/report-mq/report-question':PAGES_INPUT_PATH.report_mq_question,
            'js/report-mq/report-view':PAGES_INPUT_PATH.report_mq_view
            // 'js/report-list/report-view':PAGES_INPUT_PATH.report_list_view,
        },
        output: {
            path: PATH_BUILD,
            filename: '[name].js',
            publicPath: PATH_PUBLIC
        },
        resolve: {
            extensions: ['.js','.json','.jsx'], // default to ['.js','.json']
            alias: {
                //'react': 'react-lite',
                //'react-dom': 'react-lite',
                '$': 'jquery'
            }
        }
    },
    parts.providePlugin(),

    //从中分离出公共的代码
    parts.extractBundle({
        names: ['vendor-report'],
        filename: 'share/vendor-report.[chunkhash].js',
        chunks: [
            'js/report-mq/report-question',
            'js/report-mq/report-view'
        ],
        minChunks: function(module){
            return parts.isExternal(module);
        }
    }),

    // parts.extractBundle({
    //     names: ['common-report'],
    //     filename: 'share/common-report.js',
    //     chunks: [
    //         PAGES_OUTPUT_PATH.academic_report_student,
    //         PAGES_OUTPUT_PATH.academic_report_class,
    //         PAGES_OUTPUT_PATH.academic_report_grade,
    //         PAGES_OUTPUT_PATH.mq_report
    //     ],
    //     minChunks: 2
    //     // minChunks: function(module, count){
    //     //     return !parts.isExternal(module) && count >= 2;
    //     // }
    // }),

    parts.extractBundle({
        names: ['vendor'],
        filename: 'share/vendor.[chunkhash].js',
        chunks: [
            'js/view/report-view',
            'vendor-report'
        ],
        minChunks: 2
    }),

    parts.extractBundle({
        name: "manifest",
        filename: 'share/manifest.[hash].js',
        minChunks: Infinity
    }),

    parts.indexTemplate({
        title: '甄学',
        appMountId: 'app',
        chunks: ['manifest', 'vendor', 'js/view/report-view'],
        filename: 'html/report-view/index.html'
    }),

    parts.indexTemplate({
        title: '甄学',
        appMountId: 'app',
        chunks: ['manifest','vendor', 'vendor-report', 'js/report-mq/report-question'],
        filename: 'html/report-mq/report-question/index.html'
    }),
    parts.indexTemplate({
        title: '甄学',
        appMountId: 'app',
        chunks: ['manifest','vendor', 'vendor-report', 'js/report-mq/report-view'],
        filename: 'html/report-mq/report-view/index.html'
    }),

    // babel-loader has to be on top of eslint-loader,
    // otherwise files will be check after being processed by babel-loader
    parts.loadJSX(PATH_SRC), // babel-loader

    // parts.loadJson(PATH_SRC), //json-loader

    parts.lintJSX(PATH_SRC), // eslint-loader

    // Setup CSS
    parts.setupCSS([PATH_COMMON_ASSETS.style_sass]),

    // Setup Url loader
    parts.setupFonts(),

    // Setup Image
    parts.setupImage(),

    // PurifyCSSPlugin
    // Note: make sure this is after ExtractTextPlugin!
    parts.purifyCSS(PATH_SRC_PAGES)
);

var config;

// Detect how npm is run and branch based on that
switch (TARGET) {
    case 'build':
        config = merge(
            common,
            {
                devtool: 'cheap-source-map',
                //devtool: 'eval-source-map',
                output: {
                    // TODO: Set publicPath to match your GitHub project name
                    // E.g., '/kanban-demo/'. Webpack will alter asset paths
                    // based on this. You can even use an absolute path here
                    // or even point to a CDN.
                    //publicPath: ''
                    filename: '[name].[chunkhash].js',
                    chunkFilename: '[chunkhash].js',
                    path: PATH_BUILD_PROD,
                    publicPath: PATH_PUBLIC_PROD
                    //publicPath: 'http://139.129.216.226/wx/00016110/20170410/'
                }
            },
            // clean build folder before build
            parts.clean(PATH_CLEAN_RPOD),

            // set environment variables
            parts.setFreeVariable('process.env.NODE_ENV', 'production'),
            parts.setFreeVariable('process.env.DEV', false),
            parts.setFreeVariable('process.env.TEST', false),

            // UglifyJsPlugin
            parts.minify()
        );
        break;
    case 'dev':
        config = merge(
            common,
            {
                devtool: 'eval-source-map'
            },
            parts.setFreeVariable('process.env.NODE_ENV', 'development'),
            parts.setFreeVariable('process.env.DEV', true),
            parts.setFreeVariable('process.env.TEST', false),

            parts.devServer({
                // Customize host/port here if needed
                host: process.env.HOST,
                port: process.env.PORT
            }),

            // Expose React to the web browser to enable the Chrome React devtools
            parts.enableReactPerformanceTools()

            // NpmInstallPlugin
            //parts.npmInstall()
        );
        break;
    default:
        config = merge(
            common,
            {
                devtool: 'eval-source-map'
            },
            parts.setFreeVariable('process.env.NODE_ENV', 'test'),
            parts.setFreeVariable('process.env.DEV', false),
            parts.setFreeVariable('process.env.TEST', true),

            parts.devServer({
                // Customize host/port here if needed
                host: process.env.HOST,
                port: process.env.PORT
            }),

            // Expose React to the web browser to enable the Chrome React devtools
            parts.enableReactPerformanceTools()

            // NpmInstallPlugin
            //parts.npmInstall()
        );
        break;
}
module.exports = config;