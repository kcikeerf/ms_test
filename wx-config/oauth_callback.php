<?php
include __DIR__ . '/vendor/autoload.php'; // 引入 composer 入口文件
include __DIR__ . '/config.php'; // 微信配置参数

use EasyWeChat\Foundation\Application;

$config = zy_wechat_get_config(true);

$app = new Application($config);
$oauth = $app->oauth;

// 获取 OAuth 授权结果用户信息
$user = $oauth->user();
$_SESSION['wechat_user'] = $user->toArray();
$targetUrl = empty($_SESSION['target_url']) ? '/' : $_SESSION['target_url'];
header('location:'. $targetUrl); // 跳转到 user/profile