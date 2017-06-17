<?php
include __DIR__ . '/vendor/autoload.php'; // 引入 composer 入口文件
include __DIR__ . '/config.php'; // 微信配置参数

use EasyWeChat\Foundation\Application;

$config = zy_wechat_get_config(true);

$quiz_oauth_query = array(
  'appid' => $config['app_id'],
  #'redirect_uri' => urlencode('http://' . $_SERVER['SERVER_NAME'] . '/quiz.php'),
  // 在这里不能编码，因为加入菜单里的时候就会编码
  // 会造成重复编码
  'redirect_uri' => $config['redirect_domain'] . '/quiz.php',
  'response_type' => $config['oauth']['response_type'],
  'scope' => $config['oauth']['scopes']['base'],
  'state' => $config['oauth']['state'],
);
$quiz_oauth_url = $config['oauth']['base_url'] . http_build_query($quiz_oauth_query) . $config['oauth']['redirect'];

$report_view_oauth_query = array(
  'appid' => $config['app_id'],
    #'redirect_uri' => urlencode('http://' . $_SERVER['SERVER_NAME'] . '/quiz.php'),
    // 在这里不能编码，因为加入菜单里的时候就会编码
    // 会造成重复编码
  'redirect_uri' => $config['redirect_domain'] . '/wx-config/report-view.php',
  'response_type' => $config['oauth']['response_type'],
  'scope' => $config['oauth']['scopes']['base'],
  'state' => $config['oauth']['state'],
);
$report_view_oauth_url = $config['oauth']['base_url'] . http_build_query($report_view_oauth_query) . $config['oauth']['redirect'];

$app = new Application($config);

$server = $app->server; // 服务器
$user = $app->user; // 用户
$menu = $app->menu; // 菜单

// 添加菜单
$buttons = [
  [
    "type" => "view",
    "name" => "查看考情报告",
    "url"  => $report_view_oauth_url
  ]
];
$menu->add($buttons);
// 删除所有菜单
#$menu->destroy();

$server->setMessageHandler(function($message) use($user) {
    $fromUser = $user->get($message->FromUserName);
    $type="";
    switch ($message->MsgType) {
        case 'event':
            $type="事件消息...";
            break;
        case 'text':
            $type="文字消息...";
            break;
        case 'image':
            $type="图片消息...";
            break;
        case 'voice':
            $type="语音消息...";
            break;
        case 'video':
            $type="视频消息...";
            break;
        case 'location':
            $type="坐标消息...";
            break;
        case 'link':
            $type="链接消息...";
            break;
        default:
            $type="其它消息...";
            break;
    }
    return "您好！欢迎关注我!";
});

$response = $server->serve();
$response->send();
