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
import MyreportContainer from './component/MyReportContainer';
import UserListContainer from './component/UserListContainer';
import SettingsPage from './component/SettingsPage';
import AddUserPage from './component/AddUserPage';
import CancelUserPage from './component/CancelUserPage';

let config = require(`./../../config/${process.env.NODE_ENV}`);

class ViewReportAppContainer extends React.Component {
    constructor() {
        super();
        this.state = {
            wechatOpenId: null,
            hasBindedUser: null,
            bindedUsers: null
        };
    }

    componentDidMount() {
        let wx_openid = config.TEST_WECHAT_OPENID, user_name, data;
        if (process.env.DEV) {
            /*
             * 开发模式
             * 1. 无需open id
             * 2. 用户名：fa89yycszr
             */
            wx_openid = config.TEST_WECHAT_OPENID;
            user_name = config.TEST_USER_NAME;
            let users = [
                {
                    user_name: user_name
                }
            ];
            createCookie('wx_openid', wx_openid);
        }
        else {
            if (process.env.TEST) {
                wx_openid = config.TEST_WECHAT_OPENID;
                createCookie('wx_openid', wx_openid);
            }
            else {
                wx_openid = getCookie('wx_openid');
            }
        }

        data={
            'wx_openid':wx_openid
        }

        let api_url = config.API_DOMAIN + config.API_GET_BINDED_USERS;
        setTimeout(function () {
            $.post(api_url, data, function (response, status) {
                let users = $.parseJSON(response.data);
                if (users != null) {
                    if (users.length > 0) {
                        this.setState({
                            wechatOpenId: wx_openid,
                            hasBindedUser: true,
                            bindedUsers: users
                        });
                    }
                    else {
                        this.setState({
                            hasBindedUser: false
                        });
                    }
                }
                else {
                    //@TODO: 返回空数据的时候有报错
                    this.setState({
                        hasBindedUser: false
                    });
                }
            }.bind(this), 'json').fail(function (status) {
                this.setState({
                    hasBindedUser: false
                });
            }.bind(this));
        }.bind(this),0);
    }

    render() {
        return (
            <UserListContainer wechatOpenId={this.state.wechatOpenId} hasBindedUser={this.state.hasBindedUser} bindedUsers={this.state.bindedUsers} />
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
        <Route path="/myreport" component={MyreportContainer}></Route>
        <Route path="/settings" component={SettingsPage}></Route>
        <Route path="/add-user" component={AddUserPage}/>
        <Route path="/cancel-user" component={CancelUserPage}/>
    </Router>
), document.getElementById('app'));