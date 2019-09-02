import {authAPI} from '../API/API';
import {stopSubmit} from 'redux-form'
import {getUserProfile} from './ProfileReducer'

const SET_AUTH_USER = 'SET-AUTH-USER'

let initialState = {
                Id: null,
                email: null,
                login: null,
                isAuth: false
        };

let AuthReducer = (state = initialState, action) => {
    switch (action.type) {
        
        case SET_AUTH_USER:

        return {
        	...state,
        	...action.data,
        }

        default:
            return state
    };
};

export let setAuthUser = (Id , email , login , isAuth) => {
    return {
        type: SET_AUTH_USER,
        data: {Id , email , login , isAuth}
    }
};

export const authMe = () => {

    return (dispatch) => {
        authAPI.authMe().then(data => {
        if (data.resultCode===0) {
            dispatch(setAuthUser(data.data.id , data.data.email , data.data.login , true));
            dispatch(getUserProfile(data.data.id))
            }
        })
    }
};

export const login = (email , password , rememberMe) => {
    return (dispatch) => {
        authAPI.login(email , password , rememberMe)
        .then(response => {
            if (response.data.resultCode===0) {
                dispatch(authMe())
            } else {
                let errorMessage = response.data.messages.length > 0 ? response.data.messages[0] : 'undefined error';
                dispatch(stopSubmit('login' , {_error: errorMessage}))
            }
        })
    }
};

export const logout = () => {
    return (dispatch) => {
        authAPI.logout()
        .then(response => {
            if (response.data.resultCode===0) {
                dispatch(setAuthUser(null , null , null , false))
            }
        })
    }
}

export default AuthReducer