import profileReducer from './profileReducer'
import dialogsReducer from './dialogsReducer'

let store = {
    _state: {
        profilePage: {
            postsData: [
                { id: 1, postText: 'Wooooooooooow', likesCount: 24 },
                { id: 2, postText: 'I feel my dreams are coming true', likesCount: 30 },
                { id: 3, postText: 'Happiness is the way, not the destination', likesCount: 55 },
                { id: 4, postText: 'Dancing is great!!', likesCount: 40 },
            ],
            newPostText: ''
        },

        dialogsPage: {
            dialogsData: [
                { id: 1, name: 'Mike' },
                { id: 2, name: 'Julie' },
                { id: 3, name: 'Annie' },
                { id: 4, name: 'Silvie Mccartney' },
            ],
            messagesData: [
                { id: 1, message: 'Hi' },
                { id: 2, message: 'How are you ? ' },
                { id: 3, message: 'What plans for tomorrow ? ' },
                { id: 4, message: 'Tell about your dreams ' },
                { id: 5, message: 'What motivates you ? ' },
            ],
            newMessageText: ''
        },

        newsPage: '',
        musicPage: '',
        settingsPage: ''
    },

    getState() {
        return this._state
    },

    renderEntirePage() {
        console.log('state has been changed')
    },
    subscribe(observer) {
        this.renderEntirePage = observer;
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this.renderEntirePage()
    }
};

window.state = store._state;
export default store