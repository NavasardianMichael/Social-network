import React from 'react';
import classes from './SideBarElem.module.css'
import user from '../../../Profile/MyPosts/Post/user.png'

const SideBarElem = (props) => {
    return (
        <div className={classes.friend}>
        <img src={user} />
        <div className={classes.friendName}>{props.friendName}</div>
        </div>
    )
}

export default SideBarElem