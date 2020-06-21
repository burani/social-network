import Users from "./Users";
import {
    followToggle,
    setCurrentPage,
    setFetching,
    setTotalUsers,
    setUsers,
    toggleFollowingProgress,
    requestUsers,
    follow,
    unfollow
} from "../../redux/users-reducer";

import React from "react";
import Preloader from "./Preloader";
import WithAuthRedirect from "../../hoc/WithAuthRedirect";
import {compose} from "redux";
import {connect} from "react-redux";
import {
    getCurrentPage,
    getIsFetching,
    getPageSize,
    getTotalUsers,
    getUsersFollowing,
    getUsers
} from "../../redux/users-selectors";


class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.requestUsers(this.props.pageSize, 1);
    }


    onPageNumClick = (pageNum) => {

        this.props.requestUsers(this.props.pageSize, pageNum);
    };

    render() {
        return this.props.isFetching ? <Preloader/> :
            <Users totalUsers={this.props.totalUsers} pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage} users={this.props.users} onPageNumClick={this.onPageNumClick}
                   followToggle={this.props.followToggle} usersFollowing={this.props.usersFollowing}
                   toggleFollowingProgress={this.props.toggleFollowingProgress} follow={this.props.follow}
                   unfollow={this.props.unfollow}/>
    }
}

const mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        currentPage: getCurrentPage(state),
        totalUsers: getTotalUsers(state),
        pageSize: getPageSize(state),
        isFetching: getIsFetching(state),
        usersFollowing: getUsersFollowing(state),
    }
};

export default compose(
    connect(mapStateToProps, {
        followToggle,
        setUsers,
        setTotalUsers,
        setCurrentPage,
        setFetching,
        toggleFollowingProgress,
        requestUsers,
        follow,
        unfollow
    })
)(UsersContainer)