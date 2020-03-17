//state == profilePage;



let initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 12},
        {id: 2, message: 'It\'s my first post', likesCount: 11},
        {id: 3, message: 'Blabla', likesCount: 11},
        {id: 4, message: 'Dada', likesCount: 11}
    ],
    newPostText: 'it-kamasutra.com'
}


const profileReducer = (state = initialState, action) => {
    switch (action.type){
        case 'ADD-POST': {
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            };
            state.posts.push(newPost);
            state.newPostText = '';
            return state;
        }
        case 'UPDATE-POST': {
            state.newPostText = action.newText;
            return state;
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