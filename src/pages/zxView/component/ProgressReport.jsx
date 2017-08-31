import React from 'react';
import $ from 'jquery';
import PropTypes from 'prop-types';

let config = require('zx-const')[process.env.NODE_ENV];

class ProgressReport extends React.Component {
    constructor() {
        super();
        this.state = {
            progress: null
        };
    }

    componentDidMount() {
        let task_uid = this.props.task_uid;
        let access_token = this.props.access_token;
        let data = {
            access_token: access_token,
            task_uid: task_uid
        };
        let api_url = config.API_DOMAIN + config.API_JOB_STATUS;

        let t = setInterval(function () {

            $.post(api_url, data, function (response) {
                console.log(response);
                this.setState({
                    progress: response.jobs[0].progress
                });
                if(response.jobs[0].progress == 1){
                    clearInterval(t);
                }
            }.bind(this)).fail(function (errorResponse) {
                if (errorResponse) {
                    clearInterval(t);
                }
            }.bind(this))

        }.bind(this), 200);
    }

    render() {
        let content;
        if (this.state.progress >=1) {
            content =
                <div>
                    <button className="btn-primary gs-btn-marign" onClick={this.props.handleSurvey.bind(this)}>重新自测</button>
                    <button className="btn-primary gs-btn-marign" onClick={this.props.handleReport.bind(this)}>查看生成报告3
                    </button>
                </div>;
        } else {
            let progress = `${this.state.progress * 100}%`;
            let style = {
                width: progress
            };
            content =
                <div className="progress">
                    <div className="progress-bar progress-bar-success progress-bar-striped" role="progressbar"
                         aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style={style}>
                        <span className="sr-only">{progress}</span>
                    </div>
                </div>;
        }
        return (
            <div>
                {content}
            </div>

        )
    }
}

ProgressReport.contextTypes = {
    handleSurvey: PropTypes.func,
    handleReport: PropTypes.func
}

export default ProgressReport;