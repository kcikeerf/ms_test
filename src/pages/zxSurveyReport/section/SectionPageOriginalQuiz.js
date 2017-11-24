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
        let test_id = this.props.params.test_id;
        let ckp_id = this.props.params.ckp_id;

        let data = {
            access_token: userAccessToken,
            test_uid: test_id,
            ckp_uid: ckp_id
        };
        let api_qiuze_plus = config.API_DOMAIN + config.API_GET_PAPER_QUIZ_CKPS;
        let api_quiz_details = config.CDN_WLXX_INDICATOR_QUIZE_URL;

        let qzp_order, qzp_body, qzp_answer, quiz_uid;
        let quizDetailsProsmis = $.get(api_quiz_details);
        let quizPlusProsmis = $.post(api_qiuze_plus, data);

        $.when(quizPlusProsmis, quizDetailsProsmis).done(function (indicatorQuizeResponse, paperQuizCkpsResponse) {
            indicatorQuizeResponse = indicatorQuizeResponse[0];
            paperQuizCkpsResponse = paperQuizCkpsResponse[0];
            let reaponeseArr = [];
            for (let i = 0; i < indicatorQuizeResponse.qzps.length; i++) {
                for (let j = 0; j < paperQuizCkpsResponse.length; j++) {
                    if (indicatorQuizeResponse.qzps[i].uid === paperQuizCkpsResponse[j].id) {
                        reaponeseArr.push(paperQuizCkpsResponse[j]);
                    }
                }
            }
            this.setState({
                classPreloader: 'loaded',
                relatedQuizs: reaponeseArr
            });

        }.bind(this)).fail(function (errorResponse) {
            console.log(errorResponse);
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

        if (relatedQuizs && relatedQuizs.length!==0) {
            relatedQuizItem = relatedQuizs.map(function (item, index) {
                return (
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
        }else {

            relatedQuizItem = <section className="zy-report-section" style={{textAlign:"center"}}>网络延时，请重新加载...</section>
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
                            <span className="zy-nav-title">快报试题</span>
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