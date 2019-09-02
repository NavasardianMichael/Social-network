import React from 'react';
import classes from './SideBar.module.css'
import SideBarElem from './SideBarElem/SideBarElem'

const SideBar = (props) => {

    let friendsList = props.friends.map( (elem) => {
        return <SideBarElem friendName={elem.name} /> 
    });

    return (
        <div className={classes.sideBar}>{friendsList}</div>
    )
}

export default SideBar 