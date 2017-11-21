import React from 'react';
import PropTypes from 'prop-types'; // ES6

import UserListItem from './UserListItem';

class UserList extends React.Component {
    constructor() {
        super();
        this.state = {
            users: null
        };
    }

    render() {
        let data_parent = 'accordion';
        let has_binded_user = this.props.hasBindedUser;
        let binded_users = this.props.bindedUsers;
        let zxAccessMatser = this.props.zxAccessMatser;

        let users;
        let mianUser;
        if(zxAccessMatser){
            mianUser = <UserListItem
                userAccessToken={zxAccessMatser.oauth.access_token}
                userName={zxAccessMatser.user_name}
                userDisplayName={zxAccessMatser.name}
                userRole={zxAccessMatser.role}
                dataParent={data_parent}
                collapse={zxAccessMatser}
            />;
        }

        if (has_binded_user === null) {
            // @TODO: 换成loader
            users = <h3>用户列表加载中...</h3>;
        }
        else if (has_binded_user === true) {
            let collapse;
            if (binded_users.length === 1) {
                collapse = false;
            }
            else if (binded_users.length > 1) {
                collapse = true;
            }
            users = binded_users.map((bindedUser, index) => {
                return <UserListItem
                    key={index}
                    userAccessToken={bindedUser.oauth.access_token}
                    itemKey={index}
                    userName={bindedUser.user_name}
                    userDisplayName={bindedUser.name}
                    userRole={bindedUser.role}
                    dataParent={data_parent}
                    collapse={collapse}
                />;
            });
        }
        else if (has_binded_user === false) {
            // 导航到登录界面
            // @TODO: 需要想另外一个法子。。。
            this.context.router.push('/welcome');
        }

        return (
            <div className="zy-user-list">
                <div className="panel-group" id={data_parent} role="tablist" aria-multiselectable="true">
                    {mianUser}
                    {users}
                </div>
            </div>
        )
    }
}

UserList.contextTypes = {
    router: PropTypes.object.isRequired
};

export default UserList;