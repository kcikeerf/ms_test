import React from 'react';

import 'bootstrap/js/modal.js';

class Modal extends React.Component {
    render() {
        let target_id;
        let data_target;
        let data_label;
        if (this.props.keyPerformance === true) {
            target_id = 'zyModal-strong-' + this.props.modalId;
            data_target = '#' + target_id;
            data_label = target_id + '-label';
        }
        else {
            target_id = 'zyModal-weak-' + this.props.modalId;
            data_target = '#' + target_id;
            data_label = target_id + '-label';
        }
        
        
        return(
            <div className="zy-modal-container">
                <button type="button" className="glyphicon glyphicon-question-sign zy-modal-toggle" data-toggle="modal" data-target={data_target}></button>
                <div className="modal fade" id={target_id} tabIndex="-1" role="dialog" aria-labelledby={data_label}>
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                                <h4 className="modal-title" id={data_label}>{this.props.title}</h4>
                            </div>
                            <div className="modal-body">
                                 <div dangerouslySetInnerHTML={{__html: this.props.definition}} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Modal;