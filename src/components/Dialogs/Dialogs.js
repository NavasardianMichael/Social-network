import React from 'react'
import classes from './Dialogs.module.css'
import Message from './Message/Message'
import DialogItem from './DialogItem/DialogItem'
import { Field, reduxForm } from 'redux-form'
import {Textarea} from '../../common/formTemplates/formTemplates'
import {required , inputMinLength2 , inputMaxLength8} from '../../common/Validators/validators'

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div className={classes.messages}>    
                <div className={classes.newMessageArea}>
                    <Field name='newMessagetext' component={Textarea} placeholder='a' validate={[required , inputMinLength2 , inputMaxLength8]} />
                    <button>Send</button>
                </div>
            </div>    
        </form>
    )
};

const AddMessageReduxForm = reduxForm({
    form: 'Add message'
})(AddMessageForm);

const Dialogs = (props) => {
    let dialogsData = props.dialogsData.map((elem) => {
        return <DialogItem name={elem.name} key={elem.key} id={elem.id} />
    });
    let messagesData = props.messagesData.map((elem) => {
        return <Message message={elem.message} id={elem.id} />
    });
    const onSubmit = (formData) => {
        console.log(formData.newMessagetext)
        props.addMessage(formData.newMessagetext)
    }
    return (
        <div>
            <div className={classes.header}>
                Dialogs
            </div>

            <div className={classes.dialogs}>
                <div className={classes.dialogsItems}>
                    {dialogsData}     
                </div>
                <div className={classes.newMessageArea}>
                    {messagesData}
                    <AddMessageReduxForm onSubmit={onSubmit} />
                </div>
                
            </div>
        </div>
    )
}

export default Dialogs

/*import React from 'react'
import classes from './Dialogs.module.css'
import Message from './Message/Message'
import DialogItem from './DialogItem/DialogItem'

const Dialogs = (props) => {

    let dialogsData = props.dialogsData.map((elem) => {
        return <DialogItem name={elem.name} id={elem.id} />
    });

    let messagesData = props.messagesData.map((elem) => {
        return <Message message={elem.message} id={elem.id} />
    });

    let refToTextArea = React.createRef();
    let refToButton=React.createRef();

    let addNewMessage = () => {
        props.addNewMessage('')
    };

    let newMessageTextChange = () => {
        props.newMessageTextChange(refToTextArea.current.value);
    };

    let addNewMessageByEnterKey = (event) => {
        if (event.keyCode === 13) {
            event.preventDefault();
            refToButton.current.click();
            return false
        } 
    };

    return (
        <div>
    <div className={classes.header}>
        Dialogs
    </div>
    <div className={classes.dialogs}>
        <div className={classes.dialogsItems}>
            {dialogsData}
        </div>
        <div className={classes.messages}>
            {messagesData}
            <div className={classes.newMessageArea}>
                <textarea ref={refToTextArea} onKeyUp={addNewMessageByEnterKey} value={props.value} onChange={newMessageTextChange}></textarea>
                <button ref={refToButton} onClick={addNewMessage}>Send</button>
            </div>
        </div>
    </div>
</div>
    )
}
export default Dialogs*/