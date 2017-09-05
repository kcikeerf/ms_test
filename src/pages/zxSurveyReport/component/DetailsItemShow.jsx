import React from 'react';
import PropTypes from 'prop-types';

import DetailsItemScore from './DetailsItemScore';

class DetailsItemShow extends React.Component {
    render() {
        let itemName = this.props.name;
        let itemExplain = this.props.explain;
        let second_items = this.props.items;
        let second_items_arr=[];
        for(let i=0;i<second_items.length; i++){
            let id= Object.keys(second_items[i])[0];
            second_items_arr.push(second_items[i][id]);
        }

        let content_second_item = second_items_arr.map((obj,index) => {
            return <DetailsItemScore key = {index} obj = {obj} />
        })

        return (
            <div className="zy-score-indicator-container">
                <div className="zy-score-indicator-heading">
                    <h3 className="zy-section-subtitle">{itemName}</h3>
                    <div className="zy-title-highlight">{itemExplain}</div>
                </div>
                {content_second_item}
            </div>
        )
    }
}

DetailsItemShow.contextTypes = {
    router: PropTypes.object.isRequired
};

export default DetailsItemShow;