import React from 'react';
import PropTypes from 'prop-types'; // ES6
import $ from 'jquery';

import {createCookie, getCookie, removeCookie} from 'zx-misc/handleCookie';

import Preloader from './Preloader';

let config = require('zx-const')[process.env.NODE_ENV];

export default class TableIndicator extends React.Component {
    constructor() {
        super();
        this.state = {
            activeId: null
        }
    }
    handleDetails(e) {
        e.preventDefault();
        e.stopPropagation();

        let target = $(e.target).parents('tr');
        let indicatorID = target.attr('data-id');
        this.setState({
            activeId: indicatorID
        });
    }

    render() {
        let selecedAccessToken = getCookie(config.COOKIE.SELECTED_ACCESS_TOKEN);
        let modalId = this.props.modalId;
        let data = this.props.data;
        let tHeader = data.tHeader;
        let tData = data.tData;
        let tAction = data.tAction;

        let contentTHeader = tHeader.map((header, index) => {
            return <th key={index}>{header}</th>;
        });

        let contentTData = tData.map((data, index) => {
            let td = [];
            for (let property in data) {
                if (data.hasOwnProperty(property)) {
                    let content = data[property];
                    if (property === '0') {
                        //注释的是指标推送题方法 同116行
                        // content = <a href="/">{content}</a>
                        content = <span>{content}</span>
                    }
                    td.push(<td key={property}>{content}</td>);
                }
            }
            return <tr key={index} data-id={tAction[index]} onClick={this.handleDetails.bind(this)}>{td}</tr>
        });

        return (
            <div className="zx-indicator-table-container">
                <table className="highlight zx-table-default">
                    <thead>
                    <tr>
                        {contentTHeader}
                    </tr>
                    </thead>

                    <tbody>
                    {contentTData}
                    </tbody>
                </table>
            </div>
        )
    }
}