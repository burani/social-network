
//state == dialogsPage;
const dialogsReducer = (state, action) => {

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