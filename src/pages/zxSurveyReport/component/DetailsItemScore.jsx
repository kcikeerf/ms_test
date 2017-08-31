import React from 'react';

// import DetailItem from './DetailItem';

class DetailsItemScore extends React.Component {
    render() {
        let value = Math.round(this.props.obj.total_real_score/ 10);
        let content_score_items = [];
        for (let i=0; i<value; i++) {
            let score_item = <div className="zy-score-indicator-item zy-score-indicator-item-highlight" ></div>;
            content_score_items.push(score_item);
        }
        for (let i=0; i<(10-value); i++) {
            let score_item = <div className="zy-score-indicator-item" ></div>;
            content_score_items.push(score_item);
        }

        return (
            <div className="zy-score-indicator-body">
                <div className="zy-score-indicator-label">
                    <div className="zy-score-indicator-label-content">{this.props.obj.checkpoint}</div>
                    {/*<DetailItem data={this.props.obj} />*/}
                </div>
                <div className="zy-score-indicator-items">
                    {content_score_items}
                </div>
            </div>
        )
    }
}

DetailsItemScore.contextTypes = {
    router: React.PropTypes.object.isRequired
};

export default DetailsItemScore;