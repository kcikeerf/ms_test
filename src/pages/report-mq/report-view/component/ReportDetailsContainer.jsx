import React from 'react';
import $ from 'jquery';

let config = require(`./../../../../config/${process.env.NODE_ENV}`);
import getCookie from './../../../../lib/getCookie';
import ReportDetails from './ReportDetails';
import Preloader from './Preloader';
// import json from '../testData.json';

class ReportDetailsContainer extends React.Component {
    constructor() {
        super();
        let data;
        if (process.env.DEV) {
            data = require('../MqReport.json');
            this.state = {
                output_data:{
                    basic: {
                        title: data.basic.title,   //标题
                        name: data.basic.name,     //姓名
                        grade: data.basic.grade,   //分数
                        classroom: data.basic.classroom,   // 班级
                        sex:data.basic.sex,                //姓名
                        test_date: data.basic.test_date,   //测试时间
                        test_duration: this.modifyTestDurationData(data.basic.test_duration)   //测试时长
                    },
                    credibility:{
                        credibility_duration:data.credibility.credibility_duration,    //答题时长
                        credibility_response:data.credibility.credibility_response,    //随意反应
                        credibility_overall:data.credibility.credibility_overall,      //结果可信度
                    },
                    result:this.modifyResultData(data),
                    suggestions:data.suggestions
                }

            };
        }
        else {
            let report_url = getCookie('report_url');
            let access_token = getCookie('access_token');
            let wx_openid = getCookie('wx_openid');
            this.state = {
                classPreloader: '',
                wx_openid: wx_openid,
                mq_report_url: report_url,
                access_token:access_token,
                input_data: null,
                output_data:null
                //     {
                //     basic: {
                //         title: null,   //标题
                //         name: null,     //姓名
                //         grade: null,   //分数
                //         classroom: null,   // 班级
                //         sex: null,                //姓名
                //         test_date: null,   //测试时间
                //         test_duration: null   //测试时长
                //     },
                //     credibility:{
                //         credibility_duration: null,    //答题时长
                //         credibility_response: null,    //随意反应
                //         credibility_overall: null,      //结果可信度
                //     },
                //     result: null,
                //     suggestions: null
                // }
            };
        }
    }
    componentDidMount() {
        if (!process.env.DEV) {
            let api_url = this.state.mq_report_url;
            let wx_openid = this.state.wx_openid;
            let access_token = this.state.access_token;

            api_url = config.API_DOMAIN + api_url;

            let data = {
                'access_token':access_token
            };
            $.post(api_url, data, function(response) {
                response = JSON.parse(response);
                console.log(response)
                this.setState({
                    classPreloader: 'loaded',
                    input_data: response,
                    output_data:{
                        basic: {
                            title: response.basic.title,   //标题
                            name: response.basic.name,     //姓名
                            grade: response.basic.grade,   //分数
                            classroom: response.basic.classroom,   // 班级
                            sex:response.basic.sex,                //姓名
                            test_date: response.basic.test_date,   //测试时间
                            test_duration: this.modifyTestDurationData(response.basic.test_duration)   //测试时长
                        },
                        credibility:{
                            credibility_duration:'正常',    //答题时长
                            credibility_response:'正常',    //随意反应
                            credibility_overall:'正常',      //结果可信度
                        },
                        result:this.modifyResultData(response.data.ckps.other),
                        suggestions:[
                            {
                                type:'demo发展型',
                                suggestion:'的看法那个空间的高科技到了开始减肥了看电视剧那份'
                            }
                        ]
                    }
                });
            }.bind(this), 'json');
        }
    }

    /**
     * 把测试时长（秒）转化为小时分钟秒的格式
     */
    modifyTestDurationData(time) {
        let hours, minutes, seconds;
        hours = Math.floor(time / 3600);
        time = time - hours * 3600;
        minutes = Math.floor(time / 60);
        seconds = time - minutes * 60;

        let modified_data = '';
        if (hours > 0) {
            modified_data += hours + ':' + (minutes < 10 ? '0' : '');
        }
        modified_data += minutes + ':' + (seconds < 10 ? '0' : '');
        modified_data += seconds;

        return modified_data;
    }

    /*处理数据结果的数据*/
    modifyResultData(datas){
        let data=datas.lv_n;
        console.log(data);
        let randarKey = [];         //雷达图的关键字
        let randarValues = [];      //雷达图上的数值
        let strength = {};          //强度
        let optionals = [];         //比较值数组
        let LNdata = []             //数据组合数组
        for (let i = 0; i<data.length; i++) {
            let id = Object.keys(data[i])[0];
            randarKey.push(data[i][id].checkpoint);
            randarValues.push(data[i][id].total_real_score);
            strength[data[i][id].checkpoint] = this.modifyStrength(data[i][id].weights_score_average_percent_level);
            let obj={
                name:data[i][id].checkpoint,
                value:data[i][id].total_real_score,
                group_percentage:data[i][id].score_average_percent*100
            };
            optionals.push(obj);
            LNdata.push(data[i][id]);
        }

        let modified_data = {
            radar: {
                keys:randarKey,
                legend: ['个体水平'],
                student_data: {
                    name: '个体水平',
                    values:randarValues
                }
            },
            overall_strength: {},
            optional:{},
        }

        let max_min_item = this.modifyStrongWeakFilter(optionals);
        modified_data.overall_strength.type='demo发展型';  //类型
        modified_data.overall_strength.strength=strength;               //强度
        modified_data.optional = max_min_item;                         //比较数据
        modified_data.data = LNdata;
        return modified_data;
    }

    //处理最强项和最弱项
    modifyStrongWeakFilter(arr) {
        //先排序
        arr.sort(function (obj1, obj2) {
            let val1 = Number(obj1.value);
            let val2 = Number(obj2.value);
            if (val1 > val2) {
                return -1;
            } else if (val1 < val2) {
                return 1;
            } else {
                return 0;
            }
        });
        //找出最强项
        let max = arr[0].value  //找出数组第一个值为最大值
        let max_arr = [];  //用来放入最大值的数组
        for (let i = 0; i < arr.length; i++) {
            if (max == arr[i].value) {
                max_arr.push(arr[i]);
            }
        }
        //找出最弱项
        let min = arr[arr.length - 1].value;
        let min_arr = [];
        for (let i = 0; i < arr.length; i++) {
            if (min == arr[i].value) {
                min_arr.push(arr[i]);
            }
        }

        let strong_weak_types = {
            strong_types: max_arr,
            weak_types: min_arr
        }
        return strong_weak_types;
    }

    modifyStrength(val){
        let non;
        switch (val){
            case 'A' : non = '很强';break;
            case 'B' : non = '尚可';break;
            case 'C' : non = '一般';break;
            case 'D' : non =  '弱' ; break;
            case 'E ' : non =  '较弱'; break;
        }
        return non
    }

    render() {
        let style = {
            minHeight: '100%'
        };
        return (
            <div className={this.state.classPreloader} style={style}>
                <Preloader />
                <ReportDetails reportDetails={this.state.output_data} />
            </div>
        )
    }
}

export default ReportDetailsContainer;