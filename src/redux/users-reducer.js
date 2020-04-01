let initialState = {
    users: [],
    currentPage: 1,
    pageSize: 5,//это может быть лучше перенести в саму компоненту
    totalUsers: 0,
    isFetching: false
};


const usersReducer = (state = initialState, action) => {
    switch (action.type) {


        case 'FOLLOW-TOGGLE': {
            return {
                ...state,
                users: state.users.map((u) => {
                    if (u.id === action.userId) return {...u, followed: !u.followed};
                    return u;//если не требуется изменений, то просто возвращаем неизмененный объект
                })
            }
        }

        case 'SET-USERS': {
            // debugger;
            return {
                ...state,
                users: [...action.users]
            }
        }
        case 'SET-CURRENT-PAGE': {
            // debugger;
            return {
                ...state,
                currentPage: action.currentPage
            }
        }
        case 'SET-TOTAL-USERS': {
            return {
                ...state,
                totalUsers: action.totalUsers
            }
        }
        case 'SET-PAGE-SIZE': {
            return {
                ...state,
                pageSize: action.pageSize
            }
        }

        case 'SET-FETCHING': {
            return {
                ...state,
                isFetching: action.isFetching
            }
        }
        default:
            return state;


    }
}

export const followToggleAC = (userId) => ({type: 'FOLLOW-TOGGLE', userId});
export const setUsersAC = (users) => ({type: 'SET-USERS', users});
export const setTotalUsersAC = (totalUsers) => ({type: 'SET-TOTAL-USERS', totalUsers});
export const setCurrentPageAC = (currentPage) => ({type: 'SET-CURRENT-PAGE', currentPage});
export const setFetchingAC = (isFetching) => ({type: 'SET-FETCHING', isFetching});



export default usersReducer;