import Dialogs from './Dialogs'
import {addMessage} from '../../redux/DialogsReducer'
import {connect} from 'react-redux'
import {withAuthRedirect} from '../../hoc/AuthRedirect'
import {compose} from 'redux'
import {getDialogsData , getMessagesData} from '../../redux/dialogsSelectors'

let mapStateToProps = (state) => {
    return {
    dialogsData: getDialogsData(state),
    messagesData: getMessagesData(state)
    }
};

let DialogsContainer = compose(connect(mapStateToProps, {addMessage}) , withAuthRedirect) (Dialogs)

export default DialogsContainer