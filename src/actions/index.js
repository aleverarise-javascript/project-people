import http from './http';

//getUsers

const startGetUsers = () => { return {type: 'START_GET_USERS', ready: false}}
const completetGetUsers = (data) => { return {type: 'COMPLETE_GET_USERS', data}}
const errortGetUsers = (error) => { return {type: 'ERROR_GET_USERS', error}}

const startGetUsersById = () => { return {type: 'START_GET_USERS_BY_ID', ready: false}}
const completetGetUsersById = (data) => { return {type: 'COMPLETE_GET_USERS_BY_ID', data}}
const errortGetUsersById = (error) => { return {type: 'ERROR_GET_USERS_BY_ID', error}}


export const getUsers = () => {
    return ( dispatch, getState ) => {
        dispatch(startGetUsers());
        /**
         * TODO:
         * Request con axios
         */
        http.get('users')
            .then((response) => {
                if(response.data){
                    dispatch(completetGetUsers(response.data));
                }
            })
            .catch((error) => {
                dispatch(errortGetUsers(error));
            });
    }
}

export const getUsersById = ( userId ) => {
    return ( dispatch, getState ) => {
        dispatch(startGetUsersById());
        /**
         * TODO:
         * Request con axios
         */
        http.get('users/' + userId)
            .then((response) => {
                if(response.data){
                    dispatch(completetGetUsersById(response.data));
                }
            })
            .catch((error) => {
                dispatch(errortGetUsersById(error));
            });
    }
}
