const ADD_MESSAGE = 'ADD-MESSAGE';

let initialState = {
    dialogsData: [
        { id: 1, name: 'Mike' },
        { id: 2, name: 'Julie' },
        { id: 3, name: 'Annie' },
        { id: 4, name: 'Sergio Navarro' },
    ],
    messagesData: [
        { id: 1, message: 'Hi' },
        { id: 2, message: 'How are you ? ' },
        { id: 3, message: 'What plans for tomorrow ? ' },
        { id: 4, message: 'Tell about your dreams ' },
        { id: 5, message: 'What motivates you ? ' },
    ],
    newMessageText: ''
};
//window.dialogsInitialState=initialState;

let DialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {
                id: state.messagesData.length + 1,
                message: action.newMessageText
            }
            
            if (newMessage.message!=='') {
                return {
                    ...state,
                    messagesData: [...state.messagesData, newMessage]
                }
            }/* else {
                return state
            }*/

        default:
            return state
    }
};

export let addMessage = (newMessageText) => {
    return {
        type: ADD_MESSAGE,
        newMessageText: newMessageText
    }
};

export default DialogsReducer