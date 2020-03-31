import Users from "./Users";
import connect from "react-redux/lib/connect/connect";
import {followToggleAC, setCurrentPageAC, setTotalUsersAC, setUsersAC} from "../../redux/users-reducer";


const mapDispatchToProps = (dispatch) => {
    return {
        followToggle: (userId) =>{
            return dispatch(followToggleAC(userId));
        },
        setUsers: (users) =>{
            return dispatch(setUsersAC(users));
        },
        setTotalUsers: (totalUsers) => {
            return dispatch(setTotalUsersAC(totalUsers));
        },
        setCurrentPage: (currentPage) => {
            return dispatch(setCurrentPageAC(currentPage));
        }
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        currentPage: state.usersPage.currentPage,
        totalUsers: state.usersPage.totalUsers,
        pageSize: state.usersPage.pageSize,
        // usersPage: state.usersPage

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);