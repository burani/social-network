import React from 'react';
import Dialogs from "./Dialogs";
import {addMessage} from "../../redux/dialogs-reducer";
import WithAuthRedirect from "../../hoc/WithAuthRedirect";
import {compose} from "redux";
import {connect} from "react-redux";


//connect защищает нас от знания о store. (он возвращает нам готовую контейнерную компоненту)

//когда мы вызываем connect, мы передаем ему две функции, который возвращают часть стейта, которую мы хотим передать в презентационную компоненту из контейнерной, методы dispatch.
//connect это все передает в пропсы презентационной компоненты.


let  mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
}


//Созданные коннектом методы используют dispatch в замыкании чтобы диспатчить то, что вернули action/thunk creator (экшены/санки). (метод dispatch доступен в замыкании в этих методах)
//Для создания санки нам нужнем сам метод dispatch, а не просто информация из UI. Поэтому санк-креатор вернет санку, в которую надо будет в качестве аргумента предоставить
// const DialogsContainer = WithAuthRedirect(connect(mapStateToProps, mapDispatchToProps)(Dialogs));

// export default DialogsContainer;

export default compose(
    WithAuthRedirect,
    connect(mapStateToProps, {addMessage})
)(Dialogs)


