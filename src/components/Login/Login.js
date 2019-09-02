import React from 'react'
import classes from './Login.module.css'
import { Field, reduxForm } from 'redux-form'
import * as axios from 'axios';
import {Email , Password} from '../../common/formTemplates/formTemplates';
import {required , inputMinLength2 , inputMaxLength8} from '../../common/Validators/validators';
import {login} from '../../redux/AuthReducer';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom'

const LoginForm = (props) => {
	return (
		<form onSubmit={props.handleSubmit}>
		{props.error && <div className={classes.errorMessage}>{props.error}</div>}
			<div>
				<Field name='email' component={Email} validate={[required]} />
			</div>
			<div>
				<Field name='password' component={Password}  validate={[required]} />
			</div>
			<div className={classes.rememberMeCheckbox}>
				<label><Field name='rememberMe' component='input' type='checkbox' />remember me</label> 
			</div>
			<div> 
				<button>
					login
				</button>
			</div>
		</form>		
	)
};

const LoginReduxForm = reduxForm({
	form: 'login'
})(LoginForm);

let mapStateToProps = (state) => {
	return {
		isAuth: state.auth.isAuth
	}
}

const Login = (props) => {
	const onSubmit = (formData) => {
		props.login(formData.email , formData.password , formData.rememberMe);
	};

	if (props.isAuth) return <Redirect to='/profile' />

    return (
        <div className={classes.loginArea}>
        	<h2>Login</h2>	
        	<LoginReduxForm onSubmit={onSubmit}/>
		</div>
    )
}

export default connect(mapStateToProps , {login})(Login)