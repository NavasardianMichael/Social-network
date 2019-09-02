import React from 'react';
import Profile from './Profile'
import {getUserProfile} from '../../redux/ProfileReducer'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {usersAPI} from '../../API/API'
import {withAuthRedirect} from '../../hoc/AuthRedirect'
import {compose} from 'redux';
import {getUserId} from '../../redux/profileSelectors'

class ProfileContainer extends React.Component  {

componentDidMount() {
    let userId=this.props.match.params.userId || this.props.userId || this.props.history.push('/login');
    this.props.getUserProfile(userId);
}

render() {
	return (
		<div>
			<Profile {...this.props} />
		</div>
		)
	}
};

let mapStateToProps = (state) => {
	return {
		userId: getUserId(state)
	}
}

export default compose(connect(mapStateToProps,{getUserProfile}) , withRouter , withAuthRedirect)(ProfileContainer) 