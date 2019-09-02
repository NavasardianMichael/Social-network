import React from 'react';
import classes from './Header.module.css'
import {NavLink} from 'react-router-dom'
import {logout} from '../../redux/AuthReducer'
import {connect} from 'react-redux';

const Header = (props) => {

    return (
        <header className={classes.header}>
  		<img src='https://www.streamingmediablog.com/wp-content/uploads/2016/07/stackpath-logo-s-cyan.png' />
  		{props.isAuth ? 
  					<div className={classes.loginBlock}>
  						<div className={classes.authLogin}>
  							{props.login}
  						</div>
  						<div className={classes.logBlock} >
  							<span className={classes.logout} onClick={props.logout}>Logout</span>
  						</div>
  					</div> 
  			:   <div className={classes.notAuthLogin}>
  					<div> 
  						<NavLink to='/login'>Login</NavLink>
  					</div>
  					<div className={classes.signUp}>Sign up</div>
  				</div>
  		}
		</header>
    )
}
export default connect(null , {logout})(Header)