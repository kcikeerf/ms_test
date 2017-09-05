import React from 'react';
import PropTypes from 'prop-types'; // ES6

import DetailsBasic from './DetailsBasic';
import DetailsCredibility from './DetailsCredibility';
import DetailsIntroduction from './DetailsIntroduction';
import DetailsResult from './DetailsResult';
import DetailsAdvice from './DetailsAdvice';

class ReportDetails extends React.Component {
    handleNavBack(event) {
        this.context.router.goBack();
    }
    render() {
        let report_details = this.props.reportDetails;
        if (report_details === null) {
            return <div></div>;
        }
        console.log(report_details);
        
        // 基本信息
        let report_details_basic = report_details.basic;
        let content_basic = <DetailsBasic data={report_details_basic} />;

        // 测试的信度
        let report_details_credibility = report_details.credibility;
        let content_credibility;
        if (report_details_credibility != null) {
            content_credibility = <DetailsCredibility data={report_details_credibility} />;
        }
        //关于测评的说明
        let content_introduction = <DetailsIntroduction />;

        //关于测评结果
        let report_details_result = report_details.result;
        let content_result = <DetailsResult data={report_details_result}/>;

        //测评建议
        let suggestions = report_details.suggestions[0];
        let content_advice = <DetailsAdvice data = {suggestions}/>

        return (
            <div className="container-fluid zy-report-container">
                <div className="zy-container-top">
                    <div className="zy-nav-top">
                        <span className="glyphicon glyphicon-chevron-left zy-nav-navBack" onClick={this.handleNavBack.bind(this)}></span>
                        <span className="zy-nav-title">学生发展潜能报告</span>
                    </div>
                </div>
                <div className="zy-container-body">
                    <section className="zy-report-section">
                        {content_basic}
                    </section>

                    <section className="zy-report-section">
                        {content_credibility}
                    </section>

                    <section className="zy-report-section">
                        {content_introduction}
                    </section>

                    <section className="zy-report-section">
                        {content_result}
                    </section>

                    <section className="zy-report-section">
                        {content_advice}
                    </section>
                </div>
            </div>
        )
    }
}

ReportDetails.contextTypes = {
    router: PropTypes.object.isRequired
};

export default ReportDetails;