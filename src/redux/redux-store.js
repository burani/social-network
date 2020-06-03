import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import thunkMiddleware from "redux-thunk";



//Этот объект по сути можно воспринимать как state по аналогии store.js
let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer
});


//После этого redux store создаст внутри себя три свойства, которые мы указали в combineReducers, как у нас и было в store.js.

//redux чтобы проинициализировать state при запуске приложения вызывает метод dispatch с проприетарным action типом и undefined state.
//Это делается чтобы в каждой ветви state'a (в каждом редьюсере) проинициализировался state по умолчанию.
//Теперь state по умолчанию находится в самих редьюсерах.
let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;