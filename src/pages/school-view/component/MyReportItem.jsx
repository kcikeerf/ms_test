import React from 'react';
import createCookie from './../../../lib/createCookie';

let config = require(`./../../../config/${process.env.NODE_ENV}`);
class ReportItem extends React.Component{
    constructor(){
        super();
    }

    handleReport(){
        let testid = this.props.myreport.test_id;
        let url;
        switch (testid)
        {
            case config.SURVEY_MQ_QUESTION:
                url = config.URL_MQ_REPORT_VIEW;break;
            case config.SURVEY_PQ_QUESTION:
                url = config.URL_PQ_REPORT_VIEW;break;
        }
        createCookie('report_url',this.props.myreport.report_url);
        window.location.href = url;
    }

    render(){
        let nameReport = this.props.myreport;
        console.log(nameReport);
        return(
            <section className="zy-report-section">

                <div className="zx-report-list">
                    <div className="zx-report-left-box">
                        测试报告
                    </div>
                    <div className="zx-report-right-box">
                        <h3 className="zx-report-brief">名称</h3>
                        <p className="zx-report-describe">{nameReport.name}</p>
                        <button className="btn-primary" onClick={this.handleReport.bind(this)}>点击查看报告</button>
                    </div>
                </div>

            </section>
        )
    }
}
export default ReportItem;