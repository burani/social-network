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
    }


};

