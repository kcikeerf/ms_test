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
            qzp_order: null,
            qzp_body: null,
            qzp_answer: null,
            data_ready: null,
            related_ready: null
        }
    }

    componentDidMount() {

        let userAccessToken = getCookie(config.COOKIE.SELECTED_ACCESS_TOKEN);
        let user_name = getCookie('user_name');
        let test_id = this.props.params.test_id;
        let qzp_id = this.props.params.qzp_id;

        this.setState({
            test_id: test_id,
            qzp_id: qzp_id,
        });

        let api_quiz_details = config.CDN_WLXX_QUIZE_URL + '/quize.json';

        let data = {
            access_token: userAccessToken,
            user_name: user_name,
            test_id: test_id,
            qzp_id: qzp_id
        };

        let qzp_order, qzp_body, qzp_answer, quiz_uid;

        $.get(api_quiz_details, data, function (responses, status) {
            let reaponeseArr = [];
            console.log(responses);
            for(let i=0;i<responses.length;i++){
                if(responses[i].id === qzp_id){
                    reaponeseArr.push(responses[i]);
                    break;
                }
            }
            let response = reaponeseArr[0];
            console.log(response);
            quiz_uid = response.id;
            qzp_order = response.order;
            // qzp_order = this.isQzpOrder(response.qzp_custom_order, response.qzp_order, response.qzp_asc_order);
            qzp_body = response.text;
            qzp_answer = response.answer;

            this.setState({
                data_ready: true,
                classPreloader: 'loaded',
                qzp_order: qzp_order,
                qzp_body: qzp_body,
                qzp_answer: qzp_answer
            });
            //推送试题的方法
            this.quizsPlus(userAccessToken, quiz_uid);
        }.bind(this), 'json')
            .fail(function (status) {
                this.setState({
                    data_ready: false,
                    classPreloader: ''
                });
            }.bind(this));
    }

    // 推题的方法
    quizsPlus(userAccessToken, quiz_uid) {
        let api_quiz_details = config.CDN_WLXX_RELATED_QUIZE_URL + '/qiuz_detail.json';
        let relatedQuizsPromise = $.get(api_quiz_details);
        relatedQuizsPromise.done(function (responses) {
            let reaponeseArr = [];
            for(let i=0;i<responses.length;i++){
                if(responses[i].uid === quiz_uid){
                    reaponeseArr.push(responses[i]);
                }
            }
            if (reaponeseArr.length !== 0) {
                this.setState({
                    related_ready: true,
                    relatedQuizs: reaponeseArr
                });
            }
        }.bind(this));

        relatedQuizsPromise.fail(function (errorResponse) {
            this.setState({
                related_ready: false,
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

    handleTab(e) {
        e.preventDefault();
        let target = e.target;
        let tab_parent_others = $(target).parent().siblings().removeClass('active');
        let tab_parent_this = $(target).parent().addClass('active');
        let tab_id = $(target).attr('id');
        let pane_id = '#pan-' + tab_id;
        $(pane_id).siblings().hide();
        $(pane_id).show();
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
        let qzp_order = this.state.qzp_order;
        let data_ready = this.state.data_ready;
        let related_ready = this.state.related_ready;
        let qzp_body = this.state.qzp_body;
        let qzp_answer = this.state.qzp_answer;
        let relatedQuizs = this.state.relatedQuizs;
        let selectedQuizId = this.props.params.qzp_id;

        let content_qzp_answer = this.handleRegData(qzp_answer);
        let quizOtherInfo, quizId, quizKnowledge, quizStatsData, quizStatsStudent, conentQuizStudent;


        let tab_id_academic = 'zy-academic-report-123-tab-1';
        let tab_id_other = 'zy-other-report-tab-1';

        let pane_id_academic = 'zy-academic-report-123-pane-1';
        let pane_id_other = 'zy-other-report-pane-1';

        let content_modal, relatedQuizItem;

        if (data_ready === false) {
            content_modal = <h3 className="zy-text-align-center">网络繁忙，请稍后再试</h3>;
        }
        else if (data_ready === true) {
            content_modal =
                <section className="zy-report-section">
                    <section className="zy-report-subsection">
                        <h3 className="zy-report-subsection-title">题目</h3>
                        <div className="zy-qzp-body-container zy-overflow-x-scroll"
                             dangerouslySetInnerHTML={{__html: qzp_body}}/>
                    </section>
                    <section className="zy-report-subsection">
                        <h3 className="zy-report-subsection-title">参考答案</h3>
                        {content_qzp_answer}
                    </section>
                    {conentQuizStudent}
                </section>;
        }

        if (related_ready === false) {
            relatedQuizItem = <h3 className="zy-text-align-center">网络繁忙，请稍后再试</h3>;
        }
        else if (related_ready === true) {
            relatedQuizItem = relatedQuizs.map(function (item, index) {
                return <section className="zy-report-section" key={index}>
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
                    <section className="zy-report-subsection">
                        <h3 className="zy-report-subsection-title">题型</h3>
                        <div className="zy-qzp-body-container">
                            {item.cat_cn}
                        </div>
                    </section>
                    <section className="zy-report-subsection">
                        <h3 className="zy-report-subsection-title">难度</h3>
                        <div className="zy-qzp-body-container">
                            {item.levelword}
                        </div>
                    </section>
                </section>
            }.bind(this));
        }

        let dataItem =
            <div className="zy-report-tab-container">
                <div className="col s12">
                    <ul className="tabs">
                        <li className="tab col s3 active"><span id='test1' onClick={this.handleTab.bind(this)}>试题分析</span></li>
                        <li className="tab col s3"><span id='test2' onClick={this.handleTab.bind(this)}>试题推送</span></li>
                    </ul>
                    <div className="tab-content">
                        <div id='pan-test1' className="col s12">
                            {content_modal}
                        </div>
                        <div id='pan-test2' style={{display:'none'}} className="col s12">
                            {relatedQuizItem}
                        </div>
                    </div>

                </div>
            </div>;

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
                            {dataItem}
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