import React from 'react';
import {Link, router} from 'react-router';
import PropTypes from 'prop-types';

import ProgressReport from './ProgressReport';

import {createCookie, getCookie, removeCookie} from 'zx-misc/handleCookie';

let config = require('zx-const')[process.env.NODE_ENV];

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
        createCookie(config.COOKIE.QUEST_TESTID, testid);
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
        let task_uid = nameReport.task_uid;
        let cookieTask_uid = getCookie('task_uid');
        let access_token = getCookie(config.COOKIE.SELECTED_ACCESS_TOKEN);
        let content;
        if (cookieTask_uid) {
            if (cookieTask_uid === task_uid) {
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