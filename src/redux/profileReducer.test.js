import ProfileReducer, { setUserProfile } from './ProfileReducer'
import ReactDOM from 'react-dom'
import React from 'react'

it(`Current user's Profile is succesfully added`, () => {
    
    let state = {
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

    let newProfile = {
        "aboutMe": null,
        "contacts": {
            "facebook": null,
            "website": null,
            "vk": null,
            "twitter": null,
            "instagram": null,
            "youtube": null,
            "github": null,
            "mainLink": null
        },
        "lookingForAJob": false,
        "lookingForAJobDescription": null,
        "fullName": "essedger",
        userId: 5,
        "photos": {
            "small": null,
            "large": null
        }
    };
    
    let action = setUserProfile(newProfile);
    
    let addNewProfile = ProfileReducer(state, action)
    
    //test userId existance after settingp current user's profile
    expect(addNewProfile.currentUserProfile.userId).toBe(5)
})