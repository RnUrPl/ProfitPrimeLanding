import React from 'react'
import ScrollToSection from '../ScrollToSection';

const Footer = () => {

  var scrollToSection = ScrollToSection();
  return (
    <section className='footer'>
      <div className="clasq">
      <span className='footer_txt'>ALL RIGHTS RESERVED<br/>© 2024, PROFIT PRIME.</span>
        <div className="footer_el_gr">
           
            <div 
             onClick={() => scrollToSection('products')}
             className="footer_el">Продукты</div>
            <div 
              onClick={() => scrollToSection('company')}
            className="footer_el">О компании</div>
        </div>
        <div className="footer_el_gr2">
           
           <div
            onClick={() => scrollToSection('traders')}
           className="footer_el">Отзывы</div>
           <div 
              onClick={() => scrollToSection('faq')}
           className="footer_el">FAQ</div>
       </div>
      </div>
         
       <span className='footer_txt2'>Public offer contract <br/>
Privacy Policy</span>
    </section>
  )
}

export default Footer