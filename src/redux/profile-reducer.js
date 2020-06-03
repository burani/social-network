//state == profilePage;


import {usersAPI} from "../api/api";

let initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 12},
        {id: 2, message: 'It\'s my first post', likesCount: 11},
        {id: 3, message: 'Blabla', likesCount: 11},
        {id: 4, message: 'Dada', likesCount: 11}
    ],
    newPostText: 'it-kamasutra.com',
    profile: null
}


const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case 'ADD-POST': {
            let text = state.newPostText;
            return {
                ...state,
                newPostText: '',
                posts: [...state.posts, {
                    id: 5,
                    message: text,
                    likesCount: 0
                }]
            }


        }
        case 'UPDATE-POST': {
            return {
                ...state,
                newPostText: action.newText
            }
        }
        case 'SET-PROFILE': {
            return {
                ...state,
                profile: action.profile
            }
        }
        default:
            return state;
    }

}

export default profileReducer;

export const addPostActionCreator = () => {
    return {type: 'ADD-POST'};
}

export const updatePostActionCreator = (text) => {
    return {type: 'UPDATE-POST', newText: text};
}


export const setProfile = (profile) => {
    return {type: 'SET-PROFILE', profile};
}

//thunk-creators
export const setProfileInfo = (userId) => {
    return (dispatch) => {
        usersAPI.getProfileInfo(userId)
            .then(response => {
                dispatch(setProfile(response.data));
            })
    }
}