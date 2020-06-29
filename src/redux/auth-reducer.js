import {authAPI, profileAPI} from "../api/api";
import {stopSubmit} from "redux-form";

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
                ...action.payload,

            };
        }
        default:
            return state;
    }


}

export default authReducer;

export const setAuthUserData = (userId, email, login, isAuth) => {
    return {type: 'SET-USER-DATA', payload: {userId, email, login, isAuth}};
};

export const getAuthUserData = () => {
    return async (dispatch) => {
        let response = await authAPI.getAuthUserData()
        if (response.data.resultCode === 0) {
            let {id, email, login} = response.data.data;
            dispatch(setAuthUserData(id, email, login, true));
        }
    }
};

export const loginUser = (formData) => {
    return async (dispatch) => {
        let response = await authAPI.login({
            email: formData.login,
            password: formData.password,
            rememberMe: formData.rememberMe
        });
        if (response.data.resultCode === 0) {
            //Здесь сначала просто заносятся данные в куки, далее в функции getAuthUserData на основании этих данных из куки собираются данные о пользователе и сетаются
            dispatch(getAuthUserData());
        } else {
            let message = response.data.messages.length > 0 ? response.data.messages[0] : "Some error";
            dispatch(stopSubmit("login", {_error: message}));

        }
    }
};

export const logout = () => {
    return async (dispatch) => {
        const response = await authAPI.logout();

        if (response.data.resultCode === 0) {
            //Здесь надо сбросить залогинненного пользователя
            dispatch(setAuthUserData(null, null, null, false));
        } else {
            alert(response.data.messages[0])
        }
    }
};