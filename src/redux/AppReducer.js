import {usersAPI} from '../API/API'
import {authMe} from './AuthReducer'

const INIT_SUCCEDED = 'INIT-SUCCEDED'

let initialState = {
    init_ed: false
}

let AppReducer = (state = initialState, action) => {
    switch (action.type) {
        
        case INIT_SUCCEDED:
            return {
                init_ed: true
            }
        default:
            return state
    }
};

export let initSucceded = () => {
    return {
        type: INIT_SUCCEDED,
    }
};

export let initApp = () => {
    return (dispatch) => {
        let promise = dispatch(authMe());
        Promise.all([promise]).then(() => {dispatch((initSucceded()))})
    }
}

export default AppReducer