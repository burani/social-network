import React from "react";
import userPhoto from "../../assets/img/userPhoto.png";
import s from "./users.module.css";
import * as axios from "axios";
import {NavLink} from "react-router-dom";
import {usersAPI} from "../../api/api";
import User from "./User";

const Users = ({totalUsers, pageSize, currentPage, onPageNumClick, users, follow, unfollow, usersFollowing, portionSize = 10}) => {


    let pages = [];
    let totalPages = Math.ceil(totalUsers / pageSize);
    
    

    for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
    }


    return (
        <div>
            <div>
                {
                    pages.map((pageNum) => {
                        return <span
                            className={pageNum === currentPage ? s.currentPage : '' + ' ' + s.pageNumber}
                            onClick={(event) => {
                                onPageNumClick(pageNum)
                            }}>{pageNum}</span>
                    })
                }
            </div>

            {users.map(
                (u) => {
                    return <User id={u.id} photo={u.photos.small} name={u.name} status={u.status} followed={u.followed}
                                 follow={follow} unfollow={unfollow} usersFollowing={usersFollowing}/>

                }
            )}
        </div>
    )
}

export default Users;