import profileReducer, {addPost, deletePost} from "./profile-reducer";
it('new post should be added', () => {
    let action = addPost("new post text");
    let state = {
        posts: [
            {id: 1, message: 'Hi, how are you?', likesCount: 12},
            {id: 2, message: 'It\'s my first post', likesCount: 11},
            {id: 3, message: 'Blabla', likesCount: 11},
            {id: 4, message: 'Dada', likesCount: 11}
        ],
        profile: null,
        status: ''
    };

    let newState = profileReducer(state, action);
    expect(newState.posts.length).toBe(5)

});

it('post should be deleted', () => {
    let action = deletePost(1);
    let state = {
        posts: [
            {id: 1, message: 'Hi, how are you?', likesCount: 12},
            {id: 2, message: 'It\'s my first post', likesCount: 11},
            {id: 3, message: 'Blabla', likesCount: 11},
            {id: 4, message: 'Dada', likesCount: 11}
        ],
        profile: null,
        status: ''
    };

    let newState = profileReducer(state, action);
    expect(newState.posts.length).toBe(3)

});