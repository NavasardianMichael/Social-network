import {usersAPI} from '../API/API'

const FOLLOW='FOLLOW';
const UNFOLLOW='UNFOLLOW';
const SET_USERS='SET-USERS';
const GET_USERS_COUNT='GET-USERS-COUNT';
const SET_CURRENT_PAGE_NUMBER='SET-CURRENT-PAGE-NUMBER';
const SET_FETCHING_STATE='SET-FETCHING-STATE';

let initialState = {
    users: [],
    usersCount: 0,
    pageSize: 10,
    currentPageNumber: 1,
    isFetching: false
};

let UsersReducer = (state = initialState , action) => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: [...state.users].map(elem => {
                    if (elem.id === action.userId) {
                        return { ...elem, followed: true }
                    }
                    return elem
                })
            }

        case UNFOLLOW:
            return {
                ...state,
                users: [...state.users].map(elem => {
                    if (elem.id === action.userId) {
                        return { ...elem, followed: false }
                    }
                    return elem
                })
            }

        case SET_USERS: 
            return {
                ...state, 
                users: action.users,
            }

        case GET_USERS_COUNT:
            return {
                ...state,
                usersCount: action.usersCount
            }

        case SET_CURRENT_PAGE_NUMBER:
            return {
                ...state,
                currentPageNumber: action.pageNumber
            }
        case SET_FETCHING_STATE:
            return {
                ...state,
                isFetching: action.isFetching
            }

        default:
            return state
    };
};
export let follow = (userId) => {
    return {
        type: FOLLOW,
        userId: userId
    }
};
export let unfollow = (userId) => {
    return {
        type: UNFOLLOW,
        userId: userId
    }
};
export let setUsers = (users) => {
    return {
        type: SET_USERS,
        users: users
    }
};
export let getUsersCount = (usersCount) => {
    return {
        type: GET_USERS_COUNT,
        usersCount: usersCount
    }
};
export let setCurrentPageNumber = (pageNumber) => {
    return {
        type: SET_CURRENT_PAGE_NUMBER,
        pageNumber: pageNumber
    }
};
export let setFetchingState = (isFetching) => {
    return {
        type: SET_FETCHING_STATE,
        isFetching: isFetching
    }
};

export let getUsersProfiles = (currentPageNumber , pageSize) => {

    return (dispatch) => {
            dispatch(setFetchingState(true));
            document.body.style.opacity='0.2'; 
            usersAPI.getUsers(currentPageNumber , pageSize).then(data => {
            dispatch(setUsers(data.items));
            dispatch(getUsersCount(data.totalCount));
            dispatch(setCurrentPageNumber(currentPageNumber));
            dispatch(setFetchingState(false));
            document.body.style.opacity='1'; 
        })
    }
}


export default UsersReducer