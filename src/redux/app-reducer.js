import {getAuthUserData} from "./auth-reducer";

let initialState = {
    initialized: false

};

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET-INITIALIZED": {
            return {
                ...state,
                initialized: action.initialized
            }
        }
        default:
            return state;
    }
};


export const setInitialized = (initialized) => {
    return {type: "SET-INITIALIZED", initialized}
};

//thunk-creators

export const initializeApp = () => {
    return async (dispatch) => {
        // debugger;
        let response = await dispatch(getAuthUserData());
        dispatch(setInitialized(true));
    }
};

export default appReducer;