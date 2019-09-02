import React from 'react';
import classes from './ProfileInfo.module.css'
import ProfileStatus from './ProfileStatus'
import Preloader from '../../../common/Preloader/Preloader'

const ProfileInfo = (props) => {
	props.getUserStatus(props.currentUserProfile.userId);
   				
	if(!props.currentUserProfile.photos) return <Preloader />;
	return (
		<div>
			<div className={classes.fullName}>{`${props.currentUserProfile.fullName} (#${props.currentUserProfile.userId})`}</div> 
   			<img className={classes.userImg} src={props.currentUserProfile.photos.large} />
   			<div className={classes.userInfo}>
   			<div className={classes.lookingForJob}>
   				{props.currentUserProfile.lookingForAJob && <div>{props.currentUserProfile.lookingForAJobDescription}</div>} 
   			</div>
   			<div className={classes.contacts}>
	{Object.keys(props.currentUserProfile.contacts).map(key => {
			if (props.currentUserProfile.contacts[key]) {return <div>{`${key} - ${props.currentUserProfile.contacts[key]}`}</div>}
		})}
   			</div>
   			</div>
    		<div className={classes.status}>
    		{props.currentUserProfile.userId===props.myId ? <ProfileStatus /> : <div>{props.currentUserStatus}</div>}
			</div>
		</div>
)

}
export default ProfileInfo