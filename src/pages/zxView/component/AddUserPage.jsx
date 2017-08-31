import React from 'react';
import PropTypes from 'prop-types'; // ES6

import AddUser from './AddUser'

class AddUserPage extends React.Component {
    handleNavBack(event) {
        this.context.router.goBack();
    }
    render() {
        return (
            <div className="container-fluid zy-container">
                <div className="zy-container-top">
                    <div className="zy-nav-top">
                        <span className="glyphicon glyphicon-chevron-left zy-nav-navBack" onClick={this.handleNavBack.bind(this)}></span>
                        <span className="zy-nav-title">绑定账号</span>
                    </div>
                </div>
                <div className="zy-container-body">
                    <AddUser />
                </div>
            </div>
        )
    }
}

AddUserPage.contextTypes = {
    router: PropTypes.object.isRequired
};

export default AddUserPage;