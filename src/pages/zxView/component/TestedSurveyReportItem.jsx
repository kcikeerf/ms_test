import React from 'react';
import PropTypes from 'prop-types';
import {Link, router} from 'react-router';

import getCookie from 'zx-lib/getCookie';
import createCookie from 'zx-lib/createCookie';
let config = require('zx-const')[process.env.NODE_ENV];

import ProgressReport from './ProgressReport';

class ReportItem extends React.Component {
    constructor() {
        super();
    }

    handleSurvey() {
        let url;
        let testid = this.props.TodoListobj.id;
        let configUrl = config.SURVEY_ID_URL;
        for(let i=0;i<configUrl.length;i++){
            if(testid == configUrl[i].ID){
                url = configUrl[i].QUESTION_URL;
            }
        }
        createCookie('question_testid', testid);
        window.location.href = url;
    }

    handleReport() {
        let url;
        let testid = this.props.TodoListobj.id;
        let configUrl = config.SURVEY_ID_URL;
        for(let i=0;i<configUrl.length;i++){
            if(testid == configUrl[i].ID){
                url = configUrl[i].VIEW_URL;
            }
        }
        createCookie('report_url',this.props.TodoListobj.report_url);
        window.location.href = url;
    }

    render() {
        let nameReport = this.props.TodoListobj;
        console.log(nameReport);
        let task_uid = nameReport.task_uid;
        let cookieTask_uid = getCookie('task_uid');
        console.log(cookieTask_uid);
        let access_token = getCookie('access_token');
        let content;
        if (cookieTask_uid) {
            if (cookieTask_uid == task_uid) {
                content = <ProgressReport
                    task_uid={cookieTask_uid}
                    access_token={access_token}
                    handleSurvey={this.handleSurvey.bind(this)}
                    handleReport={this.handleReport.bind(this)}/>
            }else {
                content =
                    <div>
                        <button className="btn-primary gs-btn-marign" onClick={this.handleSurvey.bind(this)}>重新自测</button>
                        <button className="btn-primary gs-btn-marign" onClick={this.handleReport.bind(this)}>查看已生成报告2</button>
                    </div>;
            }
        } else {
            content =
                <div>
                    <button className="btn-primary gs-btn-marign" onClick={this.handleSurvey.bind(this)}>重新自测</button>
                    <button className="btn-primary gs-btn-marign" onClick={this.handleReport.bind(this)}>查看已生成报告1</button>
                </div>;
        }
        return (
            <section className="zy-report-section">
                <div className="zx-report-list">
                    <div className="zx-report-left-box">
                        测试
                    </div>
                    <div className="zx-report-right-box">
                        <h3 className="zx-report-brief">测试名称</h3>
                        <p className="zx-report-describe">{nameReport.name}</p>
                        {content}
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