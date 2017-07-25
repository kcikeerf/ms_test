import React from 'react';
import UserListItem from './UserListItem';
import PropTypes from 'prop-types';

class UserList extends React.Component {
    constructor() {
        super();
    }

    render() {
        let users;
        let has_binded_user = this.props.hasBindedUser;
        let binded_users = this.props.bindedUsers;
        if (has_binded_user == null) {
            users = <h3>用户列表加载中...</h3>;
        }else if(has_binded_user ===false){
            this.context.router.push('/user-login');
        }else if(has_binded_user === true){
            users = binded_users.map((bindUser, index) => {
                return <UserListItem
                    key={index}
                    wechatOpenId={this.props.wechatOpenId}
                    accessToken={bindUser.oauth}
                    username={bindUser.user_name}
                    userDisplayName={bindUser.name}
                    role={bindUser.role}
                />
            })
        }
        return (
            <div className="zy-user-list">
                <div className="panel-group" role="tablist" aria-multiselectable="true">
                    {users}
                </div>
            </div>
        )
    }
}

UserList.contextTypes = {
    router: PropTypes.object.isRequired
}

export default UserList