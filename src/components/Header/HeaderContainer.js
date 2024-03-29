import React from 'react'
import Header from './Header'
import {authMe} from '../../redux/AuthReducer'
import {connect} from 'react-redux' 

class HeaderContainer extends React.Component  {

componentDidMount() {
	this.props.authMe()
}

render() {

return 	<Header {...this.props}/>
	
	}
};

let mapStateToProps = (state) => {
	return {
		isAuth: state.auth.isAuth,
	 	login: state.auth.login,

	}
}

export default connect(mapStateToProps, {authMe})(HeaderContainer)