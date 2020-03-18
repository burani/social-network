import * as serviceWorker from './serviceWorker';


import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";

import store from "./redux/redux-store";
import StoreContext from "./redux/StoreContext";

//В этой фукнции мы избавляемся от циклических зависимостей за счет того, что мы не импортируем state в коде, он передается этой фукнции в качестве пропсов.
export let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <StoreContext.Provider value={store}>
                <App/>
            </StoreContext.Provider>

        </BrowserRouter>, document.getElementById('root'));
}


//Даем функцию rerenderEntireTree в store, чтобы она использовалась для ререндеринга после изменения state. Она будет выполняться в методе dispatch.
store.subscribe(rerenderEntireTree);

//Первоначальная отрисовка приложения. (Здесь в принципе можно не использовать store.getState(), так как в этой функции все равно импортируется store(который тоже содержит state) из другого файла и переданный параметр можно просто не использовать)
rerenderEntireTree(store.getState());



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
