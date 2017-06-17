import React from 'react';
import PropTypes from 'prop-types'; // ES6
import $ from 'jquery';

let config = require(`./../../../config/${process.env.NODE_ENV}`);

import getCookie from './../../../lib/getCookie';
import createCookie from './../../../lib/createCookie';


class UserLogin extends React.Component{
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

        let api_url, wx_openid;
        if (process.env.DEV) {
            //@TODO: 在开发模式下，暂时不需要有绑定用户的功能
        }
        else {
            api_url = config.API_DOMAIN + config.API_GET_TOKEN;
            wx_openid = process.env.TEST ? config.TEST_WECHAT_OPENID : getCookie('wx_openid');

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
                'grant_type':'password',
                'name': event.target.userId.value, // 测试学校ID
                'password': event.target.password.value // 测试学生ID
            };


            $.post(api_url, data, function(response,status) {
                    console.log(response);
                    createCookie('access_token',response.access_token);
                    this.setState({
                        alertClass: 'alert-success',
                        alertMessage: '成功添加账号！正在为您跳转。'
                    });
                    setTimeout(function () {
                        this.context.router.push('/todo-list');
                    }.bind(this), 1000);
                }.bind(this),
                'json')
                .fail(function(response, status) {
                    this.setState({
                        alertClass: 'alert-danger',
                        alertMessage: '用户名或密码错误'
                    });
                    //this.context.router.push('/add-user');
                }.bind(this));
        }
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
                        <label htmlFor="zy-user-id">用户名</label>
                        <input className="form-control zy-oauth-field" type="text" id="zy-user-id"  name="userId"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="zy-password">密码</label>
                        <input className="form-control zy-oauth-field" type="password" id="zy-password" name="password"/>
                    </div>

                    <button className="btn btn-lg btn-primary" id="zy-oauth-submit" type="submit">登录</button>

                </div>
            </form>
        )
    }
}

UserLogin.contextTypes = {
    router: PropTypes.object.isRequired
};

export default UserLogin;