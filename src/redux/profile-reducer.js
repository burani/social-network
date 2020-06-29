//state == profilePage;


import {profileAPI, usersAPI} from "../api/api";

let initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 12},
        {id: 2, message: 'It\'s my first post', likesCount: 11},
        {id: 3, message: 'Blabla', likesCount: 11},
        {id: 4, message: 'Dada', likesCount: 11}
    ],
    profile: null,
    status: ''
}


export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD-POST': {
            return {
                ...state,
                posts: [...state.posts, {
                    id: 5,
                    message: action.newPostText,
                    likesCount: 0
                }]
            }
        }
        case 'DELETE-POST': {
            return {
                ...state,
                posts: state.posts.filter(post => post.id != action.id)
            }
        }

        case 'SET-PROFILE': {
            return {
                ...state,
                profile: action.profile
            }
        }
        case 'SET-STATUS': {
            return {
                ...state,
                status: action.status
            }
        }
        default:
            return state;
    }
};

export default profileReducer;

export const addPost = (newPostText) => {
    return {type: 'ADD-POST', newPostText};
};

export const deletePost = (id) => {
    return {type: 'DELETE-POST', id};
};

export const setProfile = (profile) => {
    return {type: 'SET-PROFILE', profile};
};

export const setStatus = (status) => {
    return {type: 'SET-STATUS', status};
};


//thunk-creators
export const setProfileInfo = (userId) => {
    return async (dispatch) => {
        const response = await usersAPI.getProfileInfo(userId);
        dispatch(setProfile(response.data));
    }
};

export const getProfileStatus = (userId) => {
    return async (dispatch) => {
        const response = await profileAPI.getProfileStatus(userId)
        dispatch(setStatus(response.data));//response.data будет String.
    }
};

export const updateProfileStatus = (status) => {
    return async (dispatch) => {
        const response = await profileAPI.updateProfileStatus(status)
        debugger;
        if (response.data.resultCode === 0) dispatch(setStatus(status));//status - новый статус, который передается из локального стейта в компоненте ProfileStatus
    }
};



