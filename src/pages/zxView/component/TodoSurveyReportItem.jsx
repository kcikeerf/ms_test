import React from 'react';

import createCookie from 'zx-lib/createCookie';

let config = require('zx-const')[process.env.NODE_ENV];

class ReportItem extends React.Component{
    constructor(){
        super();
    }

    handleSurvey(){
        let url;
        let testid = this.props.TodoListobj.id;
        let configUrl = config.SURVEY_ID_URL;
        for(let i=0;i<configUrl.length;i++){
            if(testid == configUrl[i].ID){
                url = configUrl[i].QUESTION_URL;
            }
        }
        createCookie('question_testid',testid);
        window.location.href = url;
    }

    render(){
        let nameReport = this.props.TodoListobj;
        return(
            <section className="zy-report-section">

                <div className="zx-report-list">
                    <div className="zx-report-left-box">
                        测试
                    </div>
                    <div className="zx-report-right-box">
                        <h3 className="zx-report-brief">测试名称：</h3>
                        <p className="zx-report-describe">{nameReport.name}</p>
                        <button className="btn-primary" onClick={this.handleSurvey.bind(this)}>点击自测</button>
                    </div>
                </div>

            </section>
        )
    }
}
export default ReportItem;