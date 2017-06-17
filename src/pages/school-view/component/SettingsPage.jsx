import React from 'react';
import PropTypes from 'prop-types'; // ES6
import {Link} from 'react-router';

class SettingsPage extends React.Component {
    handleNavBack(event) {
        //this.context.router.push('/');
        this.context.router.goBack()
    }
    render() {
        return (
            <div className="container-fluid zy-container">
                <div className="zy-container-top">
                    <div className="zy-nav-top">
                        <span className="glyphicon glyphicon-chevron-left zy-nav-navBack" onClick={this.handleNavBack.bind(this)}></span>
                        <span className="zy-nav-title">设置</span>
                    </div>
                </div>
                <div className="zy-container-body">
                    <div className="zy-settings-item">
                        <Link to="/add-user">
                            <span>绑定账号</span>
                            <span className="glyphicon glyphicon-chevron-right" aria-hidden="true" ></span>
                        </Link>

                    </div>
                    <div className="zy-settings-item">
                        <Link to="/cancel-user">
                            <span>解除账号</span>
                            <span className="glyphicon glyphicon-chevron-right" aria-hidden="true" ></span>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}

SettingsPage.contextTypes = {
    router: PropTypes.object.isRequired
};

export default SettingsPage;