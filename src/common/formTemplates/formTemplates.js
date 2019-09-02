import React from 'react'
import invalid from './invalid.png'
import classes from './formTemplates.module.css'

export const Textarea = ({input , meta: {touched , error , warning}}) => {
	return (
		<div>
			<textarea {...input}></textarea>
			{touched && error ? <span><span><img src={invalid} className={classes.img} /></span><span>{error}</span> </span> : undefined}
		</div>
	)
}

export const Email = ({input , meta: {touched , error , warning}}) => {
	return (
		<div>
			<input {...input} placeholder='enter your email'></input>
			{touched && error ? <span>{error}</span> : undefined}
		</div>
	)
}

export const Password = ({input , meta: {touched , error , warning}}) => {
	return (
		<div>
			<input {...input} type='password' placeholder='enter your password'></input>
			{touched && error ? <span>{error}</span> : undefined}
		</div>
	)
}