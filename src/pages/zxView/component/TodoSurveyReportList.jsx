import React from 'react';
import PropTypes from 'prop-types';
import TodoSurveyReportItem from './TodoSurveyReportItem';

class TodoSurveyReportList extends React.Component {
    constructor() {
        super();
    }

    handleNavBack(event) {
        this.context.router.goBack();
    }

    render() {
        let dataList = this.props.data;

        let todoPublicList,todoPrivateList;
        if (dataList != null) {
            let todoPublicListData = dataList.public;
            let todoPrivateListData = dataList.private;
            if(todoPublicListData.length!=0){
                todoPublicList = todoPublicListData.map(function (obj, index) {
                    return <TodoSurveyReportItem key={index} TodoListobj={obj}/>;
                })
            }else {
                todoPublicList = '暂时没有公开测试...';
            }

            if(todoPrivateListData.length!=0){
                todoPrivateList = todoPrivateListData.map(function (obj, index) {
                    return <TodoSurveyReportItem key={index} TodoListobj={obj}/>;
                })
            }else {
                todoPrivateList = '暂时没有项目测试...';
            }


        } else {
            todoPublicList = <div>目前还没有测试...</div>
        }
        return (
            <div className="zx-todo-list">
                <div className="zx-public-list">
                    <h3 className="zx-survey-title">公开测试</h3>
                    {todoPublicList}
                </div>
                {/*<div className="zx-private-list">*/}
                    {/*<h3 className="zx-survey-title">项目测试</h3>*/}
                    {/*{todoPrivateList}*/}
                {/*</div>*/}
            </div>
        )
    }
}

TodoSurveyReportList.contextTypes = {
    router: PropTypes.object.isRequired
};

export default TodoSurveyReportList;