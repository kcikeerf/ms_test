<?php
/*
 * 返回微信设置参数的数组
 */
function zy_wechat_get_config($debug=true) {
  // 公众号授权地址
  $wechat_oauth_base_url = 'https://open.weixin.qq.com/connect/oauth2/authorize?';
  $wechat_oauth_scope = array(
    'base' => 'snsapi_base', // 静默授权，只获得openid
    'userinfo' => 'snsapi_userinfo' // 授权获取用户其它信息
  );
  $wechat_oauth_redirect = '#wechat_redirect';
  $wechat_oauth_response_type = 'code';
  $wechat_oauth_state = 'test';
  
  $app_id = 'wxa637233a0ad6b6d6';
  $secret = '65a82461cdbea21f999e45240d68255b';
  $token = 'Zy91973812';
  $aes_key = 'jWG1QF9QDE4VlVJZpAqAeYUcmTnp7iDMVQPlpDQtPXQ';
  
  $redirect_domain = 'http://wxapp.k12ke.com';

// Test
  /*
  $app_id = 'wx58feac216cf98a83';
  $secret = '3ecdf9e5699474a1d437442a77e024cb';
  $token = '123456';
  */

  $config = [
    'debug'  => $debug,
    'app_id' => $app_id, // AppID
    'secret' => $secret, // AppSecret
    'token'  => $token,
    'aes_key' => $aes_key, // 可选
    'redirect_domain' => $redirect_domain,
    'oauth' => [
      'base_url' => $wechat_oauth_base_url,
      'scopes' => $wechat_oauth_scope,
      'redirect' => $wechat_oauth_redirect,
      'response_type' => $wechat_oauth_response_type,
      'state' => $wechat_oauth_state
    ],
    'log' => [
      'level' => 'debug',
      'file'  => '/tmp/wechat-testing.log', // XXX: 绝对路径！！！！
    ]
  ];
  
  return $config;
}
