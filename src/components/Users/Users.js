import React from "react";
import userPhoto from "../../assets/img/userPhoto.png";
import s from "./users.module.css";
import * as axios from "axios";
import {NavLink} from "react-router-dom";
import {usersAPI} from "../../api/api";
import User from "./User";

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
                    return <User id={u.id} photo={u.photos.small} name={u.name} status={u.status} followed={u.followed}
                                 follow={props.follow} unfollow={props.unfollow} usersFollowing={props.usersFollowing}/>

                }
            )}
        </div>
    )
}

export default Users;