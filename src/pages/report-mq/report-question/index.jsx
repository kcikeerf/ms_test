import React from 'react';
import {render} from 'react-dom';
import {Router, Route, hashHistory} from 'react-router';
import PropTypes from 'prop-types'; // ES6
import * as Survey from 'survey-react';
import './../../../sass/style-mq-report.scss';

import SurveyAPP from './component/SurveyApp';

class MqSurey extends React.Component{
    constructor() {
        super();
        //覆盖surveyjs框架中的类
        Survey.SurveyModel.prototype.tryGoNextPageAutomatic = function (name) {
            if (!this.goNextPageAutomatic || !this.currentPage)
                return;
            var question = this.getQuestionByName(name);
            if (question && (!question.visible || !question.supportGoNextPageAutomatic()))
                return;
            var questions = this.getCurrentPageQuestions();
            for (var i = 0; i < questions.length; i++) {
                if (questions[i].hasInput && !this.getValue(questions[i].name))
                    return;
            }
            if (!this.currentPage.hasErrors(true, false)) {
                if (!this.isLastPage) {
                    setTimeout(function(){
                        this.nextPage();
                    }.bind(this),600)
                }
            }
        };
    }


    handleNavBack(event) {
        this.context.router.goBack();
    }

    render(){
        return(
            <div className="container-fluid zy-report-container">
                <div className="zy-container-top">
                    <div className="zy-nav-top">
                        <span className="glyphicon glyphicon-chevron-left zy-nav-navBack" onClick={this.handleNavBack.bind(this)}></span>
                        <span className="zy-nav-title">发展潜能调查表</span>
                    </div>
                </div>
                <div className="zy-survey-container-body">
                    <SurveyAPP />
                </div>
            </div>
        )
    }
}
MqSurey.contextTypes = {
    router: PropTypes.object.isRequired
};
render((
    <Router history={hashHistory}>
        <Route path="/" component = {MqSurey}></Route>
    </Router>), document.getElementById('app'));