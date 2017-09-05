import React from 'react';
import PropTypes from 'prop-types';

class DetailsAdvice extends React.Component {
    render() {

        let suggestions = this.props.data;
        let type = suggestions.type;
        let advive = suggestions.suggestion;

        return (
            <div className="row">
                <div className="col-sm-12 col-xs-12"></div>
                <div className="col-sm-12 col-xs-12">
                    <h2 className="zy-report-section-title">发展建议</h2>
                </div>
                <div className="col-sm-12 col-xs-12">
                    你的发展类型属于<strong>{type}</strong>,{advive}
                </div>
            </div>
        )
    }
}

DetailsAdvice.contextTypes = {
    router: PropTypes.object.isRequired
};

export default DetailsAdvice;