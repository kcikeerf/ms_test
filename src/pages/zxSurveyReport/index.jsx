import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory} from 'react-router';

import ReportDetailsContainer from './page/ReportDetailsContainer';
import SectionPageQuizAnalysis from './section/SectionPageQuizAnalysis';
import SectionPageOriginalQuiz from './section/SectionPageOriginalQuiz';

ReactDOM.render((
    <Router history={hashHistory}>
        <Route path="/" component={ReportDetailsContainer}></Route>
        <Route path="/quiz/:qzp_id" component={SectionPageQuizAnalysis} />
        <Route path="/indicator/:ckp_id" component={SectionPageOriginalQuiz} />
    </Router>
), document.getElementById('root'));