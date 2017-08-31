import React from 'react';

import 'bootstrap/js/modal.js';

import DetailItemConstant from './DetailItemConstant'; //图片数据

class DetailItem extends React.Component {
    render() {
        let target_id, data_target, data_label;
        target_id = 'zyModal-' + this.props.data.id;
        data_target = '#' + target_id;
        data_label = target_id + '-label';

        let detail = this.props.data;

        let imgArr = DetailItemConstant[this.props.data.id];

        // let content_characteristic = '的说法看电视了恐惧感大富科技挂号费多少快高考加分多少好'
        let content_characteristic = detail.feature.map((data, index) => {
            return <div key={index} className="zy-icon-list-item">
                        <div className="glyphicon glyphicon-education zy-icon-list-icon"></div>
                        <div className="zy-icon-list-content">{data}</div>
                    </div>;
        });

        let content_profession = detail.profession.map((data, index) => {
            return <div key={index} className="zy-profession-item">{data.name}</div>;
        });

        let content_representative = detail.representative.map((data, index) => {
            return <div key={index} className="zy-representative-item">
                        <div className="zy-representative-img">
                            <img src={imgArr[index]} />
                        </div>
                        <div className="zy-representative-name">
                            {data.name}
                        </div>
                    </div>;
        });
        
        return (
            <div className="zy-modal-container">
                <button type="button" className="glyphicon glyphicon-question-sign zy-modal-toggle" data-toggle="modal" data-target={data_target}></button>
                <div className="modal fade" id={target_id} tabIndex="-1" role="dialog" aria-labelledby={data_label}>
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                                <h4 className="modal-title" id={data_label}>测评指标解释</h4>
                            </div>
                            <div className="modal-body">
                                <section className="zy-report-subsection">
                                    <h3 className="zy-report-subsection-title">{detail.name}</h3>
                                    <div>
                                        <h4 className="zy-report-subsection-subtitle">基本概念</h4>
                                        <p>{detail.explain}</p>
                                    </div>
                                    <div>
                                        <h4 className="zy-report-subsection-subtitle">表现特征</h4>
                                        <div className="zy-icon-list">
                                            {content_characteristic}
                                        </div>
                                    </div>
                                    <div>
                                        <h4 className="zy-report-subsection-subtitle">适合的职业</h4>
                                        <div className="zy-profession-container">
                                            {content_profession}
                                        </div>
                                    </div>
                                    <div>
                                        <h4 className="zy-report-subsection-subtitle">代表人物</h4>
                                        <div className="zy-representative-container">
                                            {content_representative}
                                        </div>
                                    </div>
                                </section>
                            </div>
                        </div>
                    </div>
                </div>
            </div>            
        )
    }
}

DetailItem.contextTypes = {
    router: React.PropTypes.object.isRequired
};

export default DetailItem;