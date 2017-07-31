import React from 'react';
import {render} from 'react-dom';
import {Router, Route, hashHistory} from 'react-router';
import PropTypes from 'prop-types'; // ES6
import * as Survey from 'survey-react';
import './../../../sass/style-mq-report.scss';

import SurveyAPP from './component/SurveyApp';
import Success from './component/Success';
import Error from './component/Error';

class MqSurey extends React.Component{
    constructor() {
        super();
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
        <Route path="/success" component = {Success}></Route>
        <Route path="/error" component = {Error}></Route>
    </Router>), document.getElementById('app'));