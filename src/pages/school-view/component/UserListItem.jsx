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
        let role = this.props.role;
        let username;
        if(role == 'guest'){
            username='默认'
        }
        else {
            username = this.props.userDisplayName
        }
        return (

            <div className="panel">
                <div className="panel-heading gs-user-list" onClick={this.headeUser.bind(this)}>
                    <span>{username}用户</span>
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