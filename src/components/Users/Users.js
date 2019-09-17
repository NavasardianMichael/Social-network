import React from 'react'
import classes from './Users.module.css'
import Pagination from './Pagination'
import {NavLink} from 'react-router-dom'

const Users = (props) => {

    return (
            <div>
                <Pagination usersCount={props.usersCount} pageSize={props.pageSize} isFetching={props.isFetching} currentPageNumber={props.currentPageNumber}  activePageNumber={props.activePageNumber} onPageChange={props.onPageChange} />
                    
                    {props.users.map((elem) => {
                    return  <div>
                                <div className={classes.userBlock1}>
                                    <NavLink to={'/Profile/' + elem.id}><img src={elem.photos.large} /></NavLink>
                                        { (elem.followed) ? <button onClick= {()=> props.unfollow(elem.id)}>unfollow</button> 
                                                            : <button onClick={()=>props.follow(elem.id)}>follow</button> }
                                </div>
                                <div className={classes.userBlock2}>
                                    <span>{elem.name}</span>
                                </div>
                            </div>
                    })}
            </div>
            )
}

export default Users