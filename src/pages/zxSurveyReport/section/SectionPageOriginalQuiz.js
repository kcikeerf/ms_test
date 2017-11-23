import React from 'react';
import PropTypes from 'prop-types'; // ES6
import $ from 'jquery';

import {createCookie, getCookie, removeCookie} from 'zx-misc/handleCookie';

import Preloader from '../component/Preloader';

let config = require('zx-const')[process.env.NODE_ENV];

class SectionPageQuizAnalysis extends React.Component {
    constructor() {
        super();
        this.state = {
            classPreloader: '',
            relatedQuizs: null
        }
    }

    componentDidMount() {
        let userAccessToken = getCookie(config.COOKIE.SELECTED_ACCESS_TOKEN);
        // let test_id = this.props.params.test_id;
        let ckp_id = this.props.params.ckp_id;

        let api_quiz_details = config.CDN_WLXX_INDICATOR_QUIZE_URL;

        let qzp_order, qzp_body, qzp_answer, quiz_uid;

        $.get(api_quiz_details, function (responses, status) {
            let reaponeseArr = [];
            for (let i = 0; i < responses.length; i++) {
                if (responses[i].ckp_id === ckp_id) {
                    reaponeseArr.push(...responses[i].data);
                    break;
                }
            }
            if (reaponeseArr.length !== 0) {
                this.setState({
                    classPreloader: 'loaded',
                    relatedQuizs: reaponeseArr
                });
            }

        }.bind(this), 'json')
            .fail(function (status) {
                this.setState({
                    classPreloader: ''
                });
            }.bind(this));
    }

    handleNavBack(event) {
        this.context.router.goBack();
    }

    // 处理返回的正确答案
    handleRegData(str) {
        if (str != null && typeof str != 'undefined') {
            if (/^\d{1,3}\./.test(str)) {
                //let tmp_str = str.replace(/(\r\n|\n|\r|\s)/gm, '');
                let tmp_str_array = str.split(/\d{1,3}\./);
                tmp_str_array.splice(0, 1);
                if (tmp_str_array.length === 1) {
                    return <div className="zy-qzp-answer-container zy-overflow-x-scroll">{tmp_str_array[0]}</div>;
                }
                else if (tmp_str_array.length > 1) {
                    let content_item = tmp_str_array.map((answer, index) =>
                        <li key={index}>
                            {answer}
                        </li>
                    );

                    return <div className="zy-qzp-answer-container zy-overflow-x-scroll">
                        <ol>{content_item}</ol>
                    </div>;
                }
                return str;
            }
            else {
                str = str.replace(/(\r\n|\n|\r)/gm, '<br/>');
                return <div className="zy-qzp-answer-container zy-overflow-x-scroll"
                            dangerouslySetInnerHTML={{__html: str}}/>;
            }
        }
        else {
            return str;
        }
    }

    handleTarget(quizId, e) {
        let reportType = this.props.params.report_type;

        this.context.router.replace(`quiz-list/${this.state.test_id}/${quizId}/${reportType}`);
    }

    // 处理题目推送答案隐藏
    handleAnswerDisplay(e) {
        let answer = $(e.target).parents('.zy-report-section').find('.zy-qzp-answer-diaplay').toggle(300);
    }

    render() {
        let related_ready = this.state.related_ready;
        let relatedQuizs = this.state.relatedQuizs;
        let selectedQuizId = this.props.params.qzp_id;

        let quizOtherInfo, quizId, quizKnowledge, quizStatsData, quizStatsStudent, conentQuizStudent;

        let tab_id_academic = 'zy-academic-report-123-tab-1';
        let tab_id_other = 'zy-other-report-tab-1';

        let pane_id_academic = 'zy-academic-report-123-pane-1';
        let pane_id_other = 'zy-other-report-pane-1';

        let content_modal, relatedQuizItem;

        if (relatedQuizs) {
            relatedQuizItem = relatedQuizs.map(function (item, index) {
                return(
                <section className="zy-report-section" key={index}>
                    <h2 className="zy-section-title">第{item.order}题</h2>
                    <section className="zy-report-subsection">
                        <h3 className="zy-report-subsection-title">题目</h3>
                        <div className="zy-qzp-body-container zy-overflow-x-scroll"
                             dangerouslySetInnerHTML={{__html: item.text}}/>
                    </section>
                    <section className="zy-report-subsection">
                        <h3 className="zy-report-subsection-title">参考答案</h3>
                        <button type="button" className="btn zy-btn-answer-color"
                                onClick={this.handleAnswerDisplay.bind(this)}>查看答案
                        </button>
                        <div className="zy-qzp-body-container zy-qzp-answer-diaplay zy-overflow-x-scroll"
                             dangerouslySetInnerHTML={{__html: item.answer}}/>
                    </section>
                </section>)
            }.bind(this));
        }

        let style = {
            minHeight: '100%'
        };

        return (
            <div className={this.state.classPreloader} style={style}>
                <Preloader/>
                <div className="container-fluid zy-report-container zy-report-container-white">
                    <div className="zy-container-top">
                        <div className="zy-nav-top">
                            <span className="material-icons zy-nav-navBack" onClick={this.handleNavBack.bind(this)}>chevron_left</span>
                            <span className="zy-nav-title">快报试题分析</span>
                        </div>
                    </div>
                    <div className="zy-container">
                        <div className="zy-container-body">
                            <div className="zy-report-tab-container">
                                {relatedQuizItem}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

SectionPageQuizAnalysis.contextTypes = {
    router: PropTypes.object.isRequired
};

export default SectionPageQuizAnalysis;