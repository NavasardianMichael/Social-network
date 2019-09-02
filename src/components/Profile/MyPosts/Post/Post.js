import React from 'react';
import classes from './Post.module.css'
import user from './user.png'

const Post = (props) => {
return (
<div className={classes.post}>
    <img src={user} />
    <span className={classes.postText}>{props.postText}</span>
    <div>like<span>{' (' + props.likesCount + ')'}</span></div>
</div>
)
}
export default Post