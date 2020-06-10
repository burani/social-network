import Users from "./Users";
import {
    followToggle,
    setCurrentPage,
    setFetching,
    setTotalUsers,
    setUsers,
    toggleFollowingProgress,
    getUsers,
    follow,
    unfollow
} from "../../redux/users-reducer";
import React from "react";
import Preloader from "./Preloader";
import WithAuthRedirect from "../../hoc/WithAuthRedirect";
import {compose} from "redux";
import {connect} from "react-redux";


const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        currentPage: state.usersPage.currentPage,
        totalUsers: state.usersPage.totalUsers,
        pageSize: state.usersPage.pageSize,
        isFetching: state.usersPage.isFetching,
        usersFollowing: state.usersPage.followingActive,


        // usersPage: state.usersPage

    }
}


class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.pageSize, 1);
    }


    onPageNumClick = (pageNum) => {

        this.props.getUsers(this.props.pageSize, pageNum);
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


export default compose(
    WithAuthRedirect,
    connect(mapStateToProps, {
        followToggle,
        setUsers,
        setTotalUsers,
        setCurrentPage,
        setFetching,
        toggleFollowingProgress,
        getUsers,
        follow,
        unfollow
    })
)(UsersContainer)