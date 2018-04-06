import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './index.css';

class UserDetailCover extends Component {

    constructor(props) {
        super(props);
        this.state = {
            cover: 'http://www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png',
        }
    }
    
    render() {
        return (
            <div className="userdetailcover" >
                <img alt="Profile" src={this.state.cover} className="userdetailcover-img" />
                <h2 className="title-name" >{`${this.props.name} ${this.props.last_name}`}</h2>
            </div>
        );
    }
}

UserDetailCover.propTypes = {
    name: PropTypes.string.isRequired,
    last_name: PropTypes.string.isRequired,
};

export default UserDetailCover;