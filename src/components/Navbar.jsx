import React from 'react'

const Navbar = () => {

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
   <div className="nav_container">
    <img src={require('./assets/logo.png')} className="logo"></img>
    <div className="nav-list">
      <div 
      onClick={() => scrollToSection('products')}
      className="nav-list_el">Продукты</div>
      <div
      onClick={() => scrollToSection('traders')}
      className="nav-list_el">Отзывы</div>
      <div 
      onClick={() => scrollToSection('company')}
      className="nav-list_el">О компании</div>
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