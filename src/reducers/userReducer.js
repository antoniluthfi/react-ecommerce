export const userReducer = (state = null, action) => {
    switch(action.type) {
        case 'LOGGED_IN_USER':
        case 'LOGOUT':
            return action.payload;
        default:
            return state;
    }
}