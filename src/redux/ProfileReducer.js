import {usersAPI} from '../API/API'

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const AUTH_USER = 'AUTH-USER';
const SET_USER_STATUS = 'SET-USER-STATUS'

let initialState = {
            postsData: [
                { id: 1, postText: 'Wooooooooooow', likesCount: 24 },
                { id: 2, postText: 'I feel my dreams are coming true', likesCount: 30 },
                { id: 3, postText: 'Happiness is the way, not the destination', likesCount: 55 },
                { id: 4, postText: 'Dancing is great!!', likesCount: 40 },
            ],
            isFetching: false,
            currentUserProfile: {},
            currentUserStatus: ''
};

let ProfileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: state.postsData.length+1,
                postText: action.newPostText,
                likesCount: 0
            };
            if (newPost.postText!=='') {
                return {
                    ...state ,
                    postsData: [...state.postsData , newPost],
                }                
            } 

        case SET_USER_PROFILE:
        return {
            ...state,
            currentUserProfile: action.currentUserProfile
        }

        case SET_USER_STATUS:
        return {
            ...state,
            currentUserStatus: action.currentUserStatus
        }

        default:
            return state
    }
};

export let addPost = (newPostText) => {
    return {
        type: ADD_POST,
        newPostText: newPostText
    }
};

export let setUserProfile = (currentUserProfile) => {
    return {
        type: SET_USER_PROFILE,
        currentUserProfile: currentUserProfile  
    }
};

export let setUserStatus = (currentUserStatus) => {
    return {
        type: SET_USER_STATUS,
        currentUserStatus: currentUserStatus
    }
};

export let getUserProfile = (userId) => {
    return (dispatch) => {
        usersAPI.getUserProfile(userId).then(response => {
        dispatch(setUserProfile(response.data));
     })
    }
};

export let getUserStatus = (userId) => {
    return (dispatch) => {
        usersAPI.getUserStatus(userId).then(response => {
        dispatch(setUserStatus(response.data));
        })
    }
}

export default ProfileReducer