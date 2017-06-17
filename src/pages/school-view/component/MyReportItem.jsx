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
                url='Today Monday';break;
        }
        createCookie('report_url',this.props.myreport.report_url);
        window.location.href = url;
    }

    render(){
        let nameReport = this.props.myreport;
        console.log(nameReport);
        return(
            <section className="zy-report-section">

                <div className="gs-zy-report-list">
                    <div className="gs-zy-report-left-box">
                        测试报告
                    </div>
                    <div className="gs-zy-report-right-box">
                        <h3 className="gs-zy-report-brief">名称</h3>
                        <p className="gs-zy-report-describe">{nameReport.name}</p>
                        <button className="btn-primary" onClick={this.handleReport.bind(this)}>点击查看报告</button>
                    </div>
                </div>

            </section>
        )
    }
}
export default ReportItem;