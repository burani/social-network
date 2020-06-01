import Users from "./Users";
import connect from "react-redux/lib/connect/connect";
import {followToggle, setCurrentPage, setFetching, setTotalUsers, setUsers, toggleFollowingProgress} from "../../redux/users-reducer";
import React from "react";
import * as axios from "axios";
import Preloader from "./Preloader";
import {usersAPI} from "../../api/api";

// const mapDispatchToProps = (dispatch) => {
//     return {
//         followToggle: (userId) =>{
//             return dispatch(followToggleAC(userId));
//         },
//         setUsers: (users) =>{
//             return dispatch(setUsersAC(users));
//         },
//         setTotalUsers: (totalUsers) => {
//             return dispatch(setTotalUsersAC(totalUsers));
//         },
//         setCurrentPage: (currentPage) => {
//             return dispatch(setCurrentPageAC(currentPage));
//         },
//         setFetching: (isFetching) => {
//             return dispatch(setFetchingAC(isFetching));
//         }
//     }
// }

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        currentPage: state.usersPage.currentPage,
        totalUsers: state.usersPage.totalUsers,
        pageSize: state.usersPage.pageSize,
        isFetching: state.usersPage.isFetching,
        usersFollowing: state.usersPage.followingActive




        // usersPage: state.usersPage

    }
}


class UsersContainer extends React.Component {

    componentDidMount() {

        this.props.setFetching(true);

        usersAPI.getUsers(this.props.pageSize).then(response => {
            this.props.setFetching(false);
            // console.log("Setting users");
            this.props.setUsers(response.items);
            // console.log(response.data);
            this.props.setTotalUsers(response.totalCount);
        })
    }


    onPageNumClick = (pageNum) => {
        this.props.setFetching(true);
        this.props.setCurrentPage(pageNum);
        //    здесь надо опять делать ajax запрос
        usersAPI.getUsers(this.props.pageSize, pageNum).then(response => {
            this.props.setFetching(false);

            this.props.setUsers(response.items);
            // console.log(response.data);
            this.props.setTotalUsers(response.totalCount);
        })
    }

    render() {
        return this.props.isFetching ? <Preloader/> :
            <Users totalUsers={this.props.totalUsers} pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage} users={this.props.users} onPageNumClick={this.onPageNumClick}
                   followToggle={this.props.followToggle} usersFollowing={this.props.usersFollowing} toggleFollowingProgress={this.props.toggleFollowingProgress}/>
    }
}


export default connect(mapStateToProps, {
    followToggle,
    setUsers,
    setTotalUsers,
    setCurrentPage,
    setFetching,
    toggleFollowingProgress
})(UsersContainer);