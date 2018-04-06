import React, { Component } from 'react';
import PropTypes from 'prop-types';

class UserPost extends Component {
    render() {
        const { title, message } = this.props;
        return (
            <div className="UserPost" >
                <h1>{title}</h1>
                <h2>{message}</h2>
            </div>
        );
    }
}

UserPost.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
};

export default UserPost;