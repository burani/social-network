import Users from "./Users";
import connect from "react-redux/lib/connect/connect";
import {followToggle, setCurrentPage, setFetching, setTotalUsers, setUsers} from "../../redux/users-reducer";
import React from "react";
import * as axios from "axios";
import Preloader from "./Preloader";


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
        isFetching: state.usersPage.isFetching
        // usersPage: state.usersPage

    }
}


class UsersContainer extends React.Component{

    componentDidMount() {

        this.props.setFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.currentPage}`, {withCredentials: true})
            .then(response => {
                this.props.setFetching(false);
                // console.log("Setting users");
                this.props.setUsers(response.data.items);
                // console.log(response.data);
                this.props.setTotalUsers(response.data.totalCount);
            })
    }


    onPageNumClick = (pageNum) =>{
        this.props.setFetching(true);
        this.props.setCurrentPage(pageNum);
        //    здесь надо опять делать ajax запрос
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${pageNum}`, {withCredentials: true})
            .then(response => {
                this.props.setFetching(false);

                this.props.setUsers(response.data.items);
                // console.log(response.data);
                this.props.setTotalUsers(response.data.totalCount);
            })
    }

    render() {
        return this.props.isFetching? <Preloader/> : <Users totalUsers={this.props.totalUsers} pageSize={this.props.pageSize} currentPage={this.props.currentPage} users={this.props.users} onPageNumClick={this.onPageNumClick}
                      followToggle={this.props.followToggle}/>
    }
}


export default connect(mapStateToProps, {
    followToggle,
    setUsers,
    setTotalUsers,
    setCurrentPage,
    setFetching
})(UsersContainer);