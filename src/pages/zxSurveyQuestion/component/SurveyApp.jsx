import React from 'react';
import PropTypes from 'prop-types'; // ES6
import $ from 'jquery';
import * as Survey from 'survey-react';

import surveyQuestion from './SurveyQuestionTest';

import {createCookie, getCookie, removeCookie} from 'zx-misc/handleCookie';
let config = require('zx-const')[process.env.NODE_ENV];

class SurveyAPP extends React.Component{
    constructor() {
        super();
        let questioneId = require('./potencyId.json');    //id的json
        this.state={
            SurveyQuestion:surveyQuestion,
            dataIdjson:questioneId
        };

        //覆盖surveyjs框架中的类
        Survey.SurveyModel.prototype.tryGoNextPageAutomatic = function (name) {
            if (!this.goNextPageAutomatic || !this.currentPage)
                return;
            var question = this.getQuestionByName(name);
            if (question && (!question.visible || !question.supportGoNextPageAutomatic()))
                return;
            var questions = this.getCurrentPageQuestions();
            for (var i = 0; i < questions.length; i++) {
                if (questions[i].hasInput && !this.getValue(questions[i].name))
                    return;
            }
            if (!this.currentPage.hasErrors(true, false)) {
                if (!this.isLastPage) {
                    setTimeout(function(){
                        this.nextPage();
                    }.bind(this),600)
                }
            }
        };

        this.arrTimeObj = {};
        let that = this;
        Survey.SurveyModel.prototype.doNextPage = function () {
            this.checkOnPageTriggers();
            if (this.sendResultOnPageNext) {
                this.sendResult(this.surveyPostId, this.clientId, true);
            }
            var vPages = this.visiblePages;
            var index = vPages.indexOf(this.currentPage);
            this.currentPage = vPages[index + 1];

            //计算单体时间
            let nowTime = (new Date()).valueOf();
            let questionTime =  nowTime - that.timestamp;
            that.timestamp = nowTime;
            let arrTimeObjItem = Object.keys(that.arrTimeObj);
            if(arrTimeObjItem.indexOf(String(index)) === -1){
                that.arrTimeObj[index] = questionTime;
            }else {
                that.arrTimeObj[index] = that.arrTimeObj[index] + questionTime;
            }
        };

        Survey.SurveyModel.prototype.prevPage = function () {
            if (this.isFirstPage)
                return false;
            var vPages = this.visiblePages;
            var index = vPages.indexOf(this.currentPage);
            this.currentPage = vPages[index - 1];

            //计算单体时间
            let nowTime = (new Date()).valueOf();
            let questionTime =  nowTime - that.timestamp;
            that.timestamp = nowTime;
            let arrTimeObjItem = Object.keys(that.arrTimeObj);
            if(arrTimeObjItem.indexOf(String(index)) === -1){
                that.arrTimeObj[index] = questionTime;
            }else {
                that.arrTimeObj[index] = that.arrTimeObj[index] + questionTime;
            }
        };

        Survey.SurveyModel.prototype.completeLastPage = function () {
            if (this.isEditMode && this.isCurrentPageHasErrors)
                return false;
            if (this.doServerValidation())
                return false;
            setTimeout(function(){
                this.doComplete();
            }.bind(this),1000)
            return true;
        };

    }
    componentDidMount(){
        this.timeinit = (new Date()).valueOf();   //初始时间 不能变 用于计算整体时间
        this.timestamp = (new Date()).valueOf();  //初始时间 可变  用于计算一道题的答题时间
    }
    componentDidUpdate(){
        console.log(1);
    }

    componentWillMount(){
        //配置默认的bootstrap的默认class类,当前使用的都是默认的类名,为了方便以更改全部把接口放出来了。
        Survey.Survey.cssType = 'bootstrap';
        Survey.defaultBootstrapCss.body='panel-body';
        Survey.defaultBootstrapCss.checkbox={
            item:'checkbox',
            other:'',
            root:'form-inline'
        };
        Survey.defaultBootstrapCss.comment='form-control';
        Survey.defaultBootstrapCss.error={
            icon:'glyphicon glyphicon-exclamation-sign',
            item:'',
            root:'alert alert-danger'
        };
        Survey.defaultBootstrapCss.footer='panel-footer';
        Survey.defaultBootstrapCss.header='panel-heading';
        Survey.defaultBootstrapCss.matrix.root='table';
        Survey.defaultBootstrapCss.matrixdropdown.root='table';
        Survey.defaultBootstrapCss.matrixdynamic={
            button:'button',
            root:'table'
        };
        Survey.defaultBootstrapCss.multipletext={
            itemTitle:'',
            itemValue:'form-control',
            root:'table',
        };
        Survey.defaultBootstrapCss.navigation={
            complete:'',
            next:'',
            prev:''
        }
        Survey.defaultBootstrapCss.navigationButton = 'btn btn-primary';
        Survey.defaultBootstrapCss.progress='progress center-block';
        Survey.defaultBootstrapCss.progressBar='progress-bar';
        Survey.defaultBootstrapCss.question={
            comment:'form-control',
            indent:'20',
            root:'gs-animation',
            title:'panel-title',
        }
        Survey.defaultBootstrapCss.radiogroup={
            item:'radio',
            label:'radio-inline',
            other:'',
            root:'form-inline'
        };
        Survey.defaultBootstrapCss.rating={
            item:'btn btn-default',
            root:'btn-group'
        };
        Survey.defaultBootstrapCss.root='';
        Survey.defaultBootstrapCss.row='';
        Survey.defaultBootstrapCss.text='form-control';

        //更换文字的接口
        var mycustomSurveyStrings = {
            pagePrevText: '上一题',
            pageNextText: '下一题',
            completeText: '提交',
            progressText:'当前第{0}页,一共{1}页',
            requiredError:'请回答完这道题，否则不能进行下一题'
        };
        Survey.surveyLocalization.locales['my'] = mycustomSurveyStrings;
    }

