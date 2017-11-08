import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory} from 'react-router';

import ReportDetailsContainer from './page/ReportDetailsContainer';

import 'zx-style/style-mq-report.css';


ReactDOM.render((
    <Router history={hashHistory}>
        <Route path="/" component={ReportDetailsContainer}></Route>
    </Router>
), document.getElementById('root'));