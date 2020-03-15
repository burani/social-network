import * as serviceWorker from './serviceWorker';


import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";

import store from "./redux/state";

//В этой фукнции мы избавляемся от циклических зависимостей за счет того, что мы не импортируем state в коде, он передается этой фукнции в качестве пропсов.
export let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={store.getState()} dispatch={store.dispatch.bind(store)}
                 updateNewPostText={store.updateNewPostText.bind(store)}/>
        </BrowserRouter>, document.getElementById('root'));
}


store.subscribe(rerenderEntireTree);



rerenderEntireTree(store.getState());



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
