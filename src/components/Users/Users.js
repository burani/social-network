import React from "react";
import userPhoto from "../../assets/img/userPhoto.png";
import s from "./users.module.css";
import * as axios from "axios";
import {NavLink} from "react-router-dom";
import {usersAPI} from "../../api/api";

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
                                <button disabled={props.usersFollowing.some((userId) => (u.id === userId))}
                                        onClick={() => {

                                            if (u.followed) {
                                                props.unfollow(u.id);
                                            } else {
                                                props.follow(u.id);
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