    //获取当前时间的方法
    getNowDate(){
        let date = new Date();
        let year=date.getFullYear();
        let month=date.getMonth()+1;
        let strDate = date.getDate();
        let hours=date.getHours();
        let minutes=date.getMinutes();

        if(month>=1&&month<=9){
            month='0'+month;
        }
        if(strDate>=1&&strDate<=9){
            strDate='0'+strDate;
        }
        return year+'/'+month+'/'+strDate;
    }

    render(){
        //调查表的数据
        var model = new Survey.Model(this.state.SurveyQuestion);
        console.log(model);
        //更换文字的接口
        model.locale = 'my';

        //获取用户session
        var sessionid=getCookie(config.COOKIE.WX_OPENID)?getCookie(config.COOKIE.WX_OPENID):'testid_123456';

        //更改标签发生的事件
        var obj={}
        let surveyValueChanged=function(sender, options){
            obj[options.name]=options.value;
            let str=JSON.stringify(obj);
            localStorage.setItem(sessionid,str);

            if(model.isLastPage){  //判断吗是否是第一页
                $('.btn').show();
            }else {
                $('.btn').hide();

                //加入答题过度动画效果
                $('.gs-animation').css({
                    'transform':'translate(-100%,0)',
                    'transition':'transform 0.8s ease-in-out'
                });
            }

        }

        //翻页执行的回调函数事件
        let pagechang = function () {
            $('.btn').show();

            //解析html的图片
            console.log($('.panel-title').text());
        }

        //获取localStorage的值
        let data;
        let localData=localStorage.getItem(sessionid);
        if(localData==null){
            data={};
        }else {
            data=JSON.parse(localData);
        }

        let sendDataToServer = (survey)=>{
            let nowDate=this.getNowDate(); //获取当前时间
            let newTimeAll = (new Date()).valueOf() - this.timeinit;
            let lastquestionTime = (new Date()).valueOf() - this.timestamp;

            this.arrTimeObj[Object.keys(survey.data).length] = lastquestionTime;

            // let he=0;
            // for(let i in this.arrTimeObj){
            //     he += this.arrTimeObj[i];
            //
            // }

            //组合json格式数据
            let orderIdjson = this.state.dataIdjson;
            let results=[];
            let obj,key=0;
            for(let i in survey.data){
                key++;
                let dataArr = survey.data[i].split('-');
                obj={
                    id:orderIdjson[key-1].id,
                    order:orderIdjson[key-1].order,
                    full_score:orderIdjson[key-1].full_score,
                    answer:dataArr[0],
                    real_score:dataArr[1],
                    type:'radiogroup',
                    time:this.arrTimeObj[key]
                }
                results.push(obj);
            }
            let access_token = getCookie(config.COOKIE.SELECTED_ACCESS_TOKEN);
            console.log(access_token);
            let testId = getCookie(config.COOKIE.QUEST_TESTID);
            let openid = getCookie(config.COOKIE.WX_OPENID);
            let submitData={
                access_token:access_token,
                test_id:testId,
                basic:{
                    test:{
                        data:nowDate,
                        describe:'这是发展潜能报告，用来测试发展潜能',
                        duration:newTimeAll,
                        end_date:'20170616 09:53',
                        explainTime:this.arrTimeObj[0],
                        name:'甄学V1.2多元智能问卷测试',
                        start_date:'20170609 09:52',
                        title:'2017年发展潜能测试'
                    },
                    user_info:{

                    }
                },
                wx_openid:openid,
                result:results
            };
            console.log(submitData);
            let url = config.API_DOMAIN+config.API_SUBMIT_RESULT;
            let that = this;
            $.ajax({
                url:url,
                type:'post',
                data:JSON.stringify(submitData),
                headers:{
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                success: function(result) {
                    createCookie('task_uid',result.task_uid);
                    let sessionid=getCookie(config.COOKIE.WX_OPENID);
                    localStorage.removeItem(sessionid);  //清除本地存储
                    that.context.router.push('/success');
                    console.log(result);
                },
                error:function (status) {
                    that.context.router.push('/error');
                }
            });

        }

        let html = '<div class="panel-body"><p>你已经完成本次测试，请等待提交结果...</div>';

        model.completedHtml= html;

        //自定义样式
        // var myCss={
        //
        // }

        return (
          <div className='App'>
            <div className='surveyjs'>
              <Survey.Survey model={model}
                             data={data}
                             onComplete={sendDataToServer}
                             onValueChanged={surveyValueChanged}
                             onCurrentPageChanged={pagechang}
              />
            </div>
          </div>
        );
    }

}

SurveyAPP.contextTypes = {
    router: PropTypes.object.isRequired
};

export default SurveyAPP;