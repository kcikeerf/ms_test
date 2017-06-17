import React from 'react';
import {Link} from 'react-router';
import TodoSurveyReportItem from './TodoSurveyReportItem';
import TestedSurveyReportItem from './TestedSurveyReportItem'

class ReportList extends React.Component{
    constructor() {
        super();
    }

    handleNavBack(event) {
        this.context.router.goBack();
    }
    render(){

        let dataList = this.props.data;

        let reportList;
        if(dataList!=null){
            let type = this.props.type;
            if(type == 'todoList'){
                reportList = dataList.map(function (obj,index) {
                    return <TodoSurveyReportItem key={index} TodoListobj={obj} />;
                })
            }else if (type == 'testedList'){
                reportList = dataList.map(function (obj,index) {
                    return <TestedSurveyReportItem key={index} TodoListobj={obj} />;
                })
            }

        }else{
            reportList = <div>目前还没有。。。</div>
        }
        return(
            <div>
                {reportList}
            </div>
        )
    }
}


export default ReportList;