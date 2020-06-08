import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {
        "API-KEY": "2f2def53-1584-4498-991e-181b10f82cdb"
    }
});

export const usersAPI = {
    getUsers(pageSize = 1, currentPage = 10) {
        return instance.get(`users?count=${pageSize}&page=${currentPage}`, {withCredentials: true})
            .then(response => {
                return response.data;
            })
    },
    follow(id) {
        return instance.post(`follow/${id}`, {}, {
            withCredentials: true,
            headers: {
                "API-KEY": "2f2def53-1584-4498-991e-181b10f82cdb"
            }
        })
    },
    unfollow(id) {
        return instance.delete(`follow/${id}`, {
            withCredentials: true,
            headers: {
                "API-KEY": "2f2def53-1584-4498-991e-181b10f82cdb"
            }
        })
    },
    getProfileInfo(userId){
        console.warn("Obsolete method, please use profileAPI object");
        return profileAPI.getProfileInfo(userId);
    }
};


export const profileAPI = {
    getProfileInfo(userId){
        return instance.get('profile/' + userId)
    },
    getProfileStatus(userId){
        return instance.get('profile/status/' + userId)
    },
    updateProfileStatus(status){
        return instance.put('profile/status/', {status: status})
    }
};



export const authAPI = {
    getAuthUserData(){
        return instance.get('auth/me')
    },
};

