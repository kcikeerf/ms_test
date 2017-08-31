import React from 'react';

class Preloader extends React.Component {
    render() {
        return(
            <div id="loader-wrapper">
                <div id="loader"></div>
                <div id="loader-text">加载中...</div>
                <div className="loader-section"></div>
            </div>
        );
    }
}

export default Preloader;