import React from 'react';

class DetailsBasic extends React.Component {
    render() {
        let report_details_basic = this.props.data;
        let content_title = report_details_basic.title;
        let content_name = report_details_basic.name;
        let content_sex = report_details_basic.sex;
        let content_school = report_details_basic.tenant;
        let content_grade = report_details_basic.grade;
        let content_klass = report_details_basic.classroom;
        let content_test_date = report_details_basic.test_date;
        let content_test_duration = report_details_basic.test_duration;

        return (
            <div className="row">
                    <div className="col-sm-12 col-xs-12">
                    <div className="zy-conclusion-info">
                        <div className="zy-conclusion-info-heading">
                            <div className="zy-conclusion-info-subtitle">{content_school}</div>
                            <div className="zy-conclusion-info-title">{content_title}</div>
                        </div>
                        <div className="zy-conclusion-info-body">
                            <div className="zy-conclusion-info-box">
                                <div className="zy-conclusion-info-meta">
                                    <div className="zy-conclusion-info-label">姓名</div>
                                    <div className="zy-conclusion-info-item">{content_name}</div>
                                </div>
                                <div className="zy-conclusion-info-meta">
                                    <div className="zy-conclusion-info-label">年级</div>
                                    <div className="zy-conclusion-info-item">{content_grade}</div>
                                </div>
                                <div className="zy-conclusion-info-meta">
                                    <div className="zy-conclusion-info-label">班级</div>
                                    <div className="zy-conclusion-info-item">{content_klass}</div>
                                </div>
                            </div>
                            <div className="zy-conclusion-info-box">
                                <div className="zy-conclusion-info-meta">
                                    <div className="zy-conclusion-info-label">性别</div>
                                    <div className="zy-conclusion-info-item">{content_sex}</div>
                                </div>
                                <div className="zy-conclusion-info-meta">
                                    <div className="zy-conclusion-info-label">测评时间</div>
                                    <div className="zy-conclusion-info-item">{content_test_date}</div>
                                </div>
                                <div className="zy-conclusion-info-meta">
                                    <div className="zy-conclusion-info-label">测评时长</div>
                                    <div className="zy-conclusion-info-item">{content_test_duration}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

DetailsBasic.contextTypes = {
    router: React.PropTypes.object.isRequired
};

export default DetailsBasic;