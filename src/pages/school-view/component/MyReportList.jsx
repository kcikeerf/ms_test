import React from 'react';

import PropTypes from 'prop-types'; // ES6

import MyReportItem from './MyReportItem'

class MyreportList extends React.Component{
    constructor(){
        super()
    }

    handleNavBack(event) {
        this.context.router.goBack();
    }

    render(){
        let myreport = this.props.myreport;
        let myreportList;
        if(myreport!==null){
            if(myreport.length > 0){
                myreportList = myreport.map(function (obj,index) {
                    return <MyReportItem key = {index} myreport = {obj} />
                })
            }else {
                myreportList = <div>暂时没有报告，可能在解读中。。。</div>
            }
        }

        return(
            <div className="zy-report-container">
                <div className="zy-container-top">
                    <div className="zy-nav-top">
                        <span className="glyphicon glyphicon-chevron-left zy-nav-navBack" onClick={this.handleNavBack.bind(this)}></span>
                        <span className="zy-nav-title">我的报告</span>
                    </div>
                </div>
                <div className="container-fluid zy-container-body">
                    {myreportList}
                </div>
            </div>
        )
    }
}

MyreportList.contextTypes = {
    router: PropTypes.object.isRequired
};

export default MyreportList;