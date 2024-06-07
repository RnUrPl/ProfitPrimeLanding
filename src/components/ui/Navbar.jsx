import React from 'react'
import logo from '../assets/logo.png'
import NavElementGroup from '../NavElementGroup'
import LanguageSelector from '../DropDownMenu'

const Navbar = ({t,changeLanguage}) => {

  return (
   <div className="nav_container">
    <div className='log_g'>
    <img src={logo} className="logo" alt='logo'></img>
    <LanguageSelector changeLanguage={changeLanguage} />
    </div>
      <NavElementGroup t={t}/>
    <a href='https://t.me/ProfitPrime_support'className="nav_contact" target="_blank" rel="noreferrer" ><span className='nav_txt'>{t('nav_txt')}</span></a>
   </div>
  )
}

export default Navbar