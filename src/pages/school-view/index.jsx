import React from 'react';
import {render} from 'react-dom';
import {Router, Route, hashHistory} from 'react-router';
import PropTypes from 'prop-types';
import getCookie from './../../lib/getCookie';
import createCookie from './../../lib/createCookie';
import './../../sass/style-school-view.scss';
import $ from 'jquery';

import TodoSurveyListContainer from './component/TodoSurveyListContainer';
import UserLogin from './component/UserLogin';
import Banner from './component/Banner';
import UserListContainer from './component/UserListContainer';
import SettingsPage from './component/SettingsPage';
import AddUserPage from './component/AddUserPage';
import CancelUserPage from './component/CancelUserPage';

let config = require(`./../../config/${process.env.NODE_ENV}`);

class ViewReportAppContainer extends React.Component {
    constructor() {
        super();
        this.state = {
            zxMainAccessToken: null,
            zxAccessMatser:null,
            wechatOpenId: null,
            wechatUnionId: null,
            mainUser: null,
            hasBindedUser: null,
            bindedUsers: null
        };
    }

    componentDidMount() {
        this.checkUser();
    }

    // 检测微信号与学生账号绑定
    checkUser() {
        // 获取zx binded users
        let zxAccessData = {
            env: config.API_LOGIN_STATE,
        };
        let wxOpenId, wxUnionId, wxUserInfo;
        if (process.env.DEV || process.env.TEST) {
            wxOpenId = config.TEST_WECHAT_OPENID;
            wxUnionId = config.TEST_WECHAT_UNIONID;
            wxUserInfo = null;
            zxAccessData = {
                ...zxAccessData,
                wxOpenId: wxOpenId,
                wxUnionId: wxUnionId,
            };
        }
        else {
            wxOpenId = getCookie('wx_openid');
            wxUnionId = getCookie('wx_unionid');
            wxUserInfo = JSON.stringify({
                nickname: decodeURIComponent(getCookie('wx_nickname')),
                headimgurl: decodeURIComponent(getCookie('wx_headimgurl')),
            });
            zxAccessData = {
                ...zxAccessData,
                wxOpenId: wxOpenId,
                wxUnionId: wxUnionId,
                wxUserInfo: wxUserInfo
            };
        }

        let zxAccessApi = config.WX_API_GET_ZX_ACCESS;
        let zxAccessPromise = $.post(zxAccessApi, zxAccessData);
        zxAccessPromise.done(function (response) {
            let parsedResponse = JSON.parse(response);
            let zxAccessMatser = parsedResponse.master;
            let zxAccessSlave = parsedResponse.slave;
            let zxMainAccessToken = zxAccessMatser.oauth.access_token;
            let hasBindedUser = (zxAccessSlave && zxAccessSlave.length !== 0);
            createCookie('zx_main_access_token', zxMainAccessToken);
            this.setState({
                zxMainAccessToken: zxMainAccessToken,
                zxAccessMatser:zxAccessMatser,
                wechatOpenId: wxOpenId,
                wechatUnionId: wxUnionId,
                mainUser: zxAccessMatser,
                hasBindedUser: hasBindedUser,
                bindedUsers: zxAccessSlave
            });

        }.bind(this));

        // 获取zx access失败
        zxAccessPromise.fail(function (errorResponse) {
        }.bind(this));

    }

    render() {
        return (
            <UserListContainer
                zxMainAccessToken={this.state.zxMainAccessToken}
                zxAccessMatser = {this.state.zxAccessMatser}
                hasBindedUser={this.state.hasBindedUser}
                bindedUsers={this.state.bindedUsers}
            />
        )
    }
}

ViewReportAppContainer.contextTypes = {
    router: PropTypes.object.isRequired
};
render((
    <Router history={hashHistory}>
        <Route path="/" component={ViewReportAppContainer}></Route>
        <Route path="/user-login" component={UserLogin}></Route>
        <Route path="/todo-list" component={TodoSurveyListContainer}></Route>
        <Route path="/settings" component={SettingsPage}></Route>
        <Route path="/add-user" component={AddUserPage}/>
        <Route path="/cancel-user" component={CancelUserPage}/>
    </Router>
), document.getElementById('app'));