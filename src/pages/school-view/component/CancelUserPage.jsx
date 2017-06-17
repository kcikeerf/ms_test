import React from 'react';
import PropTypes from 'prop-types'; // ES6
import $ from 'jquery';

let config = require(`./../../../config/${process.env.NODE_ENV}`);

import getCookie from './../../../lib/getCookie';

import CancelUser from './CancelUser'

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
            wx_openid = process.env.TEST ? config.TEST_WECHAT_OPENID : getCookie('wx_openid');
            
            var data = {
                'wx_openid': wx_openid
            };

            $.post(api_url, data, function (response, status) {
                    let users = $.parseJSON(response.data);
                    if (users != null && users.length > 0) {
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
                }.bind(this),
                'json')
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