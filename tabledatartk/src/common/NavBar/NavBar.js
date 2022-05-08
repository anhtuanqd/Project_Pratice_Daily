import React from 'react'
import { NavLink } from 'react-router-dom'
import './NavBar.scss'
const NavBar = () => {
    return (
        <div className="nav_link">
            <NavLink to="/" activeclassname="active">
                Home
            </NavLink>
            <NavLink to="/table" activeclassname="active">
                Table Data
            </NavLink>
            <NavLink to="/register" activeclassname="active">
                Register
            </NavLink>
            <NavLink to="/login" activeclassname="active">
                Login
            </NavLink>
            <NavLink to="/loginMain" activeclassname="active">
                Login Main
            </NavLink>
        </div>
    )
}

export default NavBar
