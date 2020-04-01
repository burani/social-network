import React from "react";
import spinner from "../../assets/img/Spinner.svg"
import css from "./users.module.css"

const Preloader = (props) => {
    return(
        <div className={css.usersPhoto}>
            <img src={spinner} alt=""/>
        </div>
    )
}

export default Preloader;