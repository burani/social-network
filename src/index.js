import * as serviceWorker from './serviceWorker';


import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";

import store from "./redux/redux-store";
import {Provider} from "react-redux";

//В этой фукнции мы избавляемся от циклических зависимостей за счет того, что мы не импортируем state в коде, он передается этой фукнции в качестве пропсов.

//ReactDOM.render - первый аргумент - то, что мы будем рендерить. Второй - то, куда мы будем рендерить (указываем элемент с id root)

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <App/>
        </Provider>
    </BrowserRouter>, document.getElementById('root'));


//Даем функцию rerenderEntireTree в store, чтобы она использовалась для ререндеринга после изменения state. Она будет выполняться в методе dispatch.

//Первоначальная отрисовка приложения. (Здесь в принципе можно не использовать store.getState(), так как в этой функции все равно импортируется store(который тоже содержит state) из другого файла и переданный параметр можно просто не использовать)


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
