import {authAPI} from "../api/api";

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

export const getAuthUserData = () => {
    return (dispatch) => {
        authAPI.getAuthUserData().then(
            (response) => {
                if (response.data.resultCode === 0) {
                    let {id, email, login} = response.data.data;
                    dispatch(setAuthUserData(id, email, login));
                }

            }
        );
    }
};