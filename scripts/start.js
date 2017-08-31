'user strict';

process.env.BABEL_ENV = 'development';
process.env.NODE_ENV = 'development';

process.on('unhandledRejection', (err) => {
    throw err;
});

require('../config/env');

const fs = require('fs');                                                             //node 的 fs 模块
const chalk = require('chalk');                                                     //控制输出的颜色
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const clearConsole = require('react-dev-utils/clearConsole');                       //react开发工具-清空控制台的插件
const checkRequiredFiles = require('react-dev-utils/checkRequiredFiles');           //react开发工具-判断所需要的文件是否都存在
const {
    choosePort,                                                                     //react开发工具-服务端口
    createCompiler,                                                                 //react开发工具-???
    prepareProxy,                                                                   //react开发工具-配置对象
    prepareUrls,                                                                    //react开发工具-放回一个url对象
} = require('react-dev-utils/WebpackDevServerUtils');
const openBrowser = require('react-dev-utils/openBrowser');                         //react开发工具-打开浏览器

const paths = require('../config/paths');
const config = require('../config/webpack.config.dev');
const createDevServerConfig = require('../config/webpackDevServer.config');

const useYarn = fs.existsSync(paths.yarnLockFile);
const isInteractive = process.stdout.isTTY;                                         //检查nodejs是否在运行一个TTY（终端）上下文

//判断所需要的文件是否存在，如果没有就警告和崩溃
if (!checkRequiredFiles([paths.zxView.htmlTemplate, paths.zxView.indexJs, paths.zxSurveyQuestion.htmlTemplate, paths.zxSurveyQuestion.indexJs,paths.zxSurveyReport.htmlTemplate,paths.zxSurveyReport.indexJs])) {
    process.exit(1);
}

//设置端口号
const DEFAULT_PORT = parseInt(process.env.PORT, 10) || 3000;
const HOST = process.env.HOST || '0.0.0.0';

choosePort(HOST, DEFAULT_PORT).then((port) => {
    if(port == null){
        return
    }
    const protocol = process.env.HTTPS === 'true' ? 'https' : 'http';
    const appName = require(paths.appPackageJson).name;
    const urls = prepareUrls(protocol, HOST, port);

    const compiler = createCompiler(webpack, config, appName, urls, useYarn);

    const proxySetting = require(paths.appPackageJson).proxy;
    const proxyConfig = prepareProxy(proxySetting, paths.appPublic);

    //web服务配置
    const serverConfig = createDevServerConfig(
        proxyConfig,
        urls.lanUrlForConfig
    );
    const devServer = new WebpackDevServer(compiler, serverConfig);

    //发动webpack服务
    devServer.listen(port, HOST, err => {
        if (err) {
            return console.log(err);
        }
        //如果在一个终端上运行
        if (isInteractive) {
            clearConsole();
        }
        //控制台输出cyan颜色的字体
        console.log(chalk.cyan('Starting the development server...\n'));
        openBrowser(urls.localUrlForBrowser);
    });

    //???
    ['SIGINT', 'SIGTERM'].forEach(function(sig) {
        process.on(sig, function() {
            devServer.close();
            process.exit();
        });
    });

}).catch((err) => {
    if(err&&err.message){
        console.log(err.message);
    }
    //结束进程
    process.exit(1);
});