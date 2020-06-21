export const getUsers = (state) => {
    return state.usersPage.users
};
export const getCurrentPage= (state) => {
    return state.usersPage.currentPage
};
export const getTotalUsers = (state) => {
    return state.usersPage.totalUsers
};
export const getPageSize = (state) => {
    return state.usersPage.pageSize
};
export const getIsFetching = (state) => {
    return state.usersPage.isFetching
};
export const getUsersFollowing = (state) => {
    return state.usersPage.followingActive
};