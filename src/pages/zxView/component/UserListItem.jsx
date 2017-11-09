import React from 'react';
import PropTypes from 'prop-types';

import {createCookie, getCookie, removeCookie} from 'zx-misc/handleCookie';

let config = require('zx-const')[process.env.NODE_ENV];

class UserListItem extends React.Component {
    constructor() {
        super();
    }

    headeUser() {
        let userAccessToken = this.props.userAccessToken;
        let opendId = this.props.wechatOpenId;
        createCookie(config.COOKIE.SELECTED_ACCESS_TOKEN, userAccessToken);
        this.context.router.push('/todo-list');
    }

    render() {
        let user_role = this.props.userRole;
        let username = this.props.userDisplayName;
        let user_title_role;

        if(username == '-'||username == '-'){
            user_title_role = '';
            username = '甄学用户';
        }

        if (user_role == 'teacher') {
            user_title_role = '老师';
        }
        else if (user_role == 'pupil') {
            user_title_role = '同学';
        }
        else if (user_role == 'tenant_administrator') {
            user_title_role = '校长';
        }
        else if (user_role == 'area_administrator') {
            user_title_role = '局长';
        }

        return (
            <div className="panel">
                <div className="panel-heading gs-user-list" onClick={this.headeUser.bind(this)}>
                    <div className="panel-heading" role="tab">
                        <h4 className="panel-title">
                            <a href="javascript:;" className="zy-panel-link">
                                <div className="zy-user-title">
                                    <span className="zy-user-name">{username}</span>
                                    <span className="zy-user-role">{user_title_role}</span>
                                </div>
                                <span className="zy-collapse glyphicon glyphicon-menu-right"></span>
                            </a>
                        </h4>
                    </div>
                </div>
            </div>
        )
    }
}

UserListItem.contextTypes = {
    router: PropTypes.object.isRequired
};

export default UserListItem;