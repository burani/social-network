// import {rerenderEntireTree} from "../render";

// let rerenderEntireTree = () =>{
//     console.log("State was changed");
// }
//Теперь чтобы без циклической зависимости вызывать в этом файле rerenderEntireTree, нам нужно создать функцию subscribe, которая будет импортироваться в другой файл
//Когда эта функция будет вызываться в другом файле в качестве аргумента нужно передавать то значение, которое нам нужно здесь и запоминаем его. (коллбэк rerenderEntireTree)
//Это работает, потому что на самом деле функция в жс работает там, где она создана, а не где она вызвана.

import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you?', likesCount: 12},
                {id: 2, message: 'It\'s my first post', likesCount: 11},
                {id: 3, message: 'Blabla', likesCount: 11},
                {id: 4, message: 'Dada', likesCount: 11}
            ],
            newPostText: 'it-kamasutra.com'
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Dimych'},
                {id: 2, name: 'Andrew'},
                {id: 3, name: 'Sveta'},
                {id: 4, name: 'Sasha'},
                {id: 5, name: 'Viktor'},
                {id: 6, name: 'Valera'}
            ],
            messages: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'How is your it-kamasutra?'},
                {id: 3, message: 'Yo'},
                {id: 4, message: 'Yo'},
                {id: 5, message: 'Yo'}
            ],
            newMessageText: ''
        },
        sidebar: {}
    },
    getState() {
        return this._state;
    },
    _callSubscriber() {
        console.log("no current subscriber");
    },
    addPost() {
        let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likesCount: 0
        };
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        //Это нужно чтобы после добавления поста у нас изменился виртуальный дом
        // rerenderEntireTree(state);
        this._callSubscriber(this._state);
    },
    updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.profilePage = profileReducer(this._state.profilePage, action);

        this._callSubscriber();

    }
}



export const addPostActionCreator = () => {
    return {type: 'ADD-POST'};
}

export const updatePostActionCreator = (text) => {
    return {type: 'UPDATE-POST', newText: text};
}

export const addMessageActionCreator = () => {
    return {type: 'ADD-MESSAGE'};
}

export const updateMessageActionCreator = (text) => {
    return {type: 'UPDATE-MESSAGE', newText: text};
}

export default store;

window.store = store;