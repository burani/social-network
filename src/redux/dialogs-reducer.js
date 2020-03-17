
let initialState = {
    dialogs: [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Andrew'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Sasha'},
        {id: 5, name: 'Viktor'},
        {id: 6, name: 'Valera'}
    ],
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How is your it-kamasutra?'},
        {id: 3, message: 'Yo'},
        {id: 4, message: 'Yo'},
        {id: 5, message: 'Yo'}
    ],
    newMessageText: ''
}


//state == dialogsPage;
const dialogsReducer = (state = initialState, action) => {

    switch(action.type){
        case 'ADD-MESSAGE': {
            let newMessage = {id: 1, message: state.newMessageText};
            state.messages.push(newMessage);
            state.newMessageText = '';
            return state;
        }
        case 'UPDATE-MESSAGE': {
            console.log("state was changed");
            state.newMessageText = action.newText;
            return state;
        }
        default:
            return state;
    }


}

export default dialogsReducer;

export const addMessageActionCreator = () => {
    return {type: 'ADD-MESSAGE'};
}

export const updateMessageActionCreator = (text) => {
    return {type: 'UPDATE-MESSAGE', newText: text};
}
