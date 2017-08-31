import React from 'react';

import ChartRadar from './ChartRadar';
import DetailsItemShow from './DetailsItemShow';

class DetailsResult extends React.Component {
    render() {
        let data_result = this.props.data;

        // 雷达图
        let content_chart_radar;
        let data_radar = {
            keys: data_result.radar.keys,
            legend: data_result.radar.legend,
            student: data_result.radar.student_data
        };
        content_chart_radar = <ChartRadar data={data_radar} />;

        //结果描述
        let overall_strength = data_result.overall_strength;  //强度数据
        let overall_strength_strength = overall_strength.strength;  //强度
        console.log(overall_strength_strength);
        let overall_strength_type = overall_strength.type;   //类型
        let content_strength='';
        for(let i in overall_strength_strength){
            content_strength += i+'偏好强度'+overall_strength_strength[i]+','
        }
        content_strength = '你的'+content_strength+'属于'+overall_strength_type;
        let content_overall_strength =
            <div>
                <h3 className="zy-section-subtitle">总体偏好</h3>
                <p>
                    {content_strength}
                </p>
            </div>;

        //强度最值
        let strong_types = data_result.optional.strong_types;
        let weak_types = data_result.optional.weak_types;

        let contet_strong_types,content_weak_types;
        if(strong_types.length==1){
            contet_strong_types =
                <div>
                    <h3 className="zy-section-subtitle">最高偏好</h3>
                    <p>
                        偏好程度最高的是<strong>{strong_types[0].name}</strong>，
                        这种类型在同期测试群体中的比例为<strong>{strong_types[0].group_percentage}%</strong>
                    </p>
                </div>;
        }
        else {
            let strong_types_all='',strong_types_group_percentage='';
            strong_types.map(function(obj,index){
                strong_types_all += obj.name + '、';
                strong_types_group_percentage += obj.group_percentage + '%、';
            })
            contet_strong_types =
                <div>
                    <h3 className="zy-section-subtitle">最高偏好</h3>
                    <p>
                        偏好程度最高的是<strong>{strong_types_all}</strong>，
                        这几种类型在同期测试群体中的比例分别为<strong>{strong_types_group_percentage}</strong>
                    </p>
                </div>;
        }

        if(weak_types.length == 1){
            content_weak_types =
                <div>
                    <h3 className="zy-section-subtitle">最低偏好</h3>
                    <p>
                        偏好程度最低的是<strong>{weak_types[0].name}</strong>，
                        这种类型在同期测试群体中的比例为<strong>{weak_types[0].group_percentage}%</strong>
                    </p>
                </div>;
        }
        else{
            let weak_types_all='',weak_types_group_percentage='';
            weak_types.map(function(obj,index){
                weak_types_all += obj.name + '、';
                weak_types_group_percentage += obj.group_percentage + '%、';
            })
            contet_strong_types =
                <div>
                    <h3 className="zy-section-subtitle">最高偏好</h3>
                    <p>
                        偏好程度最高的是<strong>{weak_types_all}</strong>，
                        这几种类型在同期测试群体中的比例分别为<strong>{weak_types_group_percentage}</strong>
                    </p>
                </div>;
        }

        //指标呈现
        let item_type_data = data_result.data;
        console.log(item_type_data);
        let content_item_types = item_type_data.map((obj,index) => {
            return <DetailsItemShow key={index} name={obj.checkpoint} explain={obj.explain} items={obj.items} />
        })

        return (
            <div className="row">
                <div className="col-sm-12 col-xs-12"></div>
                <div className="col-sm-12 col-xs-12">
                    <h2 className="zy-report-section-title">测评结果</h2>
                </div>
                <div className="col-sm-12 col-xs-12">
                    <div className="zy-title-highlight">
                        <ol>
                            <li>雷达图中的数值是介于0-100的数值，值越高，表明个体在这个方面的发展偏好越强</li>
                            <li>数值最大的指标是个体发展偏好中的优势指标，数值最小的指标是个体发展偏好中的弱势指标</li>
                            <li>
                                以优势偏好组合排在首位，弱势偏好组合排在末尾，可以形成多种组合类型，如艺体-对象-工具类，
                                表明就个体而言，艺体发展偏好最强，工具发展偏好最弱，而对象-工具-艺体类，则表明就个体而言，
                                对象发展偏好最强，艺体发展偏好最弱
                            </li>
                        </ol>
                    </div>
                </div>
                <div className="col-sm-12 col-xs-12">
                    {content_chart_radar}
                </div>

                <div className="col-sm-12 col-xs-12">
                    {content_overall_strength}
                </div>
                <div className="col-sm-12 col-xs-12">
                    {contet_strong_types}
                </div>
                <div className="col-sm-12 col-xs-12">
                    {content_weak_types}
                </div>
                <div className="col-sm-12 col-xs-12">
                    {content_item_types}
                </div>
            </div>
        )
    }
}

DetailsResult.contextTypes = {
    router: React.PropTypes.object.isRequired
};

export default DetailsResult;