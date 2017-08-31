import React from 'react';
import PropTypes from 'prop-types'; // ES6
import $ from 'jquery';

import getCookie from 'zx-lib/getCookie';
let config = require('zx-const')[process.env.NODE_ENV];

class AddUser extends React.Component {
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
            api_url = config.API_DOMAIN + config.API_BIND_USER;
            let zxMainAccessToken = getCookie('zx_main_access_token');

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
                'access_token': zxMainAccessToken,
                'target_user_from': 'password',
                'user_name': event.target.userId.value, // 测试学校ID
                'password': event.target.password.value, // 测试学生ID
            };
            $.post(api_url, data, function(response, status) {
                    this.setState({
                        alertClass: 'alert-success',
                        alertMessage: '成功添加账号！正在为您跳转。'
                    });
                    setTimeout(function () {
                        this.context.router.push('/');
                    }.bind(this), 1000);
                }.bind(this),
                'json')
                .fail(function(response, status) {
                    this.setState({
                        alertClass: 'alert-danger',
                        alertMessage: $.parseJSON(response.responseText).message
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
                        <label htmlFor="zy-user-id"><span className="glyphicon glyphicon-user" aria-hidden="true"></span> 用户名</label>
                        <input className="form-control zy-oauth-field" type="text" id="zy-user-id"  name="userId" placeholder="请输入您的用户名"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="zy-password"><span className="glyphicon glyphicon-lock" aria-hidden="true"></span> 密码</label>
                        <input className="form-control zy-oauth-field" type="password" id="zy-password" name="password" placeholder="请输入您的密码"/>
                    </div>

                    <button className="btn btn-lg btn-primary zy-btn-user" id="zy-oauth-submit" type="submit">绑定账号</button>

                </div>
            </form>
        )
    }
}

AddUser.contextTypes = {
    router: PropTypes.object.isRequired
};

export default AddUser;