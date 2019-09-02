import React from 'react';
import Users from './Users';
import { connect } from 'react-redux';
import * as axios from 'axios';
import { follow , unfollow , getUsersProfiles } from '../../redux/UsersReducer';
import {usersAPI} from '../../API/API';
import {getUsers , getPageSize , getUsersCount , getCurrentPageNumber , getIsFetching} from '../../redux/usersSelectors'

class UsersContainer extends React.Component {
    
    componentDidMount() {
        this.props.getUsersProfiles(this.props.currentPageNumber , this.props.pageSize)
        };

    onPageChange = (elem) => {
    this.props.getUsersProfiles(elem , this.props.pageSize);
    }
 
    render() {
        return (
            <Users  
                users={this.props.users}
                usersCount={this.props.usersCount}
                pageSize={this.props.pageSize}
                currentPageNumber={this.props.currentPageNumber}
                setFetchingState={this.props.setFetchingState}
                isFetching={this.props.isFetching}
                setUsers={this.props.setUsers}
                getUsersCount={this.props.getUsersCount}
                setCurrentPageNumber={this.props.setCurrentPageNumber}
                setFetchingState={this.props.setFetchingState}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                onPageChange={this.onPageChange}
            />
        )
    }
};

let mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        usersCount: getUsersCount(state),
        currentPageNumber: getCurrentPageNumber(state),
        isFetching: getIsFetching(state)
    }
};
        
export default connect(mapStateToProps , {follow , unfollow , getUsersProfiles} )(UsersContainer);


