import React from 'react';
import PropTypes from 'prop-types'; // ES6

let config = require('zx-const')[process.env.NODE_ENV];

class Success extends React.Component {
    handleNavBack(event) {
        this.context.router.goBack();
    }

    handleBackList() {
        window.location.href = config.URL_LIST_VIEW;
    }

    handleBackHome() {
        window.location.href = config.URL_LIST_VIEW;
    }

    render() {

        return (
            <div className="container-fluid zy-report-container">
                <div className="zy-container-top">
                    <div className="zy-nav-top">
                        <span className="glyphicon glyphicon-chevron-left zy-nav-navBack"
                              onClick={this.handleNavBack.bind(this)}></span>
                        <span className="zy-nav-title">发展潜能调查表</span>
                    </div>
                </div>
                <div className="zy-survey-container-body container-fluid">
                    <h3>提交成功！！！</h3>
                    <p>请点击返回测试列表，查看生成报告进度</p>
                    <div className="zx-complete-btn">
                        <button className="btn-danger" onClick={this.handleBackList.bind(this)}>返回测试列表</button>
                        <button className="btn-danger" onClick={this.handleBackHome.bind(this)}>返回首页</button>
                    </div>
                </div>
            </div>
        )
    }
}
Success.contextTypes = {
    router: PropTypes.object.isRequired
};

export default Success;