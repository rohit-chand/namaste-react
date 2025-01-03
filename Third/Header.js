import React from 'react'
import '/Header.css'
import logo from './logo.jpg'
import {FaSearch, FaUser} from 'react-icons/fa'


const Header = () => {
  return (
    <div className='header'>
        <img className='logo' src={logo}/>
        <input className='search' type='text' placeholder="🔍 Search" />
        <div className='icon-box'><FaUser /></div>
    </div>
  )
}

export default Header