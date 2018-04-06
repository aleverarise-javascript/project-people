export const getUsers = (state = [], action) => {
    switch (action.type) {
        case 'START_GET_USERS':
            return action;
            break;
        case 'COMPLETE_GET_USERS':
            return action;
            break;
        case 'ERROR_GET_USER':
            return action;
            break;
        default:
            return state
            break;
    }
}

export const getUsersById = (state = [], action) => {
    switch (action.type) {
        case 'START_GET_USERS_BY_ID':
            return action;
            break;
        case 'COMPLETE_GET_USERS_BY_ID':
            return action;
            break;
        case 'ERROR_GET_USER_BY_ID':
            return action;
            break;
        default:
            return state
            break;
    }
}