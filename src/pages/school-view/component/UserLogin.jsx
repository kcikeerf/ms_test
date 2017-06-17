import React from 'react';
import PropTypes from 'prop-types'; // ES6
import UserLoginPage from './UserLoginPage';

class UserLogin extends React.Component{
    constructor() {
        super();
    }

    handleNavBack(event) {
        this.context.router.goBack();
    }
    render(){
        return(
            <div className="container-fluid zy-container">
                <div className="zy-container-top">
                    <div className="zy-nav-top">
                        <span className="glyphicon glyphicon-chevron-left zy-nav-navBack" onClick={this.handleNavBack.bind(this)}></span>
                        <span className="zy-nav-title">账号登录</span>
                    </div>
                </div>
                <div className="zy-container-body">
                    <UserLoginPage />
                </div>
            </div>
        )
    }

}

UserLogin.contextTypes = {
    router: PropTypes.object.isRequired
};

export default UserLogin;