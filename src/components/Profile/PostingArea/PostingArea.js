import React from 'react';
import classes from './PostingArea.module.css'
import { Field, reduxForm } from 'redux-form'
import {Textarea} from '../../../common/formTemplates/formTemplates'
import {required , inputMinLength2 , inputMaxLength8} from '../../../common/Validators/validators'
import {connect} from 'react-redux';

const AddPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name='newPostText' placeholder='wow' component={Textarea} validate={[required , inputMinLength2 , inputMaxLength8]} />
            </div>
            <div>
                <button>Post now</button>
            </div>
        </form>
    )
};

const AddPostReduxForm =reduxForm({
    form: 'Add post'
})(AddPostForm);

const PostingArea = (props) => {
    const onSubmit = (formData) => {
        props.addPost(formData.newPostText)
    }
    return (
        <div className={classes.postingArea}>
            <div className={classes.header}>
                Tell your thoughts
            </div>
        <AddPostReduxForm onSubmit={onSubmit} />
        </div>
    )
}

export default connect(null, null)(PostingArea)