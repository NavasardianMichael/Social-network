import MyPosts from './MyPosts'
import {connect} from 'react-redux'

let mapStateToProps = (state) => {
	return {
		postsData: state.profilePage.postsData
	}
};

export default connect(mapStateToProps)(MyPosts)
