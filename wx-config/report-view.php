<?php
$test = false;
if ($test) {
	include("password_protection.php");
}

include './vendor/autoload.php'; // 引入 composer 入口文件
include './config.php'; // 微信配置参数

use EasyWeChat\Foundation\Application;
use EasyWeChat\Support\Log;

$config = zy_wechat_get_config(true);

$app = new Application($config);

$user_service = $app->user; // 用户
$oauth = $app->oauth; // 授权
$oauth = $oauth->stateless();
$oauth_user = $oauth->user();

// 静默授权只能得到openid
$open_id = $oauth_user->getId();
$user = $user_service->get($open_id);

// 昵称
$user_nickname = $user->get('nickname');

#$cookie_status = setcookie('wechat_openId', $open_id, time()+3600, '/', '.k12ke.com');
$cookie_status = setcookie('wx_openid', $open_id, 0, '/');

Log::debug('openid:' . $open_id);
if ($cookie_status) {
    Log::debug('cookie status: true');
}
else {
    Log:debug('cookie status: false');
}
// 检查微信号是否已有绑定学生账号
// 是：跳转到报告列表页
// 否：跳转到账号绑定页
/*
$url = 'http://www.k12ke.com/wx/bind';
$optional_headers = array(
	'Accept' => 'application/json',
	'Content-type' => 'application/json'
);
$optional_headers = "Accept: application/json\r\n" .
					"Content-type: application/json";
$data = array(
	'school_number' => 'fa89', // 测试学校ID
 	'stu_number' => '136', // 测试学生ID
 	'wx_openid' => $open_id
);
$data = json_encode($data);
$binding_response = do_post_request($url, $data, $optional_headers);
Log::debug('Binding-response:' . $binding_response);
$binding_json = json_decode($binding_response, true);
Log::debug('Binding-status:' . $binding_json['status']);
Log::debug('Binding-message:' . $binding_json['message']);
*/

// 未登录
/*
if (empty($_SESSION['wechat_user'])) {
  $_SESSION['target_url'] = 'simplereport-v2.html';
  return $oauth->redirect();
}
*/

// 已经登录过
/*
$user = $_SESSION['wechat_user'];
header('location:' . 'simplereport-v2.html');
*/

/**
 * Send post request to destination $url
 *
 * @param string $url
 * @param array $data
 * @param null $optional_headers
 * @return string
 * @throws Exception
 */
/*
function do_post_request($url, $data, $optional_headers = null)
{
	$params = array('http' => array(
		'method' => 'POST',
		'content' => $data
	));
	if ($optional_headers !== null) {
		$params['http']['header'] = $optional_headers;
	}
	$context = stream_context_create($params);
	$fp = @fopen($url, 'rb', false, $context);
	if (!$fp) {
		//throw new Exception("Problem with $url, $php_errormsg");
		try {
			throw new Exception("Some error message");
		} catch(Exception $e) {
			$error_message =  $e->getMessage();
			Log::debug("Problem with $url, $error_message");
		}
	}
	$response = @stream_get_contents($fp);
	if ($response === false) {
		//throw new Exception("Problem reading data from $url, $php_errormsg");
		try {
			throw new Exception("Some error message");
		} catch(Exception $e) {
			$error_message =  $e->getMessage();
			Log::debug("Problem reading data from $url, $error_message");
		}
	}
	return $response;
}
*/
//$target_url = $_SERVER['SERVER_NAME'].'/build/assets/parent-view';
$target_url = $config['redirect_domain'] . '/apps/report-view';
$test = true;
$dest = '../apps/report-view/index.html';
header('Location: '.$target_url);
require $dest;

?>
