import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../utils/validators";
import FormElement from "../../utils/FormElement";





const Dialogs = (props) => {

    let dialogsElements = props.dialogsPage.dialogs.map( d => <DialogItem name={d.name} id={d.id} />  );
    let messagesElements = props.dialogsPage.messages.map( m => <Message message={m.message}/> );

    // const onUpdateNewText = (e) => {
    //     props.updateNewText(e.target.value);
    // }

    const onSubmit = (formData) => {
        props.addMessage(formData.message);
    };

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                { dialogsElements }
            </div>
            <div className={s.messages}>
                { messagesElements }
                <div>
                    <DialogsReduxForm onSubmit={onSubmit}/>
                </div>
            </div>
        </div>
    )
}



const maxLength = maxLengthCreator(100);
const DialogsTextArea = FormElement("textarea");



const DialogsForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"Enter your message here"} name={"message"} component={DialogsTextArea} validate={[required, maxLength]}/>
            </div>
            <div>
                <button>Send</button>
            </div>


        </form>
    )
}

const DialogsReduxForm = reduxForm({form: 'dialogsForm'})(DialogsForm);

export default Dialogs;