import React from 'react';
import {render} from 'react-dom';
import {Router, Route, hashHistory} from 'react-router';

import './../../../sass/style-mq-report.scss';

import ReportDetailsContainer from './component/ReportDetailsContainer';


class MQReportPage extends React.Component {
    
    render() {
        let style = {
            height: '100%'
        };
        return (
            <div style={style}>
                <ReportDetailsContainer />
            </div>
        )
    }
}

MQReportPage.contextTypes = {
    router: React.PropTypes.object.isRequired
};

render((
    <Router history={hashHistory}>
        <Route path="/" component={MQReportPage}></Route>
    </Router>
), document.getElementById('app'));