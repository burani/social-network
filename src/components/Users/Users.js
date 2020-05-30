import React from "react";
import userPhoto from "../../assets/img/userPhoto.png";
import s from "./users.module.css";
import * as axios from "axios";
import {NavLink} from "react-router-dom";

const Users = (props) => {


    let pages = [];//это можно использовать как для самих элементов, так и для просто чисел
    let totalPages = Math.ceil(props.totalUsers / props.pageSize);

    for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
    }


    return (
        <div>
            <div>
                {
                    pages.map((pageNum) => {
                        return <span
                            className={pageNum === props.currentPage ? s.currentPage : '' + ' ' + s.pageNumber}
                            onClick={(event) => {
                                props.onPageNumClick(pageNum)
                            }}>{pageNum}</span>
                    })
                }
            </div>

            {props.users.map(
                (u) => {
                    return <div>
                        <div key={u.id}>
                            <NavLink to={"/profile/" + u.id}>
                                <img src={u.photos.small != null ? u.photos.small : userPhoto}
                                     className={s.usersPhoto}/>
                            </NavLink>
                            <span>name: {u.name}</span>
                            <span>status: {u.status}</span>
                            {
                                <button onClick={() => {
                                    if (u.followed) {
                                        axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                                            withCredentials: true,
                                            headers: {
                                                "API-KEY": "2f2def53-1584-4498-991e-181b10f82cdb"
                                            }
                                        }).then(
                                            (response) => {
                                                if (response.data.resultCode === 0) {
                                                    props.followToggle(u.id);
                                                }

                                            }
                                        );
                                    } else {
                                        axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                                            withCredentials: true,
                                            headers: {
                                                "API-KEY": "2f2def53-1584-4498-991e-181b10f82cdb"
                                            }
                                        }).then(
                                            (response) => {
                                                if (response.data.resultCode === 0) {
                                                    props.followToggle(u.id);
                                                }
                                            }
                                        );
                                    }

                                }
                                }>{u.followed ? 'unfollow' : 'follow'}</button>
                            }
                        </div>
                    </div>

                }
            )}
        </div>
    )
}

export default Users;