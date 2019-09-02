import React from 'react'
import classes from './Preloader.module.css'
import {NavLink} from 'react-router-dom'
const Preloader = () => {
    return (
       <img className={classes.loadingImg} src='https://www.store-4.com/WD_js_required/bx_loader.gif' />
    )
}

export default Preloader