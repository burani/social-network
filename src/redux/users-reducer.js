let initialState = {
    users: [],
    currentPage: 1,
    pageSize: 5,//это может быть лучше перенести в саму компоненту
    totalUsers: 0,
    isFetching: false,
    followingActive: []
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

        case 'SET-IS-FETCHING': {
            return {
                ...state,
                isFetching: action.isFetching
            }
        }

        //Если action.isFetching == true, то нам надо задисейблить кнопку(потому что мы ждем ответа от сервера). Если false - то нам надо убрать из массива то значение, которое было задисейблено(action.id).

        case 'TOGGLE-IS-FOLLOWING-PROGRESS': {
            return {
                ...state,
                followingActive: action.isFetching ? [...state.followingActive, action.id] : state.followingActive
                    .filter((userId) => (userId != action.id))
            }
        }

        default:
            return state;


    }
}

export const followToggle = (userId) => ({type: 'FOLLOW-TOGGLE', userId});
export const setUsers = (users) => ({type: 'SET-USERS', users});
export const setTotalUsers = (totalUsers) => ({type: 'SET-TOTAL-USERS', totalUsers});
export const setCurrentPage = (currentPage) => ({type: 'SET-CURRENT-PAGE', currentPage});
export const setFetching = (isFetching) => ({type: 'SET-IS-FETCHING', isFetching});
export const toggleFollowingProgress = (id, isFetching) => ({type: 'TOGGLE-IS-FOLLOWING-PROGRESS', id, isFetching});


export default usersReducer;