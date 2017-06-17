import React from 'react';
import PropTypes from 'prop-types';
import UserList from './UserList';
let config = require(`./../../../config/${process.env.NODE_ENV}`);

class UserListContainer extends React.Component {
    constructor() {
        super();
    }

    // componentWillMount() {
    //     let has_binded_user = this.props.hasBindedUser;
    //     console.log(has_binded_user);
    //     if(has_binded_user === false){
    //         this.context.router.push('/add-user');
    //     }
    // }
    handleNav(){
        event.preventDefault();
        this.context.router.push('/settings');
    }

    render() {
        let style = {
            height: '100%'
        };
        return (
            <div style={style}>
                <div className="zy-report-container">
                    <div className="zy-container-top">
                        <div className="zy-nav-top">
                            <span className="zy-nav-title">综合素质评价</span>
                            <span className="zy-settings-btn" aria-hidden="true" onClick={this.handleNav.bind(this)}>设置</span>
                        </div>
                    </div>
                    <div className="zy-container-body container-fluid">
                        <UserList wechatOpenId={this.props.wechatOpenId} hasBindedUser={this.props.hasBindedUser} bindedUsers={this.props.bindedUsers}/>
                    </div>
                </div>
            </div>
        )
    }
}

UserListContainer.contextTypes = {
    router: PropTypes.object.isRequired
}

export default UserListContainer;