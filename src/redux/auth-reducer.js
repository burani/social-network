let initialState = {
    userId: null,
    login: null,
    email: null,
    isAuth: false

};

const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case 'SET-USER-DATA': {
            return {
                ...state,
                ...action.data,
                isAuth: true

            };
        }
        default:
            return state;
    }


}

export default authReducer;

export const setAuthUserData = (id, email, login) => {
    return {type: 'SET-USER-DATA', data: {id, email, login}};
};
