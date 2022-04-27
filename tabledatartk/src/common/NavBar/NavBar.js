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
          </div>
     )
}

export default NavBar
