import React from 'react';
import PropTypes from 'prop-types';

import TestedSurveyReportItem from './TestedSurveyReportItem'

class TestedSurveyReportList extends React.Component {
    constructor() {
        super();
    }

    handleNavBack(event) {
        this.context.router.goBack();
    }

    render() {
        let dataList = this.props.data;
        let reportList;
        if (dataList != null) {
            if(dataList.length != 0){
                reportList = dataList.map(function (obj, index) {
                    return <TestedSurveyReportItem key={index} TodoListobj={obj}/>;
                })
            }else {
                reportList = '暂时没有已测试的问卷...'
            }

        } else {
            reportList = <div>目前还没有测试...</div>
        }
        return (
            <div>
                {reportList}
            </div>
        )
    }
}
TestedSurveyReportList.contextTypes = {
    router: PropTypes.object.isRequired
};

export default TestedSurveyReportList;