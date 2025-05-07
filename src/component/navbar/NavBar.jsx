import React, { useState } from 'react'
import "./NavBar.css"
import store_logo from "/store_logo.jpg"
import { NavLink } from 'react-router-dom'
import { FiMenu, FiX } from "react-icons/fi"
import CartIcon from '../cart/CartIcon'
import Toggle from '../toggle/Toggle'

const NavBar = () => {

    const nav= [
        {
            item: "About Us", path: "/about"
        },
        {
            item: "Our Services", path: "/services"
        },
    ]

    const [openMenu, setOpenMenu] = useState(false)

    
  return (
    <div>
        <div className='navbar'>
            <div>
                <NavLink to="/">
                    <img src={store_logo} alt="" className='logo' />
                </NavLink>
            </div>
            <button className='hamburger' onClick={() => setOpenMenu(!openMenu)}>
                {openMenu ? <FiX/> : <FiMenu/>}
            </button>
            <div className={`nav ${openMenu ? "open" : ""}`}>
                {nav.map(({item,path}) => (
                    <NavLink
                        key={item}
                        to={path}
                        className='item'
                        onClick={() => setOpenMenu(false)}
                    >
                        {item}
                    </NavLink>
                ))}
                <CartIcon/>
                <Toggle/>
            </div>
        </div>
    </div>
  )
}

export default NavBar
