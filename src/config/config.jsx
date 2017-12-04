let general = {

    //php服务器 用来获取access_token
    WX_API_GET_ZX_ACCESS: 'http://wxapi.k12ke.com/get-zx-access.php',

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
    API_GET_BINDED_USERS: '/api/v1.2/users/get_binded_users',

    //绑定用户的api
    API_BIND_USER: '/api/v1.2/users/bind',

    //解除用户的api
    API_UNBIND_USER: '/api/v1.2/users/unbind',

    //获取报告状态的api
    API_JOB_STATUS: '/api/v1.2/monitorings/check_status',

    API_VERSIONS: '/api/v1.2',

    COOKIE: {
        LOGIN_METHOD: 'login_method',
        WX_OPENID: 'wx_openid',
        WX_UNIONID: 'wx_unionid',
        QUEST_TESTID:'question_testid',
        MAIN_ACCESS_TOKEN: 'zx_main_access_token',
        SELECTED_ACCESS_TOKEN:'selected_access_token',
        CLIENT_ACCESS_TOKEN: 'client_access_token',
        WX_NAME:'name'
    },

    //测试列表的地址
    URL_LIST_VIEW: '/build/html/report-view#/todo-list',

    // 报告类型
    REPORT_TYPE_PROJECT_LABEL: '群体',
    REPORT_TYPE_PROJECT: 'project',
    REPORT_TYPE_PROJECT_ICON: 'place',

    REPORT_TYPE_GRADE_LABEL: '学校',
    REPORT_TYPE_GRADE: 'grade',
    REPORT_TYPE_GRADE_ICON: 'account_balance',

    REPORT_TYPE_KLASS_LABEL: '班级',
    REPORT_TYPE_KLASS: 'klass',
    REPORT_TYPE_KLASS_ICON: 'people',

    REPORT_TYPE_PUPIL_LABEL: '个人',
    REPORT_TYPE_PUPIL: 'pupil',
    REPORT_TYPE_PUPIL_ICON: 'person',

    //cnd 静态文件 群里json
    // CDN_WLXX_GROUP_URL:'http://cdn.k12ke.com/wlxx-data/group/',
    CDN_WLXX_GROUP_URL:'/reports_warehouse/tests/5a13eff4ea336f0c97ed4413/project/5a13eff4ea336f0c97ed4413.json',
    CDN_WLXX_QUIZE_URL:'http://cdn.k12ke.com/wlxx-data/quize/quiz.json',
    CDN_WLXX_RELATED_QUIZE_URL:'http://cdn.k12ke.com/wlxx-data/quize/qiuz_detail.json',
    CDN_WLXX_INDICATOR_QUIZE_URL:'http://cdn.k12ke.com/wlxx-data/quize/quiz.json',

    // 根据指标获取单题
    API_GET_PAPER_QUIZ_CKPS: '/api/v1.2/tests/paper_quiz_ckps',

    LOGO: '甄学'
};

let development = {
    ...general,

    // 服务器地址
    API_DOMAIN: 'http://101.201.208.88:4321',

    //开发环境所需cookie
    TEST_USER_NAME: 'fa89114219116sy',
    TEST_WECHAT_OPENID: 'o6fABs28uOK-qxOFtXL-OhbVgO5s',
    TEST_WECHAT_UNIONID: 'orSLk0p3g-d-q1QD8-YXeJAKq288',

    //php服务器环境
    API_LOGIN_STATE:'wlxx',

    SURVEY_ID_URL: [
        {
            ID: '5a13eff4ea336f0c97ed4413',                   //Report ID
            QUESTION_URL: '/html/zx-survey-question',         // Report QUESTION URL
            VIEW_URL: '/html/zx-survey-report',                // Report VIEW URL
            LABEL:'数学'
        },
        {
            ID: '5a1fe819ea336f4bb61df70d',
            QUESTION_URL: '/html/zx-survey-english-question',
            VIEW_URL: '/html/zx-survey-report',
            LABEL:'英语'
        },
        {
            ID: '5a20fc82ea336f4bb61df727',
            QUESTION_URL: '/html/zx-survey-chinese-question',
            VIEW_URL: '/html/zx-survey-report',
            LABEL:'语文'
        }
    ],
    URL_HOME:'/html',
    URL_LIST_VIEW: "/html#/todo-list",
    URL_QUESTION:'/html/zx-survey-question#/'

};

let production = {
    ...general,

    // 服务器地址
    API_DOMAIN: 'http://101.201.208.88:4321',

    //php服务器环境
    API_LOGIN_STATE:'wlxx',

    SURVEY_ID_URL: [
        {
            ID: '5a13eff4ea336f0c97ed4413',                             //Report ID
            QUESTION_URL: '/zx-survey/apps/zx-survey-question',         // Report QUESTION URL
            VIEW_URL: '/zx-survey/apps/zx-survey-report',               // Report VIEW URL
            LABEL:'数学'
        },
        {
            ID: '5a1fe819ea336f4bb61df70d',
            QUESTION_URL: '/zx-survey/apps/zx-survey-english-question',
            VIEW_URL: '/zx-survey/apps/zx-survey-report',
            LABEL:'英语'
        },
        {
            ID: '5a20fc82ea336f4bb61df727',
            QUESTION_URL: '/zx-survey/apps/zx-survey-chinese-question',
            VIEW_URL: '/zx-survey/apps/zx-survey-report',
            LABEL:'语文'
        }
    ],
    URL_HOME:'/zx-survey/apps',
    URL_LIST_VIEW: "/zx-survey/apps/#/todo-list",
    URL_QUESTION:'/zx-survey/apps/zx-survey-question'
};

module.exports = {
    development,
    production
};