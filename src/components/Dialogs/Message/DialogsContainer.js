import React from 'react';
import Dialogs from "../Dialogs";
import {updateMessageActionCreator, addMessageActionCreator} from "../../../redux/dialogs-reducer";
import connect from "react-redux/lib/connect/connect";


//connect защищает нас от знания о store. (он возвращает нам готовую контейнерную компоненту)

//когда мы вызываем connect, мы передаем ему две функции, который возвращают часть стейта, которую мы хотим передать в презентационную компоненту из контейнерной, методы dispatch.
//connect это все передает в пропсы презентационной компоненты.


let  mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        updateNewText: (body) => {
            dispatch(updateMessageActionCreator(body));
        },
        addPost: () => {
            dispatch(addMessageActionCreator());
        }
    }
}

//Созданные коннектом методы используют dispatch в замыкании чтобы диспатчить то, что вернули action/thunk creator (экшены/санки). (метод dispatch доступен в замыкании в этих методах)
//Для создания санки нам нужнем сам метод dispatch, а не просто информация из UI. Поэтому санк-креатор вернет санку, в которую надо будет в качестве аргумента предоставить
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;

