import React from 'react';
import MyReportList from './MyReportList';
import $ from 'jquery';
import Preloader from './Preloader';

import getCookie from './../../../lib/getCookie';
import PropTypes from 'prop-types';

let config = require(`./../../../config/${process.env.NODE_ENV}`);

class MyReport extends React.Component {
    constructor(){
        super();
        this.state={
            myreport:null,
            classPreloader:''
        }
    }

    componentDidMount(){
        let access_token = getCookie('access_token');
        let data = {
            access_token:access_token
        }
        let url = config.API_DOMAIN + config.API_GET_REPOET_LIST;
        $.post(url ,data,function (response) {
            this.setState({
                myreport:response,
                classPreloader:'loaded'
            })
        }.bind(this),'json')
    }

    render() {
        console.log(this.state.myreport);
        return (
            <div className={this.state.classPreloader}>
                <Preloader />
                <MyReportList myreport = {this.state.myreport}  />
            </div>

        )
    }
}

export default MyReport;