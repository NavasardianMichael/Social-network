import ProfileInfo from './ProfileInfo'
import {connect} from 'react-redux'
import {getUserStatus} from '../../../redux/ProfileReducer'

let mapStateToProps = (state) => {
	return {		
		currentUserProfile: state.profilePage.currentUserProfile,
		myId: state.auth.Id,
		currentUserStatus: state.profilePage.currentUserStatus
	}
};

let ProfileInfoContainer = connect(mapStateToProps , {getUserStatus})(ProfileInfo)

export default ProfileInfoContainer