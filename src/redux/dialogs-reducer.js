
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
    ]
}


//state == dialogsPage;
const dialogsReducer = (state = initialState, action) => {

    //Копию нужно делать только того, что мы собираемся менять.


    switch (action.type) {
        case 'ADD-MESSAGE': {
            let text = action.newMessageText;
            return {
                ...state,
                messages: [...state.messages, {id: 1, message: text}]
            };
        }

        default:
            return state;
    }


}

export default dialogsReducer;

export const addMessage = (newMessageText) => {
    return {type: 'ADD-MESSAGE', newMessageText};
}
