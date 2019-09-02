import React from 'react';
import classes from './Nav.module.css'
import {NavLink} from 'react-router-dom'
import SideBar from './SideBar/SideBar'

const Nav = (props) => {
return (
<nav className={classes.nav}>
    <div className={classes.item}>
        <a href='/Profile' activeClassName={classes.activeLink}>Profile</a>
    </div>
    <div className={classes.item}>
        <NavLink to='/Dialogs' activeClassName={classes.activeLink}>Messages</NavLink>
    </div>
    <div className={classes.item}>
        <NavLink to='/News' activeClassName={classes.activeLink}>News</NavLink>
    </div>
    <div className={classes.item}>
        <NavLink to='/Music' activeClassName={classes.activeLink}>Music</NavLink>
    </div>
    <div className={classes.item}>
        <NavLink to='/Users' activeClassName={classes.activeLink}>Users</NavLink>
    </div>
    <div className={classes.item}>
        <NavLink to='/Settings' activeClassName={classes.activeLink}>Settings</NavLink>
    </div>
{/*    <div>
        <SideBar friends={props.friends} />
    </div>*/}
</nav>
)
}
export default Nav