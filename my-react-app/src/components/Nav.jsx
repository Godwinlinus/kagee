import React from 'react'
import { NavLink } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom'

const active = ({ isActive }) => isActive ? 'nav-link active' : 'nav-link'

const Nav = () => {
  return (
    <nav>
        <NavLink to="/" className={active}>Home</NavLink>
        <NavLink to="/about" className={active}>About</NavLink>
        <NavLink to="/contact" className={active}>Contact</NavLink>
        <NavLink to="/post/1" className={active}>Posts</NavLink> 
    </nav>
  )
}

export default Nav
