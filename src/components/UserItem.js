import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router';

class UserItem extends Component {
    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);

        this.state = {
            isRedirect: false,
        }
    }

    onClick(e){
        this.setState({isRedirect: true});
    }
    

    render() {
        const { id, name, last_name, facebook } = this.props;
        if(this.state.isRedirect){
            return (<Redirect to={`/detail/${id}`} />)
        }
        return (
            <div className="card" onClick={this.onClick} >
                <div className="card-content" >
                    <div className="useritem-leftbox" >
                        <img 
                            className="useritem-image"
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9rElO_FYk4T-XEyA4Dh7m-VUbz7QSJ1CWJ5KOLJHojNmfNFeH" 
                            alt="profile" 
                        />
                    </div>
                    <div className="useritem-rightbox" >
                        <h2 className="useritem-name" >{`${name} ${last_name}`}</h2>
                        <h3 className="useritem-facebook" >{facebook}</h3>
                    </div>
                </div>
            </div>
        );
    }
}

UserItem.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    last_name: PropTypes.string.isRequired,
    facebook: PropTypes.string,
};

export default UserItem;