import React from 'react'
import ScrollToSection from './ScrollToSection'

const NavElementGroup = () => {
    var scrollToSection = ScrollToSection();
  return (
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
  )
}

export default NavElementGroup