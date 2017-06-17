import React from 'react';
import PropTypes from 'prop-types';
import getCookie from './../../../lib/getCookie';

class Banner extends React.Component{
    constructor(){
        super();
    }
    checkLogin(){
        if (process.env.DEV){
            this.context.router.push('/todo-list');
        }else {
            // let access_token = getCookie('access_token');
            // if(access_token){
            //     this.context.router.push('/todo-list');
            // }else {
            //     this.context.router.push('/user-login');
            // }
            this.context.router.push('/userList');
        }
    }

    render(){
        let style = {
            minHeight: '100%'
        };
        return (
            <div style={style}>
                <span onClick={this.checkLogin.bind(this)}>进入评价</span>
            </div>
        )
    }
}

Banner.contextTypes = {
    router: PropTypes.object.isRequired
};

export default Banner;