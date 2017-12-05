import React from 'react';
import {Link, router} from 'react-router';
import PropTypes from 'prop-types';

import ProgressReport from './ProgressReport';

import {createCookie, getCookie, removeCookie} from 'zx-misc/handleCookie';

import zxbg from 'zx-img/zxbg.png';
import zxly from 'zx-img/ly.png';

let config = require('zx-const')[process.env.NODE_ENV];

class TestedSurveyReportItem extends React.Component {
    constructor() {
        super();
    }

    handleSurvey() {
        let url;
        let testid = this.props.TestList.id;
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
        let testid = this.props.TestList.id;
        let report_url = this.props.TestList.report_url;
        let configUrl = config.SURVEY_ID_URL;
        for(let i=0;i<configUrl.length;i++){
            if(testid == configUrl[i].ID){
                url = configUrl[i].VIEW_URL;
            }
        }
        createCookie('report_url',report_url);
        window.location.href = url;
    }

    render() {
        let testList = this.props.TestList;
        let task_uid = testList.task_uid;
        let process = testList.latest_job_process;

        let access_token = getCookie(config.COOKIE.SELECTED_ACCESS_TOKEN);

        let content;
        if(process === 1){
            content =
                <div>
                    <button className="btn-primary gs-btn-marign" onClick={this.handleSurvey.bind(this)}>重新自测</button>
                    <button className="btn-primary gs-btn-marign" onClick={this.handleReport.bind(this)}>查看成报告</button>
                </div>;
        }else {
            content = <ProgressReport
                task_uid={task_uid}
                access_token={access_token}
                handleSurvey={this.handleSurvey.bind(this)}
                handleReport={this.handleReport.bind(this)}
                handleTestList = {this.props.handleTestList.bind(this)}/>
        }

        let imgs;
        if(testList.name === '《论语》 阅读微信测试'){
            imgs = <img src={zxly} style={{width:'100%',height:'100%'}} alt=""/>
        }else {
            imgs = <img src={zxbg} style={{width:'100%',height:'100%'}} alt=""/>
        }

        return (
            <section className="zy-report-section">
                <div className="zx-report-list">
                    <div className="zx-report-left-box">
                        <img src={zxbg} style={{width:'100%',height:'100%'}} alt=""/>
                    </div>
                    <div className="zx-report-right-box">
                        <h3 className="zx-report-brief">测试名称</h3>
                        <p className="zx-report-describe">{testList.name}</p>
                        {content}
                    </div>
                </div>

            </section>
        )
    }
}

TestedSurveyReportItem.contextTypes = {
    router: PropTypes.object.isRequired,
    handleTestList: PropTypes.func
};

export default TestedSurveyReportItem;