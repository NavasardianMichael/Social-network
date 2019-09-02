import React from 'react';
import '../../App.css'
import classes from './Profile.module.css'
import ProfileInfoContainer from './ProfileInfo/ProfileInfoContainer'
import PostingAreaContainer from './PostingArea/PostingAreaContainer'
import MyPostsContainer from './MyPosts/MyPostsContainer'

const Profile = (props) => {
return (
<div>
    <ProfileInfoContainer />
    <PostingAreaContainer />
    <MyPostsContainer />
</div>
)
}

export default Profile