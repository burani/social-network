import React from "react";
import {NavLink} from "react-router-dom";
import userPhoto from "../../assets/img/userPhoto.png";
import s from "./users.module.css";

const User = (props) => {
    return (
        <div>
            <div key={props.id}>
                <NavLink to={"/profile/" + props.id}>
                    <img src={props.photo != null ? props.photo : userPhoto}
                         className={s.usersPhoto}/>
                </NavLink>
                <span>name: {props.name}</span>
                <span>status: {props.status}</span>
                {
                    <button disabled={props.usersFollowing.some((userId) => (props.id === userId))}
                            onClick={() => {

                                if (props.followed) {
                                    props.unfollow(props.id);
                                } else {
                                    props.follow(props.id);
                                }

                            }
                            }>{props.followed ? 'unfollow' : 'follow'}</button>
                }
            </div>
        </div>
    )
}

export default User;