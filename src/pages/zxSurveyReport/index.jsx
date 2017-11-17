import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory} from 'react-router';

import ReportDetailsContainer from './page/ReportDetailsContainer';
import SectionPageQuizAnalysis from './section/SectionPageQuizAnalysis';

ReactDOM.render((
    <Router history={hashHistory}>
        <Route path="/" component={ReportDetailsContainer}></Route>
        <Route path="/quiz/:qzp_id" component={SectionPageQuizAnalysis} />
    </Router>
), document.getElementById('root'));