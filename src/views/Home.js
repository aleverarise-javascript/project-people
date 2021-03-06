import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getUsers } from '../actions';
import UserItem from './../components/UserItem';
import { CircleLoader } from 'react-spinners';
import 'materialize-css/dist/css/materialize.min.css';
import './index.css';

class Home extends Component {

    constructor(props) {
        super(props);
        
    }
    

    componentWillMount() {
        this.props.getUsers();
    }

    render(){
        let users = [];
        if(this.props.users.data){
            users = this.props.users.data.map((currentValue, index, value) => {
                return (
                    <UserItem 
                        key={index}
                        id={currentValue.id}
                        name={currentValue.name}
                        last_name={currentValue.last_name}
                        facebook={currentValue.facebook}
                    />
                )
            })
        }

        if(this.props.users.type === "START_GET_USERS"){
            return (
                <div className="home-preloader">
                    <CircleLoader 
                        color="#FFF"
                        loading={true}
                    />
                </div>
            )
        }

        return(
            <div className="home" >
                { users}
            </div>
        );
    }
}

/**
 * TODO:
 * esta funcion convierte el valor de la
 * store que yo quiero en propiedades para
 * el componente
 */

function mapStateToProps(state){
    return {
        users: state.getUsers
        /**
         * TODO: 
         * esto viene siendo this.props.getUsers()
         */
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({
        getUsers
    }, dispatch);
}



export default connect(mapStateToProps, mapDispatchToProps)(Home);
