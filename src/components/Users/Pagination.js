import React from 'react'
import classes from './Pagination.module.css'
import Preloader from '../../common/Preloader/Preloader'
import {connect} from 'react-redux'
import {SetCurrentPageNumbersDecade} from '../../redux/UsersReducer'

const Pagination = (props) => {
        let allPageNumbersArray = [];

        for (let i = 1; i <= Math.ceil(props.usersCount / props.pageSize); i++) {
            allPageNumbersArray.push(i);
        };

        let CurrentPageNumbersArray = allPageNumbersArray.slice((props.currentPageNumbersDecade-1)*10,(props.currentPageNumbersDecade-1)*10+10)

        const setPreviousPageNumbersDecade = () => {
            if (props.currentPageNumbersDecade===1) return;
            props.SetCurrentPageNumbersDecade(props.currentPageNumbersDecade-1)
        }

        const setNextPageNumbersDecade = () => {
            
            if (props.usersCount / props.pageSize / 10 <= props.currentPageNumbersDecade) return;
            props.SetCurrentPageNumbersDecade(props.currentPageNumbersDecade+1)
        }

        return (
                <div className={classes.pageNumbersContainer}>
                    {props.isFetching ? <Preloader /> : null}

                    <span className={classes.pageNumbersDecadeChangeButton} onClick={setPreviousPageNumbersDecade}> {'<'} </span>
                        {CurrentPageNumbersArray.map(elem => {
                        
                        return <span key={elem} className={`${classes.pageNumbers} ${elem===props.currentPageNumber ? classes.activePageNumber : null}`}
                        onClick={() => {props.onPageChange(elem)}}>{elem}</span>
                        })}
                    <span className={classes.pageNumbersDecadeChangeButton} onClick={setNextPageNumbersDecade}> {'>'} </span>

                </div>
                )
}

let mapStateToProps = (state) => {
    return {
        currentPageNumbersDecade: state.usersPage.currentPageNumbersDecade
    }
}

export default connect(mapStateToProps , {SetCurrentPageNumbersDecade})(Pagination)