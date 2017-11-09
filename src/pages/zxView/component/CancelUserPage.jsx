import React from 'react';
import PropTypes from 'prop-types'; // ES6
import $ from 'jquery';

import CancelUser from './CancelUser'

import {createCookie, getCookie, removeCookie} from 'zx-misc/handleCookie';

let config = require('zx-const')[process.env.NODE_ENV];

class CancelUserPage extends React.Component {
    constructor() {
        super();
        this.state = {
            hasBindedUser: null,
            bindedUsers: null
        };
    }
    componentWillMount() {
        this.checkUser();
    }
    handleNavBack(event) {
        this.context.router.goBack();
    }
    // 检测微信号与学生账号绑定
    checkUser() {
        let api_url, wx_openid;
        if (process.env.DEV) {
            //@TODO: 在开发模式下，暂时不需要有绑定用户的功能
        }
        else {
            api_url = config.API_DOMAIN + config.API_GET_BINDED_USERS;
            let zxMainAccessToken = getCookie('zx_main_access_token');

            let data = {
                'access_token': zxMainAccessToken
            };

            $.post(api_url, data, function (response, status) {
                    let users = response.slave;
                    if (users && users.length > 0) {
                        this.setState({
                            hasBindedUser: true,
                            bindedUsers: users
                        });
                    }
                    else {
                        //@TODO: 返回空数据的时候有报错
                        this.setState({
                            hasBindedUser: false
                        });

                    }
                }.bind(this), 'json')
                .fail(function (response, status) {
                    this.setState({
                        hasBindedUser: false
                    });
                }.bind(this));
        }
    }
    
    render() {
        return (
            <div className="container-fluid zy-container">
                <div className="zy-container-top">
                    <div className="zy-nav-top">
                        <span className="glyphicon glyphicon-chevron-left zy-nav-navBack" onClick={this.handleNavBack.bind(this)}></span>
                        <span className="zy-nav-title">解除账号</span>
                    </div>
                </div>
                <div className="zy-container-body">
                    <CancelUser hasBindedUser={this.state.hasBindedUser} bindedUsers={this.state.bindedUsers}></CancelUser>
                </div>
            </div>
        )
    }
}

CancelUserPage.contextTypes = {
    router: PropTypes.object.isRequired
};

export default CancelUserPage;