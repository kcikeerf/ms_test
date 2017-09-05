import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory} from 'react-router';
import PropTypes from 'prop-types';

import TodoSurveyListContainer from './component/TodoSurveyListContainer';
import UserLogin from './component/UserLogin';
import Banner from './component/Banner';
import ViewContainer from './component/ViewContainer';
import SettingsPage from './component/SettingsPage';
import AddUserPage from './component/AddUserPage';
import CancelUserPage from './component/CancelUserPage';

import 'zx-style/style-school-view.css';

ReactDOM.render((
    <Router history={hashHistory}>
        <Route path="/" component={ViewContainer}></Route>
        <Route path="/user-login" component={UserLogin}></Route>
        <Route path="/todo-list" component={TodoSurveyListContainer}></Route>
        <Route path="/settings" component={SettingsPage}></Route>
        <Route path="/add-user" component={AddUserPage}/>
        <Route path="/cancel-user" component={CancelUserPage}/>
    </Router>
), document.getElementById('root'));