import React from 'react'
import ScrollToSection from '../ScrollToSection'
import logo from '../assets/logo.png'

const Navbar = () => {

  const scrollToSection = ScrollToSection();
  
  return (
   <div className="nav_container">
    <img src={logo} className="logo" alt='logo'></img>
    <div className="nav-list">
      <div 
      onClick={() => scrollToSection('products')}
      className="nav-list_el">Продукты</div>
      <div
      onClick={() => scrollToSection('traders')}
      className="nav-list_el">Отзывы</div>
      <div 
      onClick={() => scrollToSection('company')}
      className="nav-list_el ww">О компании</div>
      <div 
      onClick={() => scrollToSection('contacts')}
      className="nav-list_el">Контакты</div>
      <div 
      onClick={() => scrollToSection('faq')}
      className="nav-list_el">FAQ</div>
    </div>
    <div className="nav_contact"><span className='nav_txt'>Связаться с нами</span></div>
   </div>
  )
}

export default Navbar