import React from 'react';
import createCookie from './../../../lib/createCookie';
import PropTypes from 'prop-types';

class UserListItem extends React.Component {
    constructor() {
        super();
    }
    headeUser(){
        let access_token = this.props.accessToken.access_token;
        let opendId = this.props.wechatOpenId;
        createCookie('access_token',access_token);
        this.context.router.push('/todo-list');
    }

    render() {
        let user_role = this.props.role;
        let user_title_role;
        let username = this.props.userDisplayName
        if (user_role == 'teacher') {
            user_title_role = '老师';
        }
        else if (user_role == 'pupil') {
            user_title_role = '同学';
        }
        else if (user_role == 'area_administrator') {
            user_title_role = '校长';
        }
        else {
            user_title_role = '';
            username = '甄学用户';
        }

        return (

            <div className="panel">
                <div className="panel-heading gs-user-list" onClick={this.headeUser.bind(this)}>
                    <span>{username}{user_title_role}</span>
                    <span>点击进入>>></span>
                </div>
            </div>
        )
    }
}

UserListItem.contextTypes = {
    router: PropTypes.object.isRequired
}

export default UserListItem;