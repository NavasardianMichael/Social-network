import React from 'react';
import classes from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = (props) => {
    let postsElements = props.postsData.map((elem) => {
        return <Post postText={elem.postText} likesCount={elem.likesCount} key={elem.id} id={elem.id} />
    });

    return (
        <div>
    <div className={classes.myPosts}>
        {postsElements}
    </div>
</div>
    )
}
export default MyPosts