import React from "react";
import css from './navbar.module.css';
import {NavLink} from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className={css.nav}>
            <div className={css.item}>
                <NavLink to="/profile" activeClassName={css.activeLink}>Profile</NavLink>
            </div>
            <div className={css.item}>
                <NavLink to="/dialogs" activeClassName={css.activeLink}>Messages</NavLink>
            </div>
            <div className={css.item}>
                <NavLink to="/users" activeClassName={css.activeLink}>Users</NavLink>
            </div>
            <div className={css.item}>
                <a>News</a>
            </div>
            <div className={css.item}>
                <a>Music</a>
            </div>
            <div className={css.item}>
                <a>Settings</a>
            </div>
        </nav>
    );
}

export default Navbar;