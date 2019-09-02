import { combineReducers, createStore } from 'redux'
import ProfileReducer from './ProfileReducer'
import DialogsReducer from './DialogsReducer'
import UsersReducer from './UsersReducer'
import AuthReducer from './AuthReducer'
import {applyMiddleware} from 'redux'
import thunkMiddleware from 'redux-thunk'
import { reducer as formReducer } from 'redux-form'
import AppReducer from './AppReducer'

let reducers = combineReducers({
	app: AppReducer,
    profilePage: ProfileReducer,
    dialogsPage: DialogsReducer,
    usersPage: UsersReducer,
    auth: AuthReducer,
    form: formReducer
});

let store = createStore(reducers , applyMiddleware(thunkMiddleware));
window.store=store;
export default store