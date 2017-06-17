import React from 'react';

import constants from './../constants';
import ReactEchartsRadar from './../../../../Echarts/Radar';

class ChartRadar extends React.Component {
    getOption(keys, legend, student) {
        var modifiedKeys = [];
        if (keys.length > 3 && keys.length != 6) {
            keys = this.modifyKey(keys);
        }
        for (let index in keys) {
            modifiedKeys.push({
                text: keys[index],
                max: 100
            });
        }
        var option = {
            color: ['#5ab1ef', '#d87a80', '#ffb980'],
            textStyle:{
                fontSize: constants.CHART_CONTENT_SIZE_MD
            },
            title: {},
            tooltip : {
                show: true,
                position: ['50%', '55%']
            },
            legend: {
                left: 0,
                orient: 'vertical',
                data: legend
            },
            grid: {
                top: '85',
                left: '5',
                right: '5',
                bottom: '60'
            },
            radar: [
                {
                    z: 1,
                    //shape: 'circle',
                    indicator: modifiedKeys,
                    center: ['50%', '60%'],
                    radius: '55%',
                    splitNumber: 1,
                    splitLine: {
                        show: true
                    },
                    splitArea: {
                        /*
                        areaStyle: {
                            color: ['#fff']
                        }
                        */
                    },
                    name: {
                        textStyle: {
                            color: '#212121'
                        },
                        formatter: function (value, indicator) {
                            return  value;
                        }
                    },
                    axisLine: {
                        show: true
                    },
                    startAngle: 90
                }
            ],
            series: [
                {
                    name: '',
                    type: 'radar',
                    data: [
                        {
                            value: student.values,
                            name: student.name,
                            label: {
                                normal: {
                                    show: true,
                                    textStyle: {
                                        color: '#212121'
                                    },
                                    formatter:function(params) {
                                        return params.value;
                                    }
                                }
                            },
                            areaStyle: {
                                normal: {
                                    color: '#5ab1ef'
                                }
                            },
                            z: 3
                        }
                    ]
                }
            ],
            animation: false
        };

        return option;
    }

    // 处理指标名字过长
    modifyKey(arr){
        for(var i =0; i < arr.length; i++){
            let c_arr;
            let labelInterval;
            c_arr = arr[i].split('');
            labelInterval = (c_arr.length > 10)? 2:1;
            for(var j =0; j < c_arr.length; j++){
                if(labelInterval == 1){
                    if(c_arr[j] == '（' || c_arr[j] == '('){
                        c_arr[j] = '︵';
                    } else if(c_arr[j] == '）' || c_arr[j] == ')'){
                        c_arr[j] = '︶';
                    }}
                if((j+1)%labelInterval == 0 ){
                    c_arr[j]+= '\n';
                }
            }
            arr[i] = c_arr.join('');
        }
        return arr;
    }

    render() {
        let option =this.getOption(this.props.data.keys, this.props.data.legend, this.props.data.student);
        let style = {
            height: '350px',
            width: '100%'
        };
        return (
            <ReactEchartsRadar
                option={option}
                style={style}
                className='echarts-for-echarts' 
            />
        )
    }
}

export default ChartRadar;
