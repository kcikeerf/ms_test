import React from 'react';
import PropTypes from 'prop-types'; // ES6
import $ from 'jquery';

import {createCookie, getCookie, removeCookie} from 'zx-misc/handleCookie';

let config = require('zx-const')[process.env.NODE_ENV];

class UserLogin extends React.Component {
    constructor() {
        super();
        this.state = {
            alertClass: null,
            alertMessage: null
        };
    }
    // 将微信号与学生账号绑定
    handleOauth(event) {
        event.preventDefault();
        let api_url = config.API_DOMAIN + config.API_GET_TOKEN;
        let wx_openid;
        if(process.env.NODE_ENV === 'development'){
            wx_openid = config.TEST_WECHAT_OPENID
        }else {
            wx_openid = getCookie(config.COOKIE.WX_OPENID);
        }

        if (event.target.userId.value == '' || event.target.userId.value == null) {
            this.setState({
                alertClass: 'alert-warning',
                alertMessage: '请输入用户名'
            });
            if (event.target.password.value == '' || event.target.password.value == null) {
                this.setState({
                    alertClass: 'alert-warning',
                    alertMessage: '请输入用户名和密码'
                });
            }
            return;
        }
        else {
            if (event.target.password.value == '' || event.target.password.value == null) {
                this.setState({
                    alertClass: 'alert-warning',
                    alertMessage: '请输入密码'
                });
                return;
            }
        }

        var data = {
            'grant_type': 'password',
            'name': event.target.userId.value,
            'password': event.target.password.value
        };

        $.post(api_url, data, function (response, status) {
                console.log(response);
                createCookie('access_token', response.access_token);
                this.setState({
                    alertClass: 'alert-success',
                    alertMessage: '登录成功！正在为您跳转。'
                });
                setTimeout(function () {
                    this.context.router.push('/');
                }.bind(this), 1000);
            }.bind(this),
            'json')
            .fail(function (response, status) {
                this.setState({
                    alertClass: 'alert-danger',
                    alertMessage: '用户名或密码错误'
                });
                //this.context.router.push('/add-user');
            }.bind(this));

    }

    render() {
        let alert_class = 'alert';
        let alert_message;
        let alert;
        if (this.state.alertClass !== null && this.state.alertMessage !== null) {
            alert_class = alert_class + ' ' + this.state.alertClass;
            alert_message = this.state.alertMessage;
            alert = <div className={alert_class} role="alert">{alert_message}</div>
        }
        return (
            <form className="zy-oauth-container" onSubmit={this.handleOauth.bind(this)}>
                <div className="zy-oauth-container-body">
                    {alert}
                    <div className="form-group">
                        <label htmlFor="zy-user-id"><span className="glyphicon glyphicon-user"
                                                          aria-hidden="true"></span> 用户名</label>
                        <input className="form-control zy-oauth-field" type="text" id="zy-user-id" name="userId"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="zy-password"><span className="glyphicon glyphicon-lock"
                                                           aria-hidden="true"></span> 密码</label>
                        <input className="form-control zy-oauth-field" type="password" id="zy-password"
                               name="password"/>
                    </div>

                    <button className="btn btn-lg btn-primary zy-btn-user" id="zy-oauth-submit" type="submit">登 录
                    </button>

                </div>
            </form>
        )
    }
}

UserLogin.contextTypes = {
    router: PropTypes.object.isRequired
};

export default UserLogin;