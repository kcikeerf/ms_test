import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory} from 'react-router';

import ReportDetailsContainer from './page/ReportDetailsContainer';

ReactDOM.render((
    <Router history={hashHistory}>
        <Route path="/" component={ReportDetailsContainer}></Route>
    </Router>
), document.getElementById('root'));