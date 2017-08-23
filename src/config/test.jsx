module.exports = {
    // WeChat Test username and OpenID
    TEST_USER_NAME: 'fa89114219116sy',
    TEST_WECHAT_OPENID: 'oQgmFwqpZQYhfL8WXIKkqGJ_k104',
    TEST_WECHAT_UNIONID: 'orSLk0taXe9otRBoVlvA-SlCWF1k',

    API_LOGIN_STATE:'test',

    // 服务器地址
    API_DOMAIN: 'http://59.110.7.209:4502',

    WX_API_GET_ZX_ACCESS: 'http://wxapi.k12ke.com/get-zx-access.php',

    API_VERSIONS: '/api/v1.2',
    //获取access_token的api(登录)
    API_GET_TOKEN: '/oauth/token',
    //获取未测试的列表
    API_GET_TODO_LIST: '/api/v1.2/online_tests/todo_list',
    //获取已经测试的列表
    API_GET_TESTED_LIST: '/api/v1.2/online_tests/tested_list',
    //获取报告的列表
    API_GET_REPOET_LIST: '/api/v1.2/reports/my_list',
    //提交测试答案的api
    API_SUBMIT_RESULT: '/api/v1.2/online_tests/zh_result',
    //获取用户列表api
    // API_GET_BINDED_USERS: '/wx/auths/get_binded_users',
    API_GET_BINDED_USERS: '/api/v1.2/users/get_binded_users',
    //绑定用户的api
    // API_CHECK_BIND: '/wx/auths/check_bind',
    // API_BIND_USER: '/wx/bind',
    API_BIND_USER: '/api/v1.2/users/bind',
    //解除用户的api
    API_UNBIND_USER: '/api/v1.2/users/unbind',
    //获取报告状态的api
    API_JOB_STATUS: '/api/v1.2/monitorings/check_status',

    SURVEY_ID_URL: [
        {
            ID: '599d49224dd5e01a214abe26',                             //Report ID
            QUESTION_URL: '/build/html/report-mq/report-question',      // Report QUESTION URL
            VIEW_URL: '/build/html/report-mq/report-view'               // Report VIEW URL
        },
        {
            ID: '5979563a4dd5e07996c67513',
            QUESTION_URL: '/build/html/report-mq/report-question',
            VIEW_URL: '/build/html/report-mq/report-view'
        }
    ],

    //测试列表的地址
    URL_LIST_VIEW: '/build/html/report-view#/todo-list',

    LOGO: '甄学'
};