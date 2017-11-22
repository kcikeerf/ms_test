import React from 'react';
import PropTypes from 'prop-types';
import $ from 'jquery';
import UserListContainer from './UserListContainer';

import {createCookie, getCookie, removeCookie} from 'zx-misc/handleCookie';

import 'zx-style/style-school-view.css';

let config = require('zx-const')[process.env.NODE_ENV];

class ViewContainer extends React.Component {
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
        if (process.env.NODE_ENV === 'development') {
            wxOpenId = config.TEST_WECHAT_OPENID;
            wxUnionId = config.TEST_WECHAT_UNIONID;
            wxUserInfo = null;
            zxAccessData = {
                ...zxAccessData,
                wxOpenId: wxOpenId,
                wxUnionId: wxUnionId,
            };
            createCookie(config.COOKIE.WX_OPENID, wxOpenId);
            createCookie(config.COOKIE.WX_UNIONID, wxUnionId);
        }
        else {
            wxOpenId = getCookie(config.COOKIE.WX_OPENID);
            wxUnionId = getCookie(config.COOKIE.WX_UNIONID);
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
            let wxName = zxAccessMatser.name;
            let hasBindedUser = (zxAccessSlave && zxAccessSlave.length !== 0);
            createCookie(config.COOKIE.MAIN_ACCESS_TOKEN, zxMainAccessToken);
            createCookie(config.COOKIE.WX_NAME, wxName);
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
            console.log('获取access失败');
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

ViewContainer.contextTypes = {
    router: PropTypes.object.isRequired
};

export default ViewContainer;