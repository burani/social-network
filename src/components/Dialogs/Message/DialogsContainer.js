import React from 'react';
import Dialogs from "../Dialogs";
import {updateMessageActionCreator, addMessageActionCreator} from "../../../redux/dialogs-reducer";
import DialogItem from "../DialogItem/DialogItem";
import Message from "./Message";
import StoreContext from "../../../redux/StoreContext";


const DialogsContainer = () => {





    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    const updateNewText = (e) => {
                        let text = e.target.value;
                        console.log("Current text: " + text);
                        store.dispatch(updateMessageActionCreator(text));
                    }

                    const addPost = () => {
                        store.dispatch(addMessageActionCreator());
                    }
                    return (<Dialogs updateNewText={updateNewText} addPost={addPost} dialogsPage={store.getState().dialogsPage}/>)

                }

            }
        </StoreContext.Consumer>

    );
}

export default DialogsContainer;

