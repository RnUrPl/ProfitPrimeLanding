import React from 'react'
import logo from '../assets/logo.png'
import NavElementGroup from '../NavElementGroup'

const Navbar = () => {

  return (
   <div className="nav_container">
    <img src={logo} className="logo" alt='logo'></img>
      <NavElementGroup/>
    <a href='https://t.me/Matvey_Polozkov'className="nav_contact" target="_blank" rel="noreferrer" ><span className='nav_txt'>Связаться с нами</span></a>
   </div>
  )
}

export default Navbar