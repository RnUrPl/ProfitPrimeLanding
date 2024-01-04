import React from 'react'

const Navbar = () => {
  return (
   <div className="nav_container">
    <div className="nav_logo">Profit Prime</div>
    <div className="nav-list">
      <div className="nav-list_el">Продукты</div>
      <div className="nav-list_el">Отзывы</div>
      <div className="nav-list_el">О компании</div>
      <div className="nav-list_el">Контакты</div>
      <div className="nav-list_el">FAQ</div>
    </div>
    <div className="nav_contact"><span className='nav_txt'>Связаться с нами</span></div>
   </div>
  )
}

export default Navbar