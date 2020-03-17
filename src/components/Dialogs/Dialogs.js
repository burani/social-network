import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


import {updateMessageActionCreator, addMessageActionCreator} from "../../redux/dialogs-reducer";

const Dialogs = (props) => {


    let dialogsElements = props.dialogsPage.dialogs.map( d => <DialogItem name={d.name} id={d.id} />  );
    let messagesElements = props.dialogsPage.messages.map( m => <Message message={m.message}/> );

    //Когда эта функция будет срабатывать, то ее будет вызывать react элемент textArea, и она будет передавать в нее event
    const updateNewText = (e) =>{
        let text = e.target.value;
        console.log("Current text: " + text);
        props.dispatch(updateMessageActionCreator(text));
    }

    const addPost = () => {
        props.dispatch(addMessageActionCreator());
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                { dialogsElements }
            </div>
            <div className={s.messages}>
                { messagesElements }
                <div>
                    <textarea onChange={updateNewText} value={props.dialogsPage.newMessageText} placeholder={"Enter message text"}></textarea>
                </div>
                <div>
                    <button onClick={addPost}>Send</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;