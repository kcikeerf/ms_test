import React from 'react';
import PropTypes from 'prop-types';
import {Link,router} from 'react-router';
import createCookie from './../../../lib/createCookie';

let config = require(`./../../../config/${process.env.NODE_ENV}`);
class ReportItem extends React.Component{
    constructor(){
        super();
    }

    handleSurvey(){
        let testid = this.props.TodoListobj.id;
        let url;
        switch (testid)
        {
            case config.SURVEY_MQ_QUESTION:
                url = config.URL_MQ_REPORT_QUESTION;break;
            case config.SURVEY_PQ_QUESTION:
                url='Today Monday';break;
        }
        createCookie('question_testid',testid);
        window.location.href = url;
    }
    handleReport(){
        this.context.router.push('/myreport');
    }

    render(){
        let nameReport = this.props.TodoListobj;
        console.log(nameReport);
        return(
            <section className="zy-report-section">

                <div className="zx-report-list">
                    <div className="zx-report-left-box">
                        测试
                    </div>
                    <div className="zx-report-right-box">
                        <h3 className="zx-report-brief">名称</h3>
                        <p className="zx-report-describe">{nameReport.name}</p>
                        <button className="btn-primary gs-btn-marign" onClick={this.handleSurvey.bind(this)}>重新自测</button>
                        <button className="btn-primary gs-btn-marign" onClick={this.handleReport.bind(this)}>查看已有报告</button>
                    </div>
                </div>

            </section>
        )
    }
}

ReportItem.contextTypes = {
    router: PropTypes.object.isRequired
};

export default ReportItem;