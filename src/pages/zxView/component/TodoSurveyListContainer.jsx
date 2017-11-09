import React from 'react';
import PropTypes from 'prop-types';
import $ from 'jquery';

import TodoSurveyReportList from './TodoSurveyReportList';
import TestedSurveyReportList from './TestedSurveyReportList';
import Preloader from './Preloader';

import {createCookie, getCookie, removeCookie} from 'zx-misc/handleCookie';

let config = require('zx-const')[process.env.NODE_ENV];

class ReportListContainer extends React.Component {
    constructor() {
        super();
        this.state = {
            classPreloader:'',
            todolist:null,
            testlist:null
        }
    }

    componentDidMount(){
        let access_token = getCookie(config.COOKIE.SELECTED_ACCESS_TOKEN);

        let todolistUrl = config.API_DOMAIN+ config.API_GET_TODO_LIST;

        let testedUrl  =  config.API_DOMAIN+ config.API_GET_TESTED_LIST;

        let data = {
            'access_token':access_token
        }

        let promiseTodoListUrl = $.post(todolistUrl, data);
        let promiseTestedListUrl = $.post(testedUrl,data);

        promiseTodoListUrl.done(function (responseTodo) {
            // let publicList = responseTodo.public;
            // let privates = responseTodo.private;
            // let dataList = publicList.concat(privates);
            this.setState({
                todolist:responseTodo,
                classPreloader:'loaded'
            });
        }.bind(this),'json');

        promiseTestedListUrl.done(function (responseTest) {
            this.setState({
                testlist:responseTest
            })
        }.bind(this),'json');

        $('.gs-tab-pane').eq(0).show().siblings().hide();   //只显示测试列表
    }

    handleTab(e){
        e.preventDefault();
        let target = e.target;
        let index = $(target).parent().index();
        $('.gs-tab-onclick').eq(index).addClass('active').siblings().removeClass('active');
        $('.gs-tab-pane').eq(index).show().siblings().hide();
    }
    handleNavBack(event) {
        this.context.router.push('/');
    }

    render() {
        let style = {
            minHeight: '100%'
        };

        return (
            <div style={style} className={this.state.classPreloader}>
                <Preloader />
                <div className="zy-report-container">
                    <div className="zy-container-top">
                        <div className="zy-nav-top">
                            <span className="glyphicon glyphicon-chevron-left zy-nav-navBack" onClick={this.handleNavBack.bind(this)}></span>
                            <span className="zy-nav-title">综合素质评价</span>
                        </div>
                    </div>
                    <div className="zy-report-tab-container">

                        <ul className="nav nav-tabs">
                            <li className="gs-tab-onclick active">
                                <a href="javascript:;" onClick={this.handleTab.bind(this)}>测试列表</a>
                            </li>
                            <li className="gs-tab-onclick">
                                <a href="javascript:;" onClick={this.handleTab.bind(this)}>已测试</a>
                            </li>
                        </ul>

                        <div className="container-fluid zy-container-body">

                            <div className="gs-tab-pane">
                                <TodoSurveyReportList data={this.state.todolist} />
                            </div>

                            <div className="gs-tab-pane">
                                <TestedSurveyReportList data={this.state.testlist} />
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        )

    }
}

ReportListContainer.contextTypes = {
    router: PropTypes.object.isRequired
};

export default ReportListContainer;