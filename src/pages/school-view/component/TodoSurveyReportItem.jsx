import React from 'react';
import createCookie from './../../../lib/createCookie';

let config = require(`./../../../config/${process.env.NODE_ENV}`);
class ReportItem extends React.Component{
    constructor(){
        super();
    }

    handleSurvey(){
        let url;
        let testid = this.props.TodoListobj.id;
        if(testid == config.SURVEY_MQ_QUESTION){
            url = config.URL_MQ_REPORT_QUESTION;
        }else if(testid == config.SURVEY_PQ_QUESTION){
            url = config.URL_MQ_REPORT_QUESTION;
        }
        createCookie('question_testid',testid);
        window.location.href = url;
    }

    render(){
        let nameReport = this.props.TodoListobj;
        return(
            <section className="zy-report-section">

                <div className="gs-zy-report-list">
                    <div className="gs-zy-report-left-box">
                        综合测试
                    </div>
                    <div className="gs-zy-report-right-box">
                        <h3 className="gs-zy-report-brief">名称</h3>
                        <p className="gs-zy-report-describe">{nameReport.name}</p>
                        <button className="btn-primary" onClick={this.handleSurvey.bind(this)}>点击自测</button>
                    </div>
                </div>

            </section>
        )
    }
}
export default ReportItem;