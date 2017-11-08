import React, {Component} from 'react';
import PropTypes from 'prop-types'; // ES6
import {Map, is} from 'immutable';
import $ from 'jquery';

import 'zx-style/customScrollBar/customScrollBar.css';
require('jquery-mousewheel')($);
require('malihu-custom-scrollbar-plugin')($);

let config = require('zx-const')[process.env.NODE_ENV];

export class SectionReportQuiz extends Component {
    constructor() {
        super();
        this.state = {
            modalActive: null,
            selectedQuizId: null,
            selectedQuizOrder: null,
            selectedQuizKnowledge: null,
            selectedQuizKnowledgeId: null,
            selectedQuizParentData: null
        };
    }
    // //判断是否数据是否更改
    // shouldComponentUpdate(nextProps, nextState) {
    //     let propsMap = Map(this.props);
    //     let nextPropsMap = Map(nextProps);
    //     return !is(propsMap, nextPropsMap);
    // }

    handleQuizModalOpen(selectedQuizId, selectedQuizOrder,selectedQuizKnowledge, selectedQuizKnowledgeId, selectedQuizParentData=null) {
        let modalID = '#' + selectedQuizId;
        this.setState({
            modalActive: true,
            selectedQuizId,
            selectedQuizOrder,
            selectedQuizKnowledge,
            selectedQuizKnowledgeId,
            selectedQuizParentData
        });

        $('#zx-modal-quiz').modal('open');
    }

    render() {
        let accessToken = this.props.accessToken;
        let testId = this.props.testId;
        let id = this.props.id;
        let title = this.props.title;
        let options = this.props.options;
        let contentNote;
        if(options) {
            contentNote = options.map(function (obj, index) {
                let style = `zx-quiz-note-${obj.level}`;
                return <li key={index} className="zx-quiz-note">
                            <div className={style}>{obj.color}</div>
                            <span className="zx-quiz-word">{obj.note}</span>
                       </li>;
            });
        }
        let data = this.props.data;
        let contentQuiz;
        if (data) {
            contentQuiz = data.map((dataItem, index) => {
                let selfValue = dataItem.selfValue;
                let parentValues = dataItem.parentValues;

                let id = selfValue.data.id;
                let type = selfValue.data.type;
                let order = selfValue.data.customOrder || selfValue.data.systemOrder || selfValue.data.order;
                let level = selfValue.data.level;
                let knowledge = selfValue.data.knowledge[0].checkpoint;
                let knowledgeId = selfValue.data.knowledge[0].uid;

                return (
                    <QuizItem
                        key={index}
                        id={id}
                        type={type}
                        order={order}
                        level={level}
                        knowledge={knowledge}
                        knowledgeId={knowledgeId}
                        handleQuizModalOpen={this.handleQuizModalOpen.bind(this)}
                    />
                )
            });
        }

        let modalActive = this.state.modalActive;
        let selectedQuizId = this.state.selectedQuizId;
        let selectedQuizOrder = this.state.selectedQuizOrder;
        let selectedQuizKnowledge = this.state.selectedQuizKnowledge;
        let selectedQuizKnowledgeId = this.state.selectedQuizKnowledgeId;
        let selectedQuizParentData = this.state.selectedQuizParentData;

        return (
            <div id={id} className="zx-section-container">
                <div className="section">
                    <h2>{title}</h2>
                    <div className="zx-note-container">
                        <div className="zx-note-icon"><i className="material-icons">info_outline</i></div>
                        <ul className="zx-note-content">
                            {contentNote}
                        </ul>
                    </div>
                    <div className="zx-quiz-container">
                        {contentQuiz}
                    </div>
                </div>
                <div className="divider"></div>
            </div>
        )
    }
}

//错题单题block
class QuizItem extends Component {
    constructor() {
        super();
        this.state = {
        }
    }

    handleQuizModalOpen(e) {
        e.preventDefault();
        e.stopPropagation();

        let selectedQuizId = this.props.id;
        let selectedQuizOrder = this.props.order;
        let selectedQuizKnowledge= this.props.knowledge;
        let selectedQuizKnowledgeId = this.props.knowledgeId;
        let selectedQuizParentData = null;

        this.props.handleQuizModalOpen(selectedQuizId, selectedQuizOrder, selectedQuizKnowledge,selectedQuizKnowledgeId, selectedQuizParentData);
    }

    render() {
        let type = this.props.type;
        let order = this.props.order;
        let level = this.props.level;
        let style = `zx-quiz-item zx-quiz-item-${level}`;

        return (
            <div className={style}>
                <div className="zx-quiz-item-top">
                    <div className="zx-quiz-item-left">{type}</div>
                </div>
                <div className="zx-quiz-item-main" onClick={this.handleQuizModalOpen.bind(this)}>
                    {order}
                </div>
            </div>
        )
    }
}
QuizItem.contextTypes = {
    handleQuizModalOpen: PropTypes.func
};
