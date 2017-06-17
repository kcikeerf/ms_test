import React from 'react';

class DetailsCredibility extends React.Component {
    render() {
        let report_details_credibility = this.props.data;
        let credibility_duration = report_details_credibility.credibility_duration;
        let credibility_response = report_details_credibility.credibility_response;
        let credibility_overall = report_details_credibility.credibility_overall;

        return (
            <div className="row">
                <div className="col-sm-12 col-xs-12">
                    <h2 className="zy-report-section-title">测评结果可信度</h2>
                </div>
                <div className="col-sm-4 col-xs-4">
                    <div className="zy-credibility-meta">
                        <div className="zy-credibility-meta-label">答题时长</div>
                        <div className="zy-credibility-meta-item zy-credibility-meta-item-normal">{credibility_duration}</div>
                    </div>
                </div>
                <div className="col-sm-4 col-xs-4">
                    <div className="zy-credibility-meta">
                        <div className="zy-credibility-meta-label">随意反应</div>
                        <div className="zy-credibility-meta-item zy-credibility-meta-item-normal">{credibility_response}</div>
                    </div>
                </div>
                <div className="col-sm-4 col-xs-4">
                    <div className="zy-credibility-meta">
                        <div className="zy-credibility-meta-label">结果可信度</div>
                        <div className="zy-credibility-meta-item zy-credibility-meta-item-normal">{credibility_overall}</div>
                    </div>
                </div>
            </div>
        )
    }
}

DetailsCredibility.contextTypes = {
    router: React.PropTypes.object.isRequired
};

export default DetailsCredibility;