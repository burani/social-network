import React from 'react';
import css from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return <header className={css.header}>
        <img src='https://www.freelogodesign.org/Content/img/logo-ex-7.png' />
        <div>
            {props.isAuth? props.login : <NavLink to={'/login'} >
                Login
            </NavLink>}

        </div>
    </header>
}

export default Header;