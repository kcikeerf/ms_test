import React from 'react';
import PropTypes from 'prop-types';
import UserList from './UserList';

let config = require('zx-const')[process.env.NODE_ENV];

class UserListContainer extends React.Component {
    constructor() {
        super();
    }

    handleNav() {
        event.preventDefault();
        this.context.router.push('/settings');
    }

    render() {
        let style = {
            height: '100%'
        };
        return (
            <div className="container-fluid zy-container">
                <div className="zy-container-top">
                    <div className="zy-nav-top">
                        <span className="zy-nav-logo">{config.LOGO}</span>
                        <span className="zy-nav-title">综合素质评价</span>
                        <span className="zy-settings-btn" aria-hidden="true"
                              onClick={this.handleNav.bind(this)}>设置</span>
                    </div>
                </div>
                <div className="zy-container-body">
                    <UserList zxMainAccessToken={this.props.zxMainAccessToken}
                              zxAccessMatser={this.props.zxAccessMatser}
                              hasBindedUser={this.props.hasBindedUser}
                              bindedUsers={this.props.bindedUsers}/>
                </div>
            </div>
        )
    }
}

UserListContainer.contextTypes = {
    router: PropTypes.object.isRequired
}

export default UserListContainer;