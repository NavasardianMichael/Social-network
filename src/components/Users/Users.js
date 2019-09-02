import React from 'react'
import classes from './Users.module.css'
import Preloader from '../../common/Preloader/Preloader'
import {NavLink} from 'react-router-dom'
import * as axios from 'axios';

const Users = (props) => {

    let pageNumberArray = [];
     
    for (let i = 1; i <= Math.ceil(props.usersCount / props.pageSize); i++) {
        pageNumberArray.push(i);
    };

    return (
        <div className={classes.pageNumbersContainer}>
    {props.isFetching ? <Preloader /> : null}
    <div>
    {pageNumberArray.map(elem => {
           return <span className={`${classes.pageNumbers} ${elem===props.currentPageNumber ? classes.activePageNumber : null}`}
                    onClick={() => {props.onPageChange(elem)}}>{elem}</span>
                })   
    }
    </div>
    {props.users.map((elem) => {
    return (
    <div>

        <div className={classes.userBlock1}>
            <NavLink to={'/Profile/' + elem.id}><img src={elem.photos.large} /></NavLink>
            { (elem.followed) ? <button onClick= {()=> props.unfollow(elem.id)}>unfollow</button> 
            : <button onClick={()=>props.follow(elem.id)}>follow</button> }
        </div>
    
        <div className={classes.userBlock2}>
            <span>{elem.name}</span>
        </div>
    
    </div>
    )
    })
}
</div>
)
}

export default Users