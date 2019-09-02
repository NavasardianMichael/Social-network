import {addPost} from '../../../redux/ProfileReducer'
import PostingArea from './PostingArea'
import {connect} from 'react-redux'

let mapStateToProps = (state) => {
    return {
        value: state.profilePage.newPostText
    }
};

let PostingAreaContainer = connect(mapStateToProps,{addPost})(PostingArea)

export default PostingAreaContainer