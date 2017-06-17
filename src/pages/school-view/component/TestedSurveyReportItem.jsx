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

                <div className="gs-zy-report-list">
                    <div className="gs-zy-report-left-box">
                        综合测试
                    </div>
                    <div className="gs-zy-report-right-box">
                        <h3 className="gs-zy-report-brief">名称</h3>
                        <p className="gs-zy-report-describe">{nameReport.name}</p>
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