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


export default store;

window.store = store;