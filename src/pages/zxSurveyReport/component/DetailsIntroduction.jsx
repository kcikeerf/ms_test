import React from 'react';
import PropTypes from 'prop-types';

class DetailsIntroduction extends React.Component {
    render() {
        return (
            <div className="row">
                <div className="col-sm-12 col-xs-12">
                    <h2 className="zy-report-section-title">关于测评的说明</h2>
                </div>
                <div className="col-sm-12 col-xs-12">
                    <section className="zy-report-subsection">
                        <h3 className="zy-report-subsection-title">测评依据及方法</h3>
                        <div>
                            <p>
                                学生发展偏好测评主要是以国际著名的心理学家加德纳的多元智能理论为依据，
                                以学生自我评价的方式来获得学生对自己在日常生活以及学习中多元活动的表现情况的评定。
                            </p>
                        </div>
                    </section>
                </div>
                <div className="col-sm-12 col-xs-12">
                    <section className="zy-report-subsection">
                        <h3 className="zy-report-subsection-title">测评用途</h3>
                        <div>
                            <p>
                                帮助学生认识自己的发展倾向与偏好，为家长及老师更清楚地了解学生，
                                从而制定符合学生自身特点的特长发展计划、学业规划、职业规划提供参考依据。
                            </p>
                        </div>
                    </section>
                </div>
                <div className="col-sm-12 col-xs-12">
                    <section className="zy-report-subsection">
                        <h3 className="zy-report-subsection-title">测评结果解释注意事项</h3>
                        <div>
                            <p>
                                测评结果反映的仅仅是学生在多元活动中的倾向与偏好，并非是解决多元问题的优秀程度，
                                不能将测评结果和一般的智力测验等同起来。
                            </p>
                            <p>
                                学生的发展偏好一般而言变化会相对较小，
                                但其强度会随着某种特定教育条件的改变而有所变化，年龄越小的学生，
                                阶段性的变化可能越明显。
                                这意味着，本次测评呈现出的弱势偏好，
                                如果经过有意识地教育干预，弱势偏好的水平得到提升是完全有可能的。
                            </p>
                        </div>
                    </section>
                </div>
            </div>
        )
    }
}

DetailsIntroduction.contextTypes = {
    router: PropTypes.object.isRequired
};

export default DetailsIntroduction;