import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

    let dialogsElements = props.dialogsPage.dialogs.map( d => <DialogItem name={d.name} id={d.id} />  );
    let messagesElements = props.dialogsPage.messages.map( m => <Message message={m.message}/> );

    const onUpdateNewText = (e) => {
        props.updateNewText(e.target.value);
    }

    const onAddClick = (e) => {
        props.addPost();
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                { dialogsElements }
            </div>
            <div className={s.messages}>
                { messagesElements }
                <div>
                    <textarea onChange={onUpdateNewText} value={props.dialogsPage.newMessageText} placeholder={"Enter message text"}></textarea>
                </div>
                <div>
                    <button onClick={onAddClick}>Send</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